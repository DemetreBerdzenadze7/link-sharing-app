const icon = (name: string) => `/images/masks/icon-${name}.svg`;

export const PLATFORMS: IPlatform[] = [
  {
    name: "GitHub",
    icon: icon("github"),
    color: "#1a1a1a",
    placeholder: "e.g. https://www.github.com/johnappleseed",
  },
  {
    name: "Frontend Mentor",
    icon: icon("frontend-mentor"),
    color: "#ffffff",
    placeholder: "e.g. https://www.frontendmentor.io/profile/johnappleseed",
  },
  {
    name: "Twitter",
    icon: icon("twitter"),
    color: "#43b7e9",
    placeholder: "e.g. https://www.twitter.com/johnappleseed",
  },
  {
    name: "LinkedIn",
    icon: icon("linkedin"),
    color: "#2d68ff",
    placeholder: "e.g. https://www.linkedin.com/in/johnappleseed",
  },
  {
    name: "YouTube",
    icon: icon("youtube"),
    color: "#ee3939",
    placeholder: "e.g. https://www.youtube.com/@johnappleseed",
  },
  {
    name: "Facebook",
    icon: icon("facebook"),
    color: "#2442ac",
    placeholder: "e.g. https://www.facebook.com/johnappleseed",
  },
  {
    name: "Twitch",
    icon: icon("twitch"),
    color: "#ee3fc8",
    placeholder: "e.g. https://www.twitch.tv/johnappleseed",
  },
  {
    name: "Dev.to",
    icon: icon("devto"),
    color: "#333333",
    placeholder: "e.g. https://www.dev.to/johnappleseed",
  },
  {
    name: "Codewars",
    icon: icon("codewars"),
    color: "#8a1a50",
    placeholder: "e.g. https://www.codewars.com/users/johnappleseed",
  },
  {
    name: "Codepen",
    icon: icon("codepen"),
    color: "#1e1f26",
    placeholder: "e.g. https://www.codepen.io/johnappleseed",
  },
  {
    name: "freeCodeCamp",
    icon: icon("freecodecamp"),
    color: "#302267",
    placeholder: "e.g. https://www.freecodecamp.org/johnappleseed",
  },
  {
    name: "GitLab",
    icon: icon("gitlab"),
    color: "#eb4925",
    placeholder: "e.g. https://www.gitlab.com/johnappleseed",
  },
  {
    name: "Hashnode",
    icon: icon("hashnode"),
    color: "#0330d1",
    placeholder: "e.g. https://www.hashnode.com/@johnappleseed",
  },
  {
    name: "Stack Overflow",
    icon: icon("stack-overflow"),
    color: "#ec7100",
    placeholder: "e.g. https://www.stackoverflow.com/users/johnappleseed",
  },
];

export const getPlatform = (name: string) =>
  PLATFORMS.find((platform) => platform.name === name) ?? PLATFORMS[0];
