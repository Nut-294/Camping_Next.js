import LoadingCard from "@/components/card/LoadingCard";
import LandmarkContainer from "@/components/home/LandmarkContainer";
import { Suspense } from "react";
const page = async({searchParams}:{searchParams:{search?:string,category?:string}}) => {
  const {search,category} = await searchParams;
  // console.log('search',search)
  return (
    <section>
      {/* Suspense เเอาไว้แสดง UI ตอนโหลดข้อมูล*/}
      <Suspense fallback={<LoadingCard/>}>
        <LandmarkContainer search={search} category={category}/>
      </Suspense>
    </section>
  );
};
export default page;
