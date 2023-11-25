import { ReactNode, useState } from "react";

type AccordionProps = {
  title: string;
  children: ReactNode;
};
const Accordion = ({ title, children }: AccordionProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <div
        onClick={toggleAccordion}
        style={{ cursor: "pointer" }}
        className="bg-slate-400 rounded-sm px-3 py-2"
      >
        <h2>{title}</h2>
      </div>
      {isOpen && <div>{children}</div>}
    </div>
  );
};

export default Accordion;
