import { fetchLandmarkDetail } from "@/actions/actions";
import FavoriteToggleButton from "@/components/card/FavoriteToggleButton";
import Breadcrumbs from "@/components/landmark/Breadcrumbs";
import ImageContainer from "@/components/landmark/ImageContainer";
import { redirect } from "next/navigation";

const LandmarkDetail = async ({ params }: { params: { id: string } }) => {
  const { id } = await params;
  const landmark = await fetchLandmarkDetail({ id });
  // console.log("landmark", landmark);
  if (!landmark) redirect("/");
  return (
    <section>
      <Breadcrumbs name={landmark.name} />
      <header className="flex justify-between items-center mt-4">
        <h1 className="text-4xl font-bold">{landmark.name}</h1>
        <div className="flex items-center gap-x-4">
          <span>share</span>
          <FavoriteToggleButton landmarkId={landmark.id} />
        </div>
      </header>
      <ImageContainer mainImage={landmark.image} name={landmark.name}/>
    </section>
  );
};
export default LandmarkDetail;
