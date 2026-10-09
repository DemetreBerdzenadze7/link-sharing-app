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
