import { NavLink } from "react-router";

const navLinkClass = ({ isActive }: { isActive: boolean }) =>
  `flex items-center gap-2 rounded-lg px-6.75 py-2.75 text-base leading-normal font-semibold ${
    isActive ? "bg-light-purple text-purple" : "text-grey hover:text-purple"
  }`;

const Header = () => {
  return (
    <header className="flex items-center justify-between bg-white py-4 pr-4 pl-6 md:rounded-xl md:p-4 md:pl-6">
      <img
        src="/images/logo-devlinks-small.svg"
        alt="devlinks"
        className="md:hidden"
      />
      <img
        src="/images/logo-devlinks-large.svg"
        alt="devlinks"
        className="hidden md:block"
      />

      <nav className="flex items-center md:gap-4">
        <NavLink to="/home" className={navLinkClass}>
          <span className="size-5 bg-current mask-[url(/images/icon-links-header.svg)] mask-contain mask-center mask-no-repeat" />
          <span className="hidden md:inline">Links</span>
        </NavLink>
        <NavLink to="/profile-details" className={navLinkClass}>
          <span className="size-5 bg-current mask-[url(/images/icon-profile-details-header.svg)] mask-contain mask-center mask-no-repeat" />
          <span className="hidden md:inline">Profile Details</span>
        </NavLink>
      </nav>

      <button
        type="button"
        className="flex cursor-pointer items-center rounded-lg border border-purple px-4 py-2.75 text-base leading-normal font-semibold text-purple hover:bg-light-purple md:px-6.75"
      >
        <img src="/images/icon-preview-header.svg" alt="" className="md:hidden" />
        <span className="hidden md:inline">Preview</span>
      </button>
    </header>
  );
};

export default Header;
