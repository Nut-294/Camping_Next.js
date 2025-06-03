import { SubmitButton } from "@/components/form/Buttons";
import FormContainer from "@/components/form/FormContainer";
import FormInput from "@/components/form/FormInput";

const createProfileAction = async (prevState:any,formData: FormData) => {
  "use server";
  //นำค่าจาก firstNameมาใช้
  const firstName = formData.get("firstName") as string;
  console.log('firstName jaa',firstName);
  return {message :'CreateProfile'}
};

const CreateProfile = () => {
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
          <SubmitButton text="create Profile" size="lg" />
        </FormContainer>
      </div>
    </section>
  );
};
export default CreateProfile;
