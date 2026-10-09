type InputFieldProps = {
  id: string;
  label: string;
  type: string;
  icon: string;
  placeholder: string;
  error?: string;
};

const InputField = ({
  id,
  label,
  type,
  icon,
  placeholder,
  error,
}: InputFieldProps) => {
  return (
    <div className="flex w-full flex-col gap-1">
      <label
        htmlFor={id}
        className={`text-xs leading-normal ${error ? "text-red" : "text-dark-grey"}`}
      >
        {label}
      </label>
      <div
        className={`flex w-full items-center gap-3 rounded-lg border bg-white px-4 py-3 ${
          error
            ? "border-red"
            : "border-borders focus-within:border-purple focus-within:shadow-[0_0_32px_0_rgba(99,60,255,0.25)]"
        }`}
      >
        <img src={icon} alt="" className="shrink-0" />
        <input
          id={id}
          type={type}
          placeholder={placeholder}
          className="w-full min-w-0 bg-transparent text-base leading-normal text-dark-grey caret-purple outline-none placeholder:text-dark-grey/50"
        />
        {error && (
          <span className="shrink-0 text-xs leading-normal text-red">
            {error}
          </span>
        )}
      </div>
    </div>
  );
};

const Registration = () => {
  return (
    <div className="flex min-h-screen flex-col gap-16 bg-white p-8 md:items-center md:justify-center md:gap-12.75 md:bg-light-grey md:p-6">
      <img
        src="/images/logo-devlinks-large.svg"
        alt="devlinks"
        className="self-start md:self-center"
      />

      <div className="flex w-full flex-col gap-10 md:max-w-119 md:rounded-xl md:bg-white md:p-10">
        <div className="flex flex-col gap-2 leading-normal">
          <h1 className="text-2xl font-bold text-dark-grey md:text-[32px]">
            Login
          </h1>
          <p className="text-base text-grey">
            Add your details below to get back into the app
          </p>
        </div>

        <form className="flex flex-col gap-6">
          <InputField
            id="email"
            label="Email address"
            type="email"
            icon="/images/icon-email.svg"
            placeholder="e.g. alex@email.com"
          />
          <InputField
            id="password"
            label="Password"
            type="password"
            icon="/images/icon-password.svg"
            placeholder="Enter your password"
          />

          <button
            type="submit"
            className="w-full cursor-pointer rounded-lg bg-purple px-6.75 py-2.75 text-base leading-normal font-semibold text-white hover:bg-purple-hover hover:shadow-[0_0_32px_0_rgba(99,60,255,0.25)]"
          >
            Login
          </button>

          <p className="flex flex-col text-center text-base leading-normal text-grey md:flex-row md:justify-center md:gap-1">
            <span>Don’t have an account?</span>
            <a href="#" className="text-purple">
              Create account
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Registration;
