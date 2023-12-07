import { ReactNode } from "react";

type ButtonVariant = "solid" | "outline";

type ButtonSize = "sm" | "md" | "lg";

type ButtonProps = {
  color?: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  onClick?: () => void;
  children: ReactNode;
};

const Button = ({
  color = "black",
  variant = "solid",
  size = "sm",
  children,
  ...props
}: ButtonProps) => {
  const buttonClass = selectedStyle({ color, variant, size });
  return (
    <button {...props} className={"rounded-md font-bold " + buttonClass}>
      {children}
    </button>
  );
};

function selectedStyle({
  color,
  variant,
  size,
}: Omit<ButtonProps, "children">): string {
  let classStr: string = "";

  switch (color) {
    case "red":
      classStr += "border-red-400 bg-red-400 text-red ";
      break;
    case "blue":
      classStr += "border-blue-400 bg-blue-400 text-blue ";
      break;
  }

  switch (variant) {
    case "solid":
      classStr += `bg-${color} border-none text-white `;
      break;
    case "outline":
      classStr += `bg-white border-2 `;
      break;
  }

  switch (size) {
    case "sm":
      classStr += "px-[20px] py-[10px]";
      break;
    case "md":
      classStr += "px-[30px] py-[15px]";
      break;
    case "lg":
      classStr += "px-[40px] py-[20px]";
      break;
  }

  console.log(classStr);

  return classStr;
}

export default Button;
