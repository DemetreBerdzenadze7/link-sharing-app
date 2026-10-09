import InputField from "../input-field/InputField";
import { useForm, type SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Link } from "react-router";

const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

const schema = yup
  .object({
    email: yup
      .string()
      .trim()
      .required("Can't be empty")
      .matches(EMAIL_REGEX, "Invalid email"),
    password: yup
      .string()
      .required("Can't be empty")
      .min(8, "At least 8 characters")
      .matches(/[a-z]/, "Needs a lowercase letter")
      .matches(/[A-Z]/, "Needs an uppercase letter")
      .matches(/\d/, "Needs a number"),
  })
  .required();

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TInputs>({
    resolver: yupResolver(schema),
  });
  const onSubmit: SubmitHandler<TInputs> = (data) => console.log(data);

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
