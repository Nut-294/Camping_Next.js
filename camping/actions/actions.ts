"use server";
import {
  imageSchema,
  landmarkSchema,
  profileSchema,
  validateWithZod,
} from "@/utils/schemas";
import { clerkClient, currentUser } from "@clerk/nextjs/server";
import db from "@/utils/db";
import { redirect } from "next/navigation";
import { uploadFile } from "@/utils/supabase";
import { revalidatePath } from "next/cache";

//ตรวจจับ มีข้อมูล user สำหรับนำไปเช็คและเรียกใช้
const getAuthUser = async () => {
  const user = await currentUser();
  if (!user) {
    throw new Error("you must logged!!");
  }
  //ถ้าไม่มี Profile ใ้ห้ไปหน้า ลงทะเบียน
  if (!user.privateMetadata.hasProfile) redirect("profile/create");
  return user;
};

const renderError = (error: unknown): { message: string } => {
  return {
    message: error instanceof Error ? error.message : "Error!!",
  };
};

export const createProfileAction = async (
  prevState: any,
  formData: FormData
) => {
  try {
    const user = await currentUser();
    if (!user) throw new Error("Please Login!!");

    const rawData = Object.fromEntries(formData);
    const validateField = validateWithZod(profileSchema, rawData);
    console.log("validated จากหน้าบ้าน", validateField);
    //ค่าตัวแปรจากหน้าบ้านต้องตรงกับ schema ในฐานข้อมูล พิมเล็กพิมใหญ่ต้องตรง เพราะเราเอาค่าไปคัดลองลงฐานข้อมูลเลย

    await db.profile.create({
      //log ดูค่า userเพื่อดูว่าต้องเข้าถึงตัวไหน
      data: {
        clerkId: user.id,
        email: user.emailAddresses[0].emailAddress,
        profileImage: user.imageUrl ?? "",
        // ... คือ คัดลอก Object
        ...validateField,
      },
    });

    const client = await clerkClient();
    await client.users.updateUserMetadata(user.id, {
      privateMetadata: {
        hasProfile: true,
      },
    });

    // return { message: "Create Profile Success!!" };
  } catch (error) {
    // console.log(error);
    return renderError(error);
  }
  redirect("/");
};

export const createLandmarkAction = async (
  prevState: any,
  formData: FormData
): Promise<{ message: string }> => {
  try {
    const user = await getAuthUser();
    const rawData = Object.fromEntries(formData);
    const file = formData.get("image") as File;
    //1.Validate
    const validatedFile = validateWithZod(imageSchema, { image: file });
    const validatedField = validateWithZod(landmarkSchema, rawData);
    // console.log("validatedFile.image", validatedFile.image);
    // console.log("validatedField", validatedField);
    //2. Upload supabase
    const fullPath = await uploadFile(validatedFile.image);
    console.log("fullpath = ", fullPath);
    //3.Insert DB
    await db.landmark.create({
      //log ดูค่า userเพื่อดูว่าต้องเข้าถึงตัวไหน
      data: {
        // ... คือ คัดลอก Object
        ...validatedField,
        image: fullPath,
        profileId: user.id,
      },
    });

    // return { message: "Create Landmark Success!!" };
  } catch (error) {
    // console.log(error);
    return renderError(error);
  }
  redirect("/");
};

export const fetchLandmarks = async ({
  search = "",
  category,
}: {
  search?: string;
  category?: string;
}) => {
  const landmarks = await db.landmark.findMany({
    where: {
      category: category,
      // insensitive ต้นหาโดยไม่สน พิมใหญ่พิมเล็ก
      OR: [
        { name: { contains: search, mode: "insensitive" } },
        { description: { contains: search, mode: "insensitive" } },
      ],
    },
    orderBy: {
      createdAt: "desc",
    },
  });
  return landmarks;
};

export const fetchLandmarksHero = async () => {
  const landmarks = await db.landmark.findMany({
    orderBy: {
      createdAt: "desc",
    },
    take:5
  });
  return landmarks;
};

//ใช้ landmarkId และ profileId
export const fetchFavoriteId = async ({
  landmarkId,
}: {
  landmarkId: string;
}) => {
  const user = await getAuthUser();
  const favorite = await db.favorite.findFirst({
    where: {
      landmarkId: landmarkId,
      profileId: user.id,
    },
    select: {
      id: true,
    },
  });
  return favorite?.id || null;
};

export const toggleFavoriteAction = async (prevState: {
  favoriteId: string | null;
  landmarkId: string;
  pathname: string;
}) => {
  const { favoriteId, landmarkId, pathname } = prevState;
  const user = await getAuthUser();
  try {
    //ถ้าเคยกดแล้วสั้ง ให้ Delete
    if (favoriteId) {
      await db.favorite.delete({
        where: {
          id: favoriteId,
        },
      });
    }
    //ถ้ายังไม่เคยกด ให้ Create
    else {
      await db.favorite.create({
        data: {
          landmarkId: landmarkId,
          profileId: user.id,
        },
      });
    }
    //อัพเดทข้อมูลอยู่เสมอ
    revalidatePath(pathname);
    return {
      message: favoriteId ? "Remove Favorite Success" : "Add Favorite Success",
    };
  } catch (error) {
    return renderError(error);
  }
};

export const fetchFavorites = async () => {
  const user = getAuthUser();
  const favorites = await db.favorite.findMany({
    where: {
      profileId: user.id,
    },
    select: {
      landmark: {
        select: {
          id: true,
          name: true,
          description: true,
          image: true,
          price: true,
          province: true,
          lat: true,
          lng: true,
          category: true,
        },
      },
    },
  });
  return favorites.map((favorite) => favorite.landmark);
};
