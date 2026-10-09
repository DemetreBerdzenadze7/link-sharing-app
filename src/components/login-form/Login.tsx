import InputField from "../input-field/InputField";
import { useForm, type SubmitHandler } from "react-hook-form";
import { Link } from "react-router";
import { useNavigate } from "react-router";
import { useAccount } from "../../context/Accounts";

const Login = () => {
  const { accounts, login } = useAccount();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<TInputs>();
  const onSubmit: SubmitHandler<TInputs> = (data) => {
    const account = accounts.find((account) => account.email === data.email);
    if (!account) {
      setError("email", { message: "Account not found" });
      return;
    }

    if (data.password !== account.password) {
      console.log(account);
      setError("password", { message: "Wrong password" });
      return;
    }

    login(account.email);
    navigate("/home");
  };

  return (
    <div className="flex min-h-screen flex-col gap-16 bg-white md:items-center md:justify-center md:gap-12.75 md:bg-light-grey">
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

        <form className="flex flex-col gap-6" onSubmit={handleSubmit(onSubmit)}>
          <InputField
            id="email"
            label="Email address"
            type="text"
            icon="/images/icon-email.svg"
            placeholder="e.g. alex@email.com"
            error={errors.email?.message}
            {...register("email")}
          />
          <InputField
            id="password"
            label="Password"
            type="password"
            icon="/images/icon-password.svg"
            placeholder="Enter your password"
            error={errors.password?.message}
            {...register("password")}
          />

          <button
            type="submit"
            className="w-full cursor-pointer rounded-lg bg-purple px-6.75 py-2.75 text-base leading-normal font-semibold text-white hover:bg-purple-hover hover:shadow-[0_0_32px_0_rgba(99,60,255,0.25)]"
          >
            Login
          </button>

          <p className="flex flex-col text-center text-base leading-normal text-grey md:flex-row md:justify-center md:gap-1">
            <span>Don’t have an account?</span>
            <Link to="/registration" className="text-purple">
              Create account
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
