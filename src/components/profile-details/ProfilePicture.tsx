import type { ChangeEvent } from "react";

interface ProfilePictureProps {
  image: string | null;
  onImageChange: (file: File) => void;
}

const ProfilePicture = ({ image, onImageChange }: ProfilePictureProps) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) onImageChange(file);
    // reset so the same file can be picked again
    e.target.value = "";
  };

  return (
    <div className="flex flex-col gap-4 rounded-xl bg-light-grey p-5 md:flex-row md:items-center md:gap-4">
      <span className="text-base leading-normal text-grey md:w-60 md:shrink-0">
        Profile picture
      </span>

      <div className="flex flex-col gap-6 md:flex-row md:items-center">
        <label
          htmlFor="profile-picture"
          className={`relative flex size-48.25 shrink-0 cursor-pointer flex-col items-center justify-center gap-2 overflow-hidden rounded-xl bg-light-purple bg-cover bg-center ${
            image ? "text-white" : "text-purple"
          }`}
          style={image ? { backgroundImage: `url(${image})` } : undefined}
        >
          {image && <span className="absolute inset-0 bg-black/50" />}
          <span className="relative size-10 bg-current mask-[url(/images/icon-upload-image.svg)] mask-contain mask-center mask-no-repeat" />
          <span className="relative text-base leading-normal font-semibold">
            {image ? "Change Image" : "+ Upload Image"}
          </span>
          <input
            id="profile-picture"
            type="file"
            accept="image/png, image/jpeg"
            onChange={handleChange}
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
