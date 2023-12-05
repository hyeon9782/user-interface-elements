import { forwardRef, useImperativeHandle, useRef } from "react";

type Props = {
  isOpen: boolean;
};

const Dialog = (props) => {
  const dialogRef = useRef(null);
  return (
    <dialog ref={dialogRef}>
      Dialog
      <form method="dialog">
        <button value="close">Close</button>
        <button value="confirm">Confirm</button>
      </form>
    </dialog>
  );
};

export default Dialog;
