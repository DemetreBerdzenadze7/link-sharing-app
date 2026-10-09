const icon = (name: string) => `/images/masks/icon-${name}.svg`;

export const PLATFORMS: IPlatform[] = [
  {
    name: "GitHub",
    domain: "github.com",
    icon: icon("github"),
    color: "#1a1a1a",
    placeholder: "e.g. https://www.github.com/johnappleseed",
  },
  {
    name: "Frontend Mentor",
    domain: "frontendmentor.io",
    icon: icon("frontend-mentor"),
    color: "#ffffff",
    placeholder: "e.g. https://www.frontendmentor.io/profile/johnappleseed",
  },
  {
    name: "Twitter",
    domain: "twitter.com",
    icon: icon("twitter"),
    color: "#43b7e9",
    placeholder: "e.g. https://www.twitter.com/johnappleseed",
  },
  {
    name: "LinkedIn",
    domain: "linkedin.com",
    icon: icon("linkedin"),
    color: "#2d68ff",
    placeholder: "e.g. https://www.linkedin.com/in/johnappleseed",
  },
  {
    name: "YouTube",
    domain: "youtube.com",
    icon: icon("youtube"),
    color: "#ee3939",
    placeholder: "e.g. https://www.youtube.com/@johnappleseed",
  },
  {
    name: "Facebook",
    domain: "facebook.com",
    icon: icon("facebook"),
    color: "#2442ac",
    placeholder: "e.g. https://www.facebook.com/johnappleseed",
  },
  {
    name: "Twitch",
    domain: "twitch.tv",
    icon: icon("twitch"),
    color: "#ee3fc8",
    placeholder: "e.g. https://www.twitch.tv/johnappleseed",
  },
  {
    name: "Dev.to",
    domain: "dev.to",
    icon: icon("devto"),
    color: "#333333",
    placeholder: "e.g. https://www.dev.to/johnappleseed",
  },
  {
    name: "Codewars",
    domain: "codewars.com",
    icon: icon("codewars"),
    color: "#8a1a50",
    placeholder: "e.g. https://www.codewars.com/users/johnappleseed",
  },
  {
    name: "Codepen",
    domain: "codepen.io",
    icon: icon("codepen"),
    color: "#1e1f26",
    placeholder: "e.g. https://www.codepen.io/johnappleseed",
  },
  {
    name: "freeCodeCamp",
    domain: "freecodecamp.org",
    icon: icon("freecodecamp"),
    color: "#302267",
    placeholder: "e.g. https://www.freecodecamp.org/johnappleseed",
  },
  {
    name: "GitLab",
    domain: "gitlab.com",
    icon: icon("gitlab"),
    color: "#eb4925",
    placeholder: "e.g. https://www.gitlab.com/johnappleseed",
  },
  {
    name: "Hashnode",
    domain: "hashnode.com",
    icon: icon("hashnode"),
    color: "#0330d1",
    placeholder: "e.g. https://www.hashnode.com/@johnappleseed",
  },
  {
    name: "Stack Overflow",
    domain: "stackoverflow.com",
    icon: icon("stack-overflow"),
    color: "#ec7100",
    placeholder: "e.g. https://www.stackoverflow.com/users/johnappleseed",
  },
];

export const getPlatform = (name: string) =>
  PLATFORMS.find((platform) => platform.name === name) ?? PLATFORMS[0];
