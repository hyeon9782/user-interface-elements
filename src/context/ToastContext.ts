import { ReactNode, createContext } from "react";

type ToastState = {
  id: number;
  title?: string;
  description?: string;
  duration?: number;
  position?: string;
  render?: () => ReactNode;
};

type ToastAction = {
  open: () => void;
  close: (id: number) => void;
};

export const ToastDispatchContext = createContext<ToastAction>({
  open: () => {},
  close: () => {},
});

export const ToastStateContext = createContext<ToastState[]>([]);
