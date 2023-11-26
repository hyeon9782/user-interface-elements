import { useEffect, useState } from "react";
import Accordion from "./Accordion";
import type { Question } from "../../types";

const AccordionList = () => {
  const [list, setList] = useState<Question[]>([]);
  useEffect(() => {
    fetch("./src/json/question.json")
      .then((res) => res.json())
      .then((data) => setList(data));
  }, []);

  return (
    <div>
      {list.map((item, index) => (
        <Accordion key={index} title={item.question}>
          {item.answer}
        </Accordion>
      ))}
    </div>
  );
};

export default AccordionList;

// 1. 아코디언 제목을 클릭하면 내용이 열리고 다시 클릭하면 내용이 사라진다.
// 2. 아코디언이 열려있지 않아도 컨트롤 + F로 검색되고 해야한다.
// 3. 아코디언이 하나 열려 있을 때 다른 아코디언을 열면 기존에 열려 있던 아코디언은 닫혀야한다.
