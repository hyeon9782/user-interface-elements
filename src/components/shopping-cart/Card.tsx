import { ReactNode } from "react";

const Card = ({ children }: { children: ReactNode }) => {
  return <div className="p-[10px] shadow-2xl rounded-lg ">{children}</div>;
};

export default Card;
