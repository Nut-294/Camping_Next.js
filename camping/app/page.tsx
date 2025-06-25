import LoadingCard from "@/components/card/LoadingCard";
import LandmarkContainer from "@/components/home/LandmarkContainer";
import { Suspense } from "react";
const page = async({searchParams}:{searchParams:{search?:string}}) => {
  const {search} = await searchParams;
  // console.log('search',search)
  return (
    <section>
      {/* Suspense เเอาไว้แสดง UI ตอนโหลดข้อมูล*/}
      <Suspense fallback={<LoadingCard/>}>
        <LandmarkContainer search={search}/>
      </Suspense>
    </section>
  );
};
export default page;
