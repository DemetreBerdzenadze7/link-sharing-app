import type { ComponentProps } from "react";

type ProfileFieldProps = ComponentProps<"input"> & {
  id: string;
  label: string;
};

const ProfileField = ({ id, label, ...inputProps }: ProfileFieldProps) => {
  return (
    <div className="flex flex-col gap-1 md:flex-row md:items-center md:gap-4">
      <label
        htmlFor={id}
        className="text-xs leading-normal text-dark-grey md:w-60 md:shrink-0 md:text-base md:text-grey"
      >
        {label}
      </label>
      <input
        id={id}
        {...inputProps}
        className="w-full min-w-0 rounded-lg border border-borders bg-white px-4 py-3 text-base leading-normal text-dark-grey caret-purple outline-none placeholder:text-dark-grey/50 focus:border-purple focus:shadow-[0_0_32px_0_rgba(99,60,255,0.25)]"
      />
    </div>
  );
};

export default ProfileField;
