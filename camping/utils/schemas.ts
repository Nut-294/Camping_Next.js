import { z, ZodSchema } from "zod";

//ตรวจ input
export const profileSchema = z.object({
  firstName: z
    .string()
    .min(2, { message: "ชื่อ ต้องมีความยาวอย่างน้อย 2 ตัวอักษร" }),
  lastName: z
    .string()
    .min(2, { message: "นามสกุล ต้องมีความยาวอย่างน้อย 2 ตัวอักษร" }),
  userName: z
    .string()
    .min(2, { message: "username ต้องมีความยาวอย่างน้อย 2 ตัวอักษร" }),
});

//ตรวจขนาดรูปภาพ
//refine เป็นการกำหนดเงื่อนไขเพิ่มเติม
const validateImage = () => {
  const maxFileSize = 1024 * 1024;
  return z.instanceof(File).refine((file) => {
    return file.size <= maxFileSize;
  }, "File Size must be less than 1MB");
};
export const imageSchema = z.object({
  image: validateImage(),
});

// ตรวจข้อมูลรับเข้าใน Form ของ Landmark
export const landmarkSchema = z.object({
  name: z
    .string()
    .min(2, { message: "ชื่อต้องมากกว่า 2 ตัวอักษร" })
    .max(30, { message: "ชื่อต้องน้อยกว่า 30 ตัวอักษร" }),
  category: z.string(),
  description: z
    .string()
    .min(2, { message: "รายละเอียดต้องมากกว่า 2 ตัวอักษร" })
    .max(200, { message: "รายละเอียดต้องน้อยกว่า 200 ตัวอักษร" }),
    price:z.coerce.number().int().min(0,{message:'ราคาต้องมากกว่า 0'}), //coerce แปลงค่าให้เป็นตามเงื่อนไขด้านหลัง
    province:z.string(),
    lat: z.coerce.number(),
    lng: z.coerce.number()
});

// function ตรวจสอบ รับ (Schema และ data) จาก zod
//<T> เป็นการประกาศ function ว่าจะมีการใช้ Generic
export const validateWithZod = <T>(schema: ZodSchema<T>, data: unknown): T => {
  const result = schema.safeParse(data);
  if (!result.success) {
    //ถ้าไม่สำเร้จ
    const errors = result.error?.errors.map((error) => error.message);
    throw new Error(errors.join(","));
  }
  return result.data;
};
