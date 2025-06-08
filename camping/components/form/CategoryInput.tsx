import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { categories } from "@/utils/categories";
const CategoryInput = ({ defaultValue }: { defaultValue?: string }) => {
  const name = "category";
  return (
    <div className="mb-2">
      <Label htmlFor={name} className="capitalize">{name}</Label>
      {/* ถ้ามีค่าส่ง defaultValue มาให้ใช้ค่านั้น */}
      <Select
        name={name}
        defaultValue={defaultValue || categories[0].label}
        required
      >
        <SelectTrigger>
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          {categories.map((item) => {
            return (
              <SelectItem key={item.label} value={item.label}>
                <span className="capitalize flex items-center gap-4">
                  <item.icon />
                  {item.label}
                </span>
              </SelectItem>
            );
          })}
        </SelectContent>
      </Select>
    </div>
  );
};
export default CategoryInput;
