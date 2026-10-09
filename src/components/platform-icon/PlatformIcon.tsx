interface PlatformIconProps {
  icon: string;
  className?: string;
}

// the icon is used as a mask, so it takes the current text color
const PlatformIcon = ({ icon, className = "" }: PlatformIconProps) => {
  return (
    <span
      className={`size-4 shrink-0 bg-current mask-luminance mask-contain mask-center mask-no-repeat ${className}`}
      style={{ maskImage: `url(${icon})`, WebkitMaskImage: `url(${icon})` }}
    />
  );
};

export default PlatformIcon;
