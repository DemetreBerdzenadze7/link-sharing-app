import { getPlatform } from "../../constants/platforms";
import PlatformIcon from "../platform-icon/PlatformIcon";

interface PreviewLinkProps {
  platform: string;
}

const PreviewLink = ({ platform }: PreviewLinkProps) => {
  const { name, icon, color } = getPlatform(platform);
  const isLight = name === "Frontend Mentor";

  return (
    <li
      className={`flex h-11 items-center gap-2 rounded-lg px-4 text-xs leading-normal ${
        isLight ? "border border-borders text-dark-grey" : "text-white"
      }`}
      style={{ backgroundColor: color }}
    >
      <PlatformIcon
        icon={icon}
        className={isLight ? "text-[#3f54a3]" : ""}
      />
      <span className="flex-1">{name}</span>
      <span
        className={`size-4 bg-current mask-[url(/images/icon-arrow-right.svg)] mask-contain mask-center mask-no-repeat ${
          isLight ? "text-grey" : ""
        }`}
      />
    </li>
  );
};

export default PreviewLink;
