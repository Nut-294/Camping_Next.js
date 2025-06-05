import { z, ZodSchema } from "zod";

export const profileSchema = z.object({
  firstName: z.string().min(2, { message: "ชื่อ อักขระมากว่า 2 อักขระ" }),
  lastName: z.string().min(2, { message: "นามสกุล อักขระมากว่า 2 อักขระ" }),
  userName: z.string().min(2, { message: "username อักขระมากว่า 2 อักขระ" }),
});

// function ตรวจสอบ รับ (Schema และ data) จาก zod
export const validateWithZod = <T>(
    schema: ZodSchema<T>, 
    data: unknown):T => {
  const result = schema.safeParse(data);
  if (!result.success) {
    //ถ้าไม่สำเร้จ
    const errors = result.error?.errors.map((error) => error.message);
    throw new Error(errors.join(","));
  }
  return result.data;
};
