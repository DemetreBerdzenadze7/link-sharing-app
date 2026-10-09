import { useEffect, useState } from "react";
import InputField from "../input-field/InputField";
import { useForm, type SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link, useLocation, useNavigate } from "react-router";
import { loginSchema } from "../../schemas/auth";

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [showToast, setShowToast] = useState(
    Boolean(location.state?.accountCreated),
  );

  useEffect(() => {
    if (!showToast) return;
    // clear the state so the toast doesn't come back on page refresh
    navigate(location.pathname, { replace: true, state: null });
    const timer = setTimeout(() => setShowToast(false), 4000);
    return () => clearTimeout(timer);
  }, [showToast, navigate, location.pathname]);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TInputs>({
    resolver: yupResolver(loginSchema),
  });
  const onSubmit: SubmitHandler<TInputs> = () => {
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

      {showToast && (
        <div
          role="status"
          className="fixed bottom-10 left-1/2 w-[calc(100%-32px)] max-w-max -translate-x-1/2 rounded-xl bg-dark-grey px-6 py-4 text-center text-base leading-normal font-semibold text-light-grey shadow-[0_0_32px_0_rgba(0,0,0,0.1)]"
        >
          Your account has been created! Please log in.
        </div>
      )}
    </div>
  );
};

export default Login;
