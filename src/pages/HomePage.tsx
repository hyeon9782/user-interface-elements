import { useRef, useState } from "react";
import Dialog from "../components/dialog/Dialog";
import Tooltip from "../components/tooltip/Tooltip";
import useToast from "../hooks/useToast";
import Button from "../components/common/Button";

const HomePage = () => {
  const { openToast } = useToast();

  return (
    <main className="h-[calc(100%-44px)] ">
      <Button color="red" size="sm" onClick={() => alert("클릭")}>
        솔리드 버튼 s
      </Button>
      <Button color="red" size="md">
        솔리드 버튼 m
      </Button>
      <Button color="red" size="lg">
        솔리드 버튼 l
      </Button>
      <Button color="red" size="lg" variant="outline">
        아웃 라인 버튼 l
      </Button>
      {/* <Tooltip text="Toast입니다!">
        <button onClick={openToast}>Toast Button</button>
      </Tooltip>

      <Dialog /> */}
    </main>
  );
};

export default HomePage;
