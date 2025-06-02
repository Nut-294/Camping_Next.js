import FormInput from "@/components/form/FormInput";
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
      <div className="border p-8 rounded-md">
        <form action={CreateProfileAction}>
          <div className="grid md:grid-cols-2 gap-4 mt-4">
          <FormInput
            name="firstName"
            label="First Name"
            type="text"
            placeholder="First Name"
          />
          <FormInput
            name="Last Name"
            label="Last Name"
            type="text"
            placeholder="LastName"
          />

          <FormInput
            name="userName"
            label=" UserName"
            type="text"
            placeholder="UserName"
          />
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
