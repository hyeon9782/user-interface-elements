import { createContext } from "react";
import { Modal, ModalAction } from "../types";

export const ModalDispatchContext = createContext<ModalAction>({
  open: () => {},
  close: () => {},
});

export const ModalStateContext = createContext<Modal[]>([]);
