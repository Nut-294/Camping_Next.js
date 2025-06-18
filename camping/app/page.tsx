import LoadingCard from "@/components/card/LoadingCard";
import LandmarkContainer from "@/components/home/LandmarkContainer";
import { Suspense } from "react";
const page = () => {
  return (
    <section>
      {/* Suspense เเอาไว้แสดง UI ตอนโหลดข้อมูล*/}
      <Suspense fallback={<LoadingCard/>}>
        <LandmarkContainer />
      </Suspense>
    </section>
  );
};
export default page;
