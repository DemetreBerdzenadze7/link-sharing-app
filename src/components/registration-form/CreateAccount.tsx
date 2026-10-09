import InputField from "../input-field/InputField";
import { Link, useNavigate } from "react-router";
import { useForm, type SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { createAccountSchema } from "../../schemas/auth";
import { useAccount } from "../../context/Accounts";

const CreateAccount = () => {
  const { addAccount } = useAccount();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<TCreateAccountInputs>({
    resolver: yupResolver(createAccountSchema),
  });
  const onSubmit: SubmitHandler<TCreateAccountInputs> = async (data) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));

    addAccount({
      email: data.email,
      password: data.password,
    });

    navigate("/login", { state: { accountCreated: true } });
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
            Create account
          </h1>
          <p className="text-base text-grey">
            Let’s get you started sharing your links!
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
            label="Create password"
            type="password"
            icon="/images/icon-password.svg"
            placeholder="At least 8 characters"
            error={errors.password?.message}
            {...register("password")}
          />
          <InputField
            id="confirmPassword"
            label="Confirm password"
            type="password"
            icon="/images/icon-password.svg"
            placeholder="At least 8 characters"
            error={errors.confirmPassword?.message}
            {...register("confirmPassword")}
          />

          <p className="text-xs leading-normal text-grey">
            Password must contain at least 8 characters
          </p>

          <button
            type="submit"
            disabled={isSubmitting}
            className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-lg bg-purple px-6.75 py-2.75 text-base leading-normal font-semibold text-white hover:bg-purple-hover hover:shadow-[0_0_32px_0_rgba(99,60,255,0.25)] disabled:cursor-not-allowed disabled:bg-purple-hover disabled:shadow-none"
          >
            {isSubmitting && (
              <span className="size-5 animate-spin rounded-full border-2 border-white/40 border-t-white" />
            )}
            {isSubmitting ? "Creating account..." : "Create new account"}
          </button>

          <p className="flex flex-col text-center text-base leading-normal text-grey md:flex-row md:justify-center md:gap-1">
            <span>Already have an account?</span>
            <Link to="/login" className="text-purple">
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default CreateAccount;
