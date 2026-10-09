import type { ComponentProps } from "react";

type ProfileFieldProps = ComponentProps<"input"> & {
  id: string;
  label: string;
  error?: string;
};

const ProfileField = ({
  id,
  label,
  error,
  ...inputProps
}: ProfileFieldProps) => {
  return (
    <div className="flex flex-col gap-1 md:flex-row md:items-center md:gap-4">
      <label
        htmlFor={id}
        className={`text-xs leading-normal md:w-60 md:shrink-0 md:text-base ${
          error ? "text-red" : "text-dark-grey md:text-grey"
        }`}
      >
        {label}
      </label>
      <div
        className={`flex w-full min-w-0 items-center gap-3 rounded-lg border bg-white px-4 py-3 ${
          error
            ? "border-red"
            : "border-borders focus-within:border-purple focus-within:shadow-[0_0_32px_0_rgba(99,60,255,0.25)]"
        }`}
      >
        <input
          id={id}
          {...inputProps}
          className="w-full min-w-0 bg-transparent text-base leading-normal text-dark-grey caret-purple outline-none placeholder:text-dark-grey/50"
        />
        {error && (
          <span className="shrink-0 text-xs leading-normal text-red">
            {error}
          </span>
        )}
      </div>
    </div>
  );
};

export default ProfileField;
