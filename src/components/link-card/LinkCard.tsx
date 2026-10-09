import { useEffect, useRef, useState } from "react";
import { useFormContext } from "react-hook-form";
import InputField from "../input-field/InputField";
import PlatformIcon from "../platform-icon/PlatformIcon";
import { PLATFORMS, getPlatform } from "../../constants/platforms";

interface LinkCardProps {
  index: number;
  onRemove: () => void;
}

const LinkCard = ({ index, onRemove }: LinkCardProps) => {
  const {
    register,
    watch,
    setValue,
    trigger,
    formState: { errors, isSubmitted },
  } = useFormContext<TLinksInputs>();
  const platform = watch(`links.${index}.platform`);
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const selected = getPlatform(platform);

  // close the dropdown when clicking outside of it
  useEffect(() => {
    if (!isOpen) return;
    const handleClick = (e: MouseEvent) => {
      if (!dropdownRef.current?.contains(e.target as Node)) setIsOpen(false);
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [isOpen]);

  const selectPlatform = (name: string) => {
    setValue(`links.${index}.platform`, name);
    // the url is checked against the platform, so re-check it after a change
    if (isSubmitted) trigger(`links.${index}.link`);
    setIsOpen(false);
  };

  return (
    <div className="flex flex-col gap-3 rounded-xl bg-light-grey p-5">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img src="/images/icon-drag-and-drop.svg" alt="" />
          <span className="text-base leading-normal font-bold text-grey">
            Link #{index + 1}
          </span>
        </div>
        <button
          type="button"
          onClick={onRemove}
          className="cursor-pointer text-base leading-normal text-grey"
        >
          Remove
        </button>
      </div>

      <div className="flex flex-col gap-1">
        <span className="text-xs leading-normal text-dark-grey">Platform</span>
        <div ref={dropdownRef} className="relative">
          <button
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
            className={`flex w-full cursor-pointer items-center gap-3 rounded-lg border bg-white px-4 py-3 text-left ${
              isOpen
                ? "border-purple shadow-[0_0_32px_0_rgba(99,60,255,0.25)]"
                : "border-borders"
            }`}
          >
            <PlatformIcon icon={selected.icon} className="text-grey" />
            <span className="flex-1 text-base leading-normal text-dark-grey">
              {selected.name}
            </span>
            <img
              src="/images/icon-chevron-down.svg"
              alt=""
              className={`shrink-0 transition-transform ${isOpen ? "rotate-180" : ""}`}
            />
          </button>

          {isOpen && (
            <ul className="absolute top-full right-0 left-0 z-10 mt-4 max-h-86 overflow-y-auto rounded-lg border border-borders bg-white px-4 shadow-[0_0_32px_0_rgba(0,0,0,0.1)]">
              {PLATFORMS.map(({ name, icon }) => (
                <li
                  key={name}
                  className="border-b border-borders last:border-b-0"
                >
                  <button
                    type="button"
                    onClick={() => selectPlatform(name)}
                    className={`flex w-full cursor-pointer items-center gap-3 py-3 text-base leading-normal hover:text-purple ${
                      name === selected.name ? "text-purple" : "text-dark-grey"
                    }`}
                  >
                    <PlatformIcon
                      icon={icon}
                      className={name === selected.name ? "" : "text-grey"}
                    />
                    {name}
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      <InputField
        id={`link-${index}`}
        label="Link"
        type="text"
        icon="/images/icon-link.svg"
        placeholder={selected.placeholder}
        error={errors.links?.[index]?.link?.message}
        {...register(`links.${index}.link`)}
      />
    </div>
  );
};

export default LinkCard;
