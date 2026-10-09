import { getPlatform } from "../../constants/platforms";
import PlatformIcon from "../platform-icon/PlatformIcon";

interface PreviewLinkProps {
  platform: string;
  large?: boolean;
  href?: string;
}

const PreviewLink = ({ platform, large = false, href }: PreviewLinkProps) => {
  const { name, icon, color } = getPlatform(platform);
  const isLight = name === "Frontend Mentor";

  const className = `flex items-center gap-2 rounded-lg px-4 leading-normal ${
    large ? "h-14 text-base" : "h-11 text-xs"
  } ${isLight ? "border border-borders text-dark-grey" : "text-white"}`;

  const content = (
    <>
      <PlatformIcon
        icon={icon}
        className={`${large ? "size-5" : ""} ${isLight ? "text-[#3f54a3]" : ""}`}
      />
      <span className="flex-1">{name}</span>
      <span
        className={`size-4 bg-current mask-[url(/images/icon-arrow-right.svg)] mask-contain mask-center mask-no-repeat ${
          isLight ? "text-grey" : ""
        }`}
      />
    </>
  );

  return (
    <li>
      {href ? (
        <a
          href={href}
          target="_blank"
          rel="noreferrer"
          className={`${className} hover:opacity-90`}
          style={{ backgroundColor: color }}
        >
          {content}
        </a>
      ) : (
        <div className={className} style={{ backgroundColor: color }}>
          {content}
        </div>
      )}
    </li>
  );
};

export default PreviewLink;
