import { fetchLandmarks } from "@/actions/actions";
import LandmarkList from "./LandmarkList";
import { LandmarkCardProps } from "@/utils/types";
import Hero from "../hero/Hero";
const LandmarkContainer = async ({search}:{search?:string}) => {
  const landmarks:LandmarkCardProps[] = await fetchLandmarks({search});
  // console.log(landmarks);
  return (
    <div>
      <Hero landmarks={landmarks}/>
      <LandmarkList landmarks={landmarks} />
    </div>
  );
};
export default LandmarkContainer;
