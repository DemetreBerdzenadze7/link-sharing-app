import { useCallback, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router";
import PhonePreview from "../components/phone-preview/PhonePreview";
import ProfileDetailsForm from "../components/profile-details/ProfileDetails";
import Toast from "../components/toast/Toast";
import { useAccount } from "../context/Accounts";
import { profileSchema } from "../schemas/profile";

const ProfileDetails = () => {
  const { currentAccount } = useAccount();
  const navigate = useNavigate();
  const methods = useForm<TProfileInputs>({
    resolver: yupResolver(profileSchema),
    defaultValues: {
      firstName: currentAccount?.firstName ?? "",
      lastName: currentAccount?.lastName ?? "",
      email: currentAccount?.profileEmail ?? "",
      profilePicture: currentAccount?.profilePicture ?? "",
    },
  });
  const [showToast, setShowToast] = useState(false);

  const [firstName, lastName, email, image] = methods.watch([
    "firstName",
    "lastName",
    "email",
    "profilePicture",
  ]);

  // store the image as a data url so it survives a page refresh
  const changeImage = (file: File) => {
    const reader = new FileReader();
    reader.onload = () => {
      methods.setValue("profilePicture", reader.result as string, {
        shouldValidate: methods.formState.isSubmitted,
      });
    };
    reader.readAsDataURL(file);
  };

  // go to the preview once links are saved too, otherwise just confirm
  const handleSave = () => {
    if (currentAccount && currentAccount.links.length > 0) {
      navigate("/preview");
    } else {
      setShowToast(true);
    }
  };

  const closeToast = useCallback(() => setShowToast(false), []);

  return (
    <div className="flex w-full gap-6">
      <PhonePreview
        image={image}
        name={`${firstName} ${lastName}`.trim()}
        email={email}
        links={currentAccount?.links}
      />

      <FormProvider {...methods}>
        <ProfileDetailsForm
          image={image}
          onImageChange={changeImage}
          onSave={handleSave}
        />
      </FormProvider>

      {showToast && (
        <Toast
          message="Saved! Add at least one link to see the preview."
          icon="/images/icon-changes-saved.svg"
          onClose={closeToast}
        />
      )}
    </div>
  );
};

export default ProfileDetails;
