import LandmarkCard from "../card/LandmarkCard";
import { LandmarkCardProps } from "@/utils/types";
import LoadingCard from "../card/LoadingCard";
const LandmarkList = ({ landmarks }: { landmarks: LandmarkCardProps[] }) => {
  // console.log("LandmarkList", Landmarks);
  return (
    <section className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mt-4">
      {landmarks.map((Landmark) => {
        return <LandmarkCard key={Landmark.id} landmark={Landmark} />;
      })}
    </section>
  );
};
export default LandmarkList;
