import LandmarkCard from "../card/LandmarkCard";
import { LandmarkCardProps } from "@/utils/types";
const LandmarkList = ({ Landmarks }: { Landmarks: LandmarkCardProps[] }) => {
  // console.log("LandmarkList", Landmarks);
  return (
    <section className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mt-4">
      {Landmarks.map((Landmark) => {
        return <LandmarkCard key={Landmark.id} Landmark={Landmark} />;
      })}
    </section>
  );
};
export default LandmarkList;
