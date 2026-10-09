import ProfilePicture from "./ProfilePicture";
import ProfileField from "./ProfileField";

const ProfileDetails = () => {
  return (
    <div className="flex flex-1 flex-col rounded-xl bg-white">
      <div className="flex flex-1 flex-col gap-10 p-6 md:p-10">
        <div className="flex flex-col gap-2 leading-normal">
          <h1 className="text-2xl font-bold text-dark-grey md:text-[32px]">
            Profile Details
          </h1>
          <p className="text-base text-grey">
            Add your details to create a personal touch to your profile.
          </p>
        </div>

        <div className="flex flex-col gap-6">
          <ProfilePicture />

          <div className="flex flex-col gap-3 rounded-xl bg-light-grey p-5">
            <ProfileField
              id="first-name"
              label="First name*"
              type="text"
              placeholder="e.g. John"
            />
            <ProfileField
              id="last-name"
              label="Last name*"
              type="text"
              placeholder="e.g. Appleseed"
            />
            <ProfileField
              id="profile-email"
              label="Email"
              type="email"
              placeholder="e.g. email@example.com"
            />
          </div>
        </div>
      </div>

      <div className="flex justify-end border-t border-borders p-4 md:px-10 md:py-6">
        <button
          type="button"
          className="w-full cursor-pointer rounded-lg bg-purple px-6.75 py-2.75 text-base leading-normal font-semibold text-white hover:bg-purple-hover hover:shadow-[0_0_32px_0_rgba(99,60,255,0.25)] md:w-auto"
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default ProfileDetails;
