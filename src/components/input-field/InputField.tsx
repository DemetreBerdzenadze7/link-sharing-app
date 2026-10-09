import type { ComponentProps } from "react";

type InputFieldProps = ComponentProps<"input"> & {
  id: string;
  label: string;
  icon: string;
  error?: string;
};

const InputField = ({
  id,
  label,
  icon,
  error,
  ...inputProps
}: InputFieldProps) => {
  return (
    <div className="flex w-full flex-col gap-1">
      <label
        htmlFor={id}
        className="text-xs leading-normal text-dark-grey"
      >
        {label}
      </label>
      <div
        className={`flex w-full items-center gap-3 rounded-lg border bg-white px-4 py-3 ${
          error
            ? "border-red"
            : "border-borders focus-within:border-purple focus-within:shadow-[0_0_32px_0_rgba(99,60,255,0.25)]"
        }`}
      >
        <img src={icon} alt="" className="shrink-0" />
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

export default InputField;
