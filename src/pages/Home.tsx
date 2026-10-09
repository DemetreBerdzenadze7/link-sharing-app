const Home = () => {
  return (
    <div className="flex w-full gap-6">
      <div className="hidden w-2/5 max-w-140 shrink-0 items-center justify-center rounded-xl bg-white p-6 lg:flex">
        <img src="/images/illustration-phone-mockup.svg" alt="Phone preview" />
      </div>

      <div className="flex flex-1 flex-col rounded-xl bg-white">
        <div className="flex flex-1 flex-col gap-10 p-6 md:p-10">
          <div className="flex flex-col gap-2 leading-normal">
            <h1 className="text-2xl font-bold text-dark-grey md:text-[32px]">
              Customize your links
            </h1>
            <p className="text-base text-grey">
              Add/edit/remove links below and then share all your profiles
              with the world!
            </p>
          </div>

          <div className="flex flex-1 flex-col gap-6">
            <button
              type="button"
              className="w-full cursor-pointer rounded-lg border border-purple px-6.75 py-2.75 text-base leading-normal font-semibold text-purple hover:bg-light-purple"
            >
              + Add new link
            </button>

            <div className="flex flex-1 flex-col items-center justify-center gap-6 rounded-xl bg-light-grey p-5 text-center md:gap-10 md:py-15.5">
              <img
                src="/images/illustration-empty.svg"
                alt=""
                className="w-31 md:w-auto"
              />
              <div className="flex max-w-122 flex-col gap-6 leading-normal">
                <h2 className="text-2xl font-bold text-dark-grey md:text-[32px]">
                  Let’s get you started
                </h2>
                <p className="text-base text-grey">
                  Use the “Add new link” button to get started. Once you have
                  more than one link, you can reorder and edit them. We’re here
                  to help you share your profiles with everyone!
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-end border-t border-borders p-4 md:px-10 md:py-6">
          <button
            type="button"
            disabled
            className="w-full rounded-lg bg-purple px-6.75 py-2.75 text-base leading-normal font-semibold text-white opacity-25 md:w-auto"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
