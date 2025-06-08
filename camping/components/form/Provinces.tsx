import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { provinces } from "@/utils/provinces";
const ProvinceInput = ({ defaultValue }: { defaultValue?: string }) => {
  const name = "province";
  return (
    <div className="mb-2">
      <Label htmlFor={name} className="capitalize">
        {name}
      </Label>
      {/* ถ้ามีค่าส่ง defaultValue มาให้ใช้ค่านั้น */}
      <Select
        name={name}
        defaultValue={defaultValue || provinces[0].PROVINCE_NAME}
        required
      >
        <SelectTrigger suppressHydrationWarning>
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          {provinces.map((item) => {
            return (
              <SelectItem key={item.PROVINCE_ID} value={item.PROVINCE_NAME}>
                <span className="capitalize flex items-center gap-4">
                  {item.PROVINCE_NAME}
                </span>
              </SelectItem>
            );
          })}
        </SelectContent>
      </Select>
    </div>
  );
};
export default ProvinceInput;
