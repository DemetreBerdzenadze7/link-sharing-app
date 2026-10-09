import { useCallback, useState } from "react";
import { Link, Navigate } from "react-router";
import PreviewLink from "../components/preview-link/PreviewLink";
import Toast from "../components/toast/Toast";
import { useAccount } from "../context/Accounts";

const Preview = () => {
  const { currentAccount, canPreview } = useAccount();
  const [showToast, setShowToast] = useState(false);

  const closeToast = useCallback(() => setShowToast(false), []);

  if (!currentAccount) {
    return <Navigate to="/login" replace />;
  }

  // nothing to preview until the profile and links are saved
  if (!canPreview) {
    return <Navigate to="/home" replace />;
  }

  const { firstName, lastName, profileEmail, profilePicture, links } =
    currentAccount;
  const name = `${firstName} ${lastName}`.trim();

  const shareLink = async () => {
    await navigator.clipboard.writeText(window.location.href);
    setShowToast(true);
  };

  return (
    <div className="relative min-h-screen bg-white md:bg-light-grey">
      <div className="absolute inset-x-0 top-0 hidden h-89.25 rounded-b-4xl bg-purple md:block" />

      <div className="relative mx-auto flex w-full max-w-360 flex-col items-center gap-14 pb-16 md:gap-31.5 md:p-6 lg:gap-26.5">
        <header className="flex w-full items-center gap-4 px-6 py-4 md:justify-between md:rounded-xl md:bg-white md:py-4 md:pr-4 md:pl-6">
          <Link
            to="/home"
            className="flex-1 rounded-lg border border-purple px-4 py-2.5 text-center whitespace-nowrap md:px-6.75 text-base leading-normal font-semibold text-purple hover:bg-light-purple md:flex-none"
          >
            Back to Editor
          </Link>
          <button
            type="button"
            onClick={shareLink}
            className="flex-1 cursor-pointer rounded-lg bg-purple px-4 py-2.75 whitespace-nowrap md:px-6.75 text-base leading-normal font-semibold text-white hover:bg-purple-hover md:flex-none"
          >
            Share Link
          </button>
        </header>

        <div className="flex w-full flex-col items-center md:w-87.25 md:rounded-3xl md:bg-white md:px-6 md:py-12 md:shadow-[0_0_32px_0_rgba(0,0,0,0.1)]">
          {profilePicture && (
            <img
              src={profilePicture}
              alt={name || "Profile"}
              className="size-28 rounded-full border-4 border-purple object-cover"
            />
          )}

          {name && (
            <h1 className="mt-6 max-w-full text-center text-[32px] break-words leading-normal font-bold text-dark-grey">
              {name}
            </h1>
          )}

          {profileEmail && (
            <p className="mt-2 max-w-full text-center text-base break-words leading-normal text-grey">
              {profileEmail}
            </p>
          )}

          <ul className="mt-14 flex w-59.25 flex-col gap-5">
            {links.map((link, index) => (
              <PreviewLink
                key={index}
                platform={link.platform}
                href={link.link}
                large
              />
            ))}
          </ul>
        </div>
      </div>

      {showToast && (
        <Toast
          message="The link has been copied to your clipboard!"
          icon="/images/icon-link-copied-to-clipboard.svg"
          onClose={closeToast}
        />
      )}
    </div>
  );
};

export default Preview;
