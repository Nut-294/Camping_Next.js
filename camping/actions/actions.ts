"use server";
import { profileSchema, validateWithZod } from "@/utils/schemas";
import { clerkClient, currentUser } from "@clerk/nextjs/server";
import db from "@/utils/db";
import { redirect } from "next/navigation";

//ตรวจจับ
const getAuthUser = async () => {
  const user = await currentUser();
  console.log("user จาก clerk", user);
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
    if(!user) throw new Error("Please Login!!");

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
):Promise<{ message: string }> => {
  try {
    const user = await currentUser();
    if(!user) throw new Error("Please Login!!");

    const rawData = Object.fromEntries(formData);
    // const validateField = validateWithZod(profileSchema, rawData);
    console.log("validated จากหน้าบ้าน", rawData);
  

    return { message: "Create Landmark Success!!" };
  } catch (error) {
    // console.log(error);
    return renderError(error);
  }
  // redirect("/");
};
