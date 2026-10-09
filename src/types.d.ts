interface IInputs {
  email: string;
  password: string;
}

type TInputs = IInputs;

interface ICreateAccountInputs extends IInputs {
  confirmPassword: string;
}

type TCreateAccountInputs = ICreateAccountInputs;
