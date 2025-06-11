import Image from "next/image";

const LandmarkCard = ({ Landmark }) => {
  const { name, image } = Landmark;
  console.log("LandmarkCard", "name", name, "image", image);
  return (
    <article className="relative">
      <div className="relative h-[300px]">
        <Image
          src={image}
          sizes="(max-width:768px) 100vh, 50vw"
          alt={name}
          fill
          className="object-cover"
        />
        {name}
      </div>
    </article>
  );
};
export default LandmarkCard;
