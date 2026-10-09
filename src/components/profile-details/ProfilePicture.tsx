const ProfilePicture = () => {
  return (
    <div className="flex flex-col gap-4 rounded-xl bg-light-grey p-5 md:flex-row md:items-center md:gap-4">
      <span className="text-base leading-normal text-grey md:w-60 md:shrink-0">
        Profile picture
      </span>

      <div className="flex flex-col gap-6 md:flex-row md:items-center">
        <label
          htmlFor="profile-picture"
          className="flex size-48.25 shrink-0 cursor-pointer flex-col items-center justify-center gap-2 rounded-xl bg-light-purple"
        >
          <img src="/images/icon-upload-image.svg" alt="" />
          <span className="text-base leading-normal font-semibold text-purple">
            + Upload Image
          </span>
          <input
            id="profile-picture"
            type="file"
            accept="image/png, image/jpeg"
            className="sr-only"
          />
        </label>

        <p className="text-xs leading-normal text-grey">
          Image must be below 1024x1024px. Use PNG or JPG format.
        </p>
      </div>
    </div>
  );
};

export default ProfilePicture;
