const EmptyLinks = () => {
  return (
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
          Use the “Add new link” button to get started. Once you have more than
          one link, you can reorder and edit them. We’re here to help you share
          your profiles with everyone!
        </p>
      </div>
    </div>
  );
};

export default EmptyLinks;
