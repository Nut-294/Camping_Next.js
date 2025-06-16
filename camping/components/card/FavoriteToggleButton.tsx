import { Heart } from "lucide-react";
import { Button } from "../ui/button";
const FavoriteToggleButton = ({ LandmarkId }: { LandmarkId: string }) => {
  return (
    <Button size='icon' variant='outline'>
      <Heart fill='black'/>
    </Button>
  );
};
export default FavoriteToggleButton;
