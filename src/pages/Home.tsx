import LinkCard from "../components/link-card/LinkCard";
import EmptyLinks from "../components/empty-links/EmptyLinks";
import PhonePreview from "../components/phone-preview/PhonePreview";
import { useAccount } from "../context/Accounts";

const Home = () => {
  const { currentAccount, addLink } = useAccount();
  const links = currentAccount?.links ?? [];

  return (
    <div className="flex w-full gap-6">
      <PhonePreview links={links} />

      <div className="flex flex-1 flex-col rounded-xl bg-white">
        <div className="flex flex-1 flex-col gap-10 p-6 md:p-10">
          <div className="flex flex-col gap-2 leading-normal">
            <h1 className="text-2xl font-bold text-dark-grey md:text-[32px]">
              Customize your links
            </h1>
            <p className="text-base text-grey">
              Add/edit/remove links below and then share all your profiles with
              the world!
            </p>
          </div>

          <div className="flex flex-1 flex-col gap-6">
            <button
              type="button"
              onClick={() => currentAccount && addLink(currentAccount.email)}
              className="w-full cursor-pointer rounded-lg border border-purple px-6.75 py-2.75 text-base leading-normal font-semibold text-purple hover:bg-light-purple"
            >
              + Add new link
            </button>

            {links.length === 0 ? (
              <EmptyLinks />
            ) : (
              links.map((link, index) => (
                <LinkCard
                  key={index}
                  index={index}
                  email={currentAccount!.email}
                  platform={link.platform}
                  url={link.link}
                />
              ))
            )}
          </div>
        </div>

        <div className="flex justify-end border-t border-borders p-4 md:px-10 md:py-6">
          <button
            type="button"
            disabled={links.length === 0}
            className="w-full cursor-pointer rounded-lg bg-purple px-6.75 py-2.75 text-base leading-normal font-semibold text-white hover:bg-purple-hover hover:shadow-[0_0_32px_0_rgba(99,60,255,0.25)] disabled:cursor-default disabled:opacity-25 disabled:hover:bg-purple disabled:hover:shadow-none md:w-auto"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
