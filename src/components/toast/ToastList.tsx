import { useContext } from "react";
import { ToastStateContext } from "../../context/ToastContext";
import Toast from "./Toast";

const ToastList = () => {
  const toastList = useContext(ToastStateContext);

  return (
    <div className="fixed top-10 right-10 flex flex-col gap-[10px]">
      {toastList.map((toast) => {
        return <Toast key={toast.id} {...toast} />;
      })}
    </div>
  );
};

export default ToastList;
