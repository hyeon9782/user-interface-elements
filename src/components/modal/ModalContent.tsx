import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};
const ModalContent = ({ children }: Props) => (
  <div className="bg-white z-10 p-8 rounded-lg">{children}</div>
);

export default ModalContent;
