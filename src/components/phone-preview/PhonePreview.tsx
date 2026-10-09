import PreviewLink from "../preview-link/PreviewLink";

interface PhonePreviewProps {
  links?: ILink[];
}

const PhonePreview = ({ links = [] }: PhonePreviewProps) => {
  return (
    <div className="hidden w-2/5 max-w-140 shrink-0 items-center justify-center rounded-xl bg-white p-6 lg:flex">
      <div className="relative">
        <img src="/images/illustration-phone-mockup.svg" alt="Phone preview" />
        <ul className="absolute top-69.25 left-8.75 flex w-59.25 flex-col gap-5">
          {links.map((link) => (
            <PreviewLink key={link.id} platform={link.platform} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PhonePreview;
