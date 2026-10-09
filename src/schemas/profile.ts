import * as yup from "yup";
import { EMAIL_REGEX } from "../constants/regex";

export const profileSchema = yup
  .object({
    firstName: yup.string().trim().required("Can't be empty"),
    lastName: yup.string().trim().required("Can't be empty"),
    email: yup
      .string()
      .trim()
      .test(
        "email",
        "Invalid email",
        (value) => !value || EMAIL_REGEX.test(value),
      ),
  })
  .required();
