import { Skeleton } from "../ui/skeleton";

const LoadingCard = () => {
  return (
    <>
      <SkeletonCardHero />
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mt-4">
        <SkeletonCard />
        <SkeletonCard />
        <SkeletonCard />
        <SkeletonCard />
        <SkeletonCard />
        <SkeletonCard />
        <SkeletonCard />
        <SkeletonCard />
      </div>
    </>
  );
};
export default LoadingCard;

export const SkeletonCard = () => {
  return (
    <div>
      <Skeleton className="h-[300px] rounded-mb mb-2" />
      <Skeleton className="h-4 w-3/4 rounded-mb mb-2" />
      <Skeleton className="h-4 w-1/2 rounded-mb mb-2" />
      <Skeleton className="h-4 w-1/4 rounded-mb" />
    </div>
  );
};

export const SkeletonCardHero = () => {
  return (
    <div>
      <Skeleton className="w-full h-[400px] rounded-mb mb-2" />
      <Skeleton className="h-12 w-full rounded-mb mb-2" />
    </div>
  );
};
