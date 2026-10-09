import PreviewLink from "../preview-link/PreviewLink";

interface PhonePreviewProps {
  links?: ILink[];
  image?: string | null;
  name?: string;
  email?: string;
}

const PhonePreview = ({
  links = [],
  image,
  name,
  email,
}: PhonePreviewProps) => {
  const hasProfile = Boolean(image || name || email);

  return (
    <div className="hidden w-2/5 max-w-140 shrink-0 items-center justify-center rounded-xl bg-white p-6 lg:flex">
      <div className="relative">
        <img src="/images/illustration-phone-mockup.svg" alt="Phone preview" />

        {image && (
          <img
            src={image}
            alt="Profile"
            className="absolute top-15.75 left-26.25 size-24 rounded-full border-4 border-purple object-cover"
          />
        )}
        {name && (
          <p className="absolute top-46 right-5 left-5 truncate bg-white text-center text-lg leading-normal font-semibold text-dark-grey">
            {name}
          </p>
        )}
        {email && (
          <p className="absolute top-54.75 right-5 left-5 truncate bg-white text-center text-sm leading-normal text-grey">
            {email}
          </p>
        )}

        <ul
          className={`absolute left-8.75 flex w-59.25 flex-col gap-5 ${
            hasProfile ? "top-74" : "top-69.25"
          }`}
        >
          {links.map((link) => (
            <PreviewLink key={link.id} platform={link.platform} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PhonePreview;
