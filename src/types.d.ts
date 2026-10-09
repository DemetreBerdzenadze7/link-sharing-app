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
}

type TProfileInputs = IProfileInputs;

interface IAccountLink {
  platform: string;
  link: string;
}

interface User {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  profilePicture: string;
  links: IAccountLink[];
}
