import { createClient } from "@supabase/supabase-js";

const bucket = "landmark-bucket";
const url = process.env.SUPABASE_URL as string;
const key = process.env.SUPABASE_KEY as string;
// Create Supabase client
const supabase = createClient(url, key);

// Upload file using standard upload
export async function uploadFile(image: File) {
  //สร้างชื่อภาพ
  const timeStamp = Date.now();
  const newName = `p-${timeStamp}-${image.name}`;
  console.log("timeStamp", timeStamp, "newName", newName);

  const { data, error } = await supabase.storage
    .from(bucket)
    .upload(newName, image);
  if (!data) throw new Error("image upload failed!!");
  return supabase.storage.from(bucket).getPublicUrl(newName).data.publicUrl;
}
