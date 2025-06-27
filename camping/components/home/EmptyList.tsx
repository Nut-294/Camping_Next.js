import Link from "next/link";
import { Button } from "../ui/button";

const EmptyList = ({
  heading = "No items",
  message = "Please Try Again",
  btnText = "Back Home",
}: {
  heading?: string;
  message?: string;
  btnText?: string;
}) => {
  return (
    <div>
      <h2 className="text-xl font-bold">{heading}</h2>
      <p className="text-lg mb-4">{message}</p>
      <Button className="capitalize" asChild>
        {/* asChild createDOM ตัวลูก */}
        <Link href="/">{btnText}</Link>
      </Button>
    </div>
  );
};
export default EmptyList;
