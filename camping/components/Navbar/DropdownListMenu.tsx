import { AlignLeft } from "lucide-react";
import { Button } from "../ui/button";
import Usericon from "./Usericon";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import { links } from "@/utils/link";

//asChild ใช้ความสามารถของลูกๆ เพราะในนี้เรามี trigger แต่ยังจะใส่ button ไปอีกเลย error
const DropdownListMenu = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">
          <AlignLeft />
          <Usericon />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent>
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />

        {/* links จาก utils วนลูปเอาไม่จ้องเขียนแยก*/}
        {links.map((item, index) => {
          return (
            <DropdownMenuItem key={index}>
              <Link href={item.href}> {item.label}</Link>
            </DropdownMenuItem>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
export default DropdownListMenu;
