import { ComponentType, ReactNode, useMemo, useState } from "react";
import {
  ModalDispatchContext,
  ModalStateContext,
} from "../context/ModalContext";
import { Modal } from "../types";
import Modals from "../components/modal/Modals";

const ModalProvider = ({ children }: { children: ReactNode }) => {
  const [openedModals, setOpenedModals] = useState<Modal[]>([]);

  const open = (Component: ComponentType<any>, props: any) => {
    setOpenedModals((modals) => {
      return [...modals, { Component, props }];
    });
  };

  const close = (Component: ComponentType<any>) => {
    setOpenedModals((modals) => {
      return modals.filter((modal) => modal.Component !== Component);
    });
  };

  const dispatch = useMemo(() => ({ open, close }), []);
  return (
    <ModalStateContext.Provider value={openedModals}>
      <ModalDispatchContext.Provider value={dispatch}>
        {children}
        <Modals />
      </ModalDispatchContext.Provider>
    </ModalStateContext.Provider>
  );
};

export default ModalProvider;
