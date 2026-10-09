import * as yup from "yup";
import { getPlatform } from "../constants/platforms";

// the url must be valid and belong to the chosen platform
const matchesPlatform = (url: string, platform: string) => {
  try {
    const { protocol, hostname } = new URL(url);
    const { domain } = getPlatform(platform);
    return (
      (protocol === "http:" || protocol === "https:") &&
      (hostname === domain || hostname.endsWith(`.${domain}`))
    );
  } catch {
    return false;
  }
};

export const linksSchema = yup
  .object({
    links: yup
      .array()
      .of(
        yup.object({
          platform: yup.string().required(),
          link: yup
            .string()
            .trim()
            .required("Can't be empty")
            .test("platform-url", "Please check the URL", (value, ctx) =>
              matchesPlatform(value, ctx.parent.platform),
            ),
        }),
      )
      .required(),
  })
  .required();
