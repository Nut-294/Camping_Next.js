//กำหนดขนิดข้อมูลการเข้าออก Function
export type actionFunction = (
    prevState: any,
    formData: FormData
  ) => Promise<{ message: string }>;
  