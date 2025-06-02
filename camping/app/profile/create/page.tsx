import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

const CreateProfileAction = async (formData: FormData) => {
  "use server";
  //นำค่าจาก firstNameมาใช้
  const firstName = formData.get("firstName") as string;
  console.log(firstName);
};

const CreateProfile = () => {
  return (
    <section>
      <h1 className="text-sxl font-semibold mb-8 capitalize">New User</h1>
      <div className="border p-8 rounded-md max-w-lg">
        <form action={CreateProfileAction}>
          <div>
            <Label htmlFor="firstName">First Name</Label>
            <Input name="firstName" type="text" />
          </div>
          <Button type="submit" size="lg">
            Create
          </Button>
        </form>
      </div>
    </section>
  );
};
export default CreateProfile;
