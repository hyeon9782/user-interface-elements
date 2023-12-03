import { ReactNode, useEffect, useRef, useState } from "react";

type AccordionProps = {
  title: string;
  children: ReactNode;
};
const Accordion = ({ title, children }: AccordionProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="w-[700px]">
      <div
        onClick={toggleAccordion}
        style={{ cursor: "pointer" }}
        className="bg-slate-400 rounded-sm px-3 py-2"
      >
        <h2>{title}</h2>
      </div>
      <div
        ref={ref}
        HIDDEN={isOpen ? false : "until-found"}
        style={
          isOpen
            ? { height: "100%", overflowY: "visible" }
            : { height: 0, overflowY: "hidden" }
        }
      >
        랄뚜기111
        <div>랄로</div>
        {children}
      </div>
    </div>
  );
};

// hidden="until-found" 검색에서 일치하는 항목에 해당 영역에 있을 때 beforematch 이벤트를 발생
// content-visiblility: hidden 스타일 기본 적용
// 요소는 숨겨져 있지만 렌더링 상태는 유지
// display: none + visibility: hidden
// 왜...안될까.. ㅠㅠ
export default Accordion;
