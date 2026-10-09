import { useCallback, useEffect, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import PhonePreview from "../components/phone-preview/PhonePreview";
import ProfileDetailsForm from "../components/profile-details/ProfileDetails";
import Toast from "../components/toast/Toast";
import { profileSchema } from "../schemas/profile";

const ProfileDetails = () => {
  const methods = useForm<TProfileInputs>({
    resolver: yupResolver(profileSchema),
    defaultValues: { firstName: "", lastName: "", email: "" },
  });
  const [image, setImage] = useState<string | null>(null);
  const [showToast, setShowToast] = useState(false);

  const [firstName, lastName, email] = methods.watch([
    "firstName",
    "lastName",
    "email",
  ]);

  // free the old preview url when the image changes or the page unmounts
  useEffect(() => {
    return () => {
      if (image) URL.revokeObjectURL(image);
    };
  }, [image]);

  const changeImage = (file: File) => {
    setImage(URL.createObjectURL(file));
  };

  const closeToast = useCallback(() => setShowToast(false), []);

  return (
    <div className="flex w-full gap-6">
      <PhonePreview
        image={image}
        name={`${firstName} ${lastName}`.trim()}
        email={email}
      />

      <FormProvider {...methods}>
        <ProfileDetailsForm
          image={image}
          onImageChange={changeImage}
          onSave={() => setShowToast(true)}
        />
      </FormProvider>

      {showToast && (
        <Toast
          message="Your changes have been successfully saved!"
          icon="/images/icon-changes-saved.svg"
          onClose={closeToast}
        />
      )}
    </div>
  );
};

export default ProfileDetails;
