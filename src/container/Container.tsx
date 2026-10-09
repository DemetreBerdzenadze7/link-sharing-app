import { type ReactNode } from "react";
interface Container {
  children: ReactNode;
}

const Container = ({ children }: Container) => {
  return <div className="max-w-300 w-full p-8 m-auto">{children}</div>;
};

export default Container;
