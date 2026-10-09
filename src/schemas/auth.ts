import * as yup from "yup";
import { EMAIL_REGEX } from "../constants/regex";

const email = yup
  .string()
  .trim()
  .required("Can't be empty")
  .matches(EMAIL_REGEX, "Invalid email");

const password = yup
  .string()
  .required("Can't be empty")
  .min(8, "At least 8 characters")
  .matches(/[a-z]/, "Needs a lowercase letter")
  .matches(/[A-Z]/, "Needs an uppercase letter")
  .matches(/\d/, "Needs a number");

export const loginSchema = yup.object({ email, password }).required();

export const createAccountSchema = yup
  .object({
    email,
    password,
    confirmPassword: yup
      .string()
      .defined()
      .oneOf([yup.ref("password")], "Please check again"),
  })
  .required();
