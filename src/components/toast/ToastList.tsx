import { useContext } from "react";
import { ToastStateContext } from "../../context/ToastContext";
import Toast from "./Toast";

const ToastList = () => {
  const toastList = useContext(ToastStateContext);
  return (
    <div>
      {toastList.map((toast) => {
        return (
          <Toast key={toast.id} title={toast.title} duration={toast.duration} />
        );
      })}
    </div>
  );
};

export default ToastList;
