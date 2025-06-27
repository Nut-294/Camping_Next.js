import { fetchLandmarkDetail } from "@/actions/actions";

const LandmarkDetail = async ({ params }: { params: { id: string } }) => {
  const { id } = await params;
  const landmark = await fetchLandmarkDetail({id})
  console.log("landmark",landmark)
  return <div>LandmarkDetail</div>;
};
export default LandmarkDetail;
