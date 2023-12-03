import { ReactNode, useMemo, useState } from "react";
import { Toast } from "../types";
import {
  ToastDispatchContext,
  ToastStateContext,
} from "../context/ToastContext";
import ToastList from "../components/toast/ToastList";

const ToastProvider = ({ children }: { children: ReactNode }) => {
  const [toasts, setToasts] = useState<Toast[]>([]);
  const memoizedToasts = useMemo(() => toasts, [toasts]);

  const open = () => {
    setToasts((prevToasts) => [
      ...prevToasts,
      {
        id: prevToasts.length,
        title: `${prevToasts.length}번째 메시지`,
      },
    ]);
  };

  const close = (id: number) => {
    setToasts((prevToasts) => {
      return prevToasts.filter((prevToast) => prevToast.id === id);
    });
  };

  const memoizedAction = useMemo(
    () => ({
      open,
      close,
    }),
    []
  );

  return (
    <ToastStateContext.Provider value={memoizedToasts}>
      <ToastDispatchContext.Provider value={memoizedAction}>
        {children}
        <ToastList />
      </ToastDispatchContext.Provider>
    </ToastStateContext.Provider>
  );
};

export default ToastProvider;
