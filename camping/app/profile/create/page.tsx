import { SubmitButton } from "@/components/form/Buttons";
import FormContainer from "@/components/form/FormContainer";
import FormInput from "@/components/form/FormInput";
import { createProfileAction } from "../../../actions/actions";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

const CreateProfile = async () => {
  const user = await currentUser();
  //ถ้ามี Profile ให้ไปหน้า หลัก
  if (user?.privateMetadata.hasProfile) redirect("/");
  return (
    <section>
      <h1 className="text-sxl font-semibold mb-8 capitalize">New User</h1>
      <div className="border p-8 rounded-md">
        <FormContainer action={createProfileAction}>
          <div className="grid md:grid-cols-2 gap-4 mt-4">
            <FormInput
              name="firstName"
              label="First Name"
              type="text"
              placeholder="First Name"
            />
            <FormInput
              name="lastName"
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
          <SubmitButton text="create Profile" size="lg" />
        </FormContainer>
      </div>
    </section>
  );
};
export default CreateProfile;
