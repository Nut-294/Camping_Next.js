import { z, ZodSchema } from "zod";

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

// function ตรวจสอบ รับ (Schema และ data) จาก zod
//<T> เป็นการประกาศ function ว่าจะมีการใช้ Generic
// refine เป็นการกำหนดเงื่อนไขเพิ่มเติม
const validateImage = () => {
  const maxFileSize = 1024 * 1024;
  return z.instanceof(File).refine((file) => {
    return file.size <= maxFileSize;
  }, "File Size must be less than 1MB");
};

export const imageSchema = z.object({
  image: validateImage(),
});

export const validateWithZod = <T>(schema: ZodSchema<T>, data: unknown): T => {
  const result = schema.safeParse(data);
  if (!result.success) {
    //ถ้าไม่สำเร้จ
    const errors = result.error?.errors.map((error) => error.message);
    throw new Error(errors.join(","));
  }
  return result.data;
};
