import PhonePreview from "../components/phone-preview/PhonePreview";
import ProfileDetailsForm from "../components/profile-details/ProfileDetails";

const ProfileDetails = () => {
  return (
    <div className="flex w-full gap-6">
      <PhonePreview />
      <ProfileDetailsForm />
    </div>
  );
};

export default ProfileDetails;
