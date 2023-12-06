import { useRef } from "react";

const Dialog = () => {
  const dialogRef = useRef<HTMLDialogElement>(null);

  // dialog 열기
  const handleOpenDialog = () => {
    dialogRef.current?.showModal();
  };

  // dialog 닫기
  const handleCloseDialog = () => {
    dialogRef.current?.close();
  };

  return (
    <>
      <button onClick={handleOpenDialog}>Dialog</button>
      <dialog ref={dialogRef}>
        Dialog
        {/* form 태그에 method를 dialog로 지정하고 button에 value 값을 close로 지정하면 자동으로 dialog가 닫힘  */}
        <form method="dialog">
          <button value="close">Close</button>
          <button value="confirm">Confirm</button>
        </form>
      </dialog>
    </>
  );
};

export default Dialog;
