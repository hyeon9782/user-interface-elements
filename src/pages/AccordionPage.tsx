import { useEffect, useRef } from "react";
import AccordionList from "../components/accordion/AccordionList";

const AccordionPage = () => {
  const ref = useRef<HTMLDivElement>(null);

  const handleBeforeMatch = () => {
    alert("매칭!");
  };
  document.addEventListener("beforematch", handleBeforeMatch);

  // useEffect(() => {
  //   const handleBeforeMatch = () => {
  //     alert("매칭!");
  //   };
  //   addEventListener("beforematch", handleBeforeMatch);

  //   return () => {
  //     removeEventListener("beforematch", handleBeforeMatch);
  //   };
  // }, []);
  return (
    <main className="flex justify-center items-center h-[calc(100%-44px)]">
      <AccordionList />
      <div>
        <div>제목입니다.</div>
        <div ref={ref} HIDDEN="until-found">
          숨겨진 내용입니다.
        </div>
      </div>
    </main>
  );
};

export default AccordionPage;
