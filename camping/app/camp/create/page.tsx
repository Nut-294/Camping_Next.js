import { SubmitButton } from "@/components/form/Buttons";
import FormContainer from "@/components/form/FormContainer";
import FormInput from "@/components/form/FormInput";
import { createLandmarkAction } from "../../../actions/actions";
// import { currentUser } from "@clerk/nextjs/server";
// import { redirect } from "next/navigation";
import CategoryInput from "@/components/form/CategoryInput";
import TextAreaInput from "@/components/form/TextAreaInput";
import ProvinceInput from "@/components/form/Provinces";
import MapWrapper from "@/components/map/MapWrapper";
import ImageInput from "@/components/form/ImageInput";


const CreateProfile = async () => {
  return (
    <section>
      <h1 className="text-sxl font-semibold mb-8 capitalize">
        Create Landmark
      </h1>
      <div className="border p-8 rounded-md">
        <FormContainer action={createLandmarkAction}>
          <div className="grid md:grid-cols-2 gap-4 mt-4">
            <FormInput
              name="name"
              label="Landmark Name"
              type="text"
              placeholder="Landmark Name"
            />
          </div>
          <div>
            <CategoryInput />
          </div>

          <TextAreaInput name="description" />

          <div className="grid md:grid-cols-2 gap-4 mt-4">
            <FormInput
              name="price"
              label="price"
              type="number"
              placeholder="Price"
            />

            <ProvinceInput />
          </div>
          <ImageInput/>
          <MapWrapper />

          <SubmitButton text="create Landmark" size="lg" />
        </FormContainer>
      </div>
    </section>
  );
};
export default CreateProfile;
