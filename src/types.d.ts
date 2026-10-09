interface IInputs {
  email: string;
  password: string;
}

type TInputs = IInputs;

interface ICreateAccountInputs extends IInputs {
  confirmPassword: string;
}

type TCreateAccountInputs = ICreateAccountInputs;

interface IPlatform {
  name: string;
  domain: string;
  icon: string;
  color: string;
  placeholder: string;
}

interface ILink {
  id: number;
  platform: string;
}

interface IProfileInputs {
  firstName: string;
  lastName: string;
  email?: string;
  profilePicture: string;
}

type TProfileInputs = IProfileInputs;

interface IAccountLink {
  platform: string;
  link: string;
}

interface ILinksInputs {
  links: IAccountLink[];
}

type TLinksInputs = ILinksInputs;

interface User {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  profileEmail: string;
  profilePicture: string;
  links: IAccountLink[];
}
