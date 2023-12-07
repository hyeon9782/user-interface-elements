import { ReactNode } from "react";

type ButtonProps = {
  color: string;
  variant: string;
  size: string;
  children: ReactNode;
};

const Button = ({ color, variant, size, children }: ButtonProps) => {
  return <div>{children}</div>;
};

export default Button;
