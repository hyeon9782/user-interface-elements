import { useRef, useState } from "react";
import Dialog from "../components/dialog/Dialog";
import Tooltip from "../components/tooltip/Tooltip";
import useToast from "../hooks/useToast";

const HomePage = () => {
  const { openToast } = useToast();
  const [isOpen, setIsOpen] = useState(false);
  const dialogRef = useRef(null);
  return (
    <main className="h-[calc(100%-44px)] ">
      <Tooltip text="Toast입니다!">
        <button onClick={openToast}>Toast Button</button>
      </Tooltip>

      <Dialog ref={dialogRef} isOpen={isOpen} />
    </main>
  );
};

export default HomePage;
