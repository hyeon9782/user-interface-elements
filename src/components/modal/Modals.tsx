import { useContext } from "react";
import {
  ModalDispatchContext,
  ModalStateContext,
} from "../../context/ModalContext";
import LoginModal from "./LoginModal";

export const modals = {
  LoginModal,
};

const Modals = () => {
  const openedModals = useContext(ModalStateContext);
  const { close } = useContext(ModalDispatchContext);
  return (
    <>
      {openedModals.map((modal, index) => {
        const { Component, props } = modal;
        const { onSubmit, ...restProps } = props;
        const onClose = () => {
          close(Component);
        };

        return (
          <Component
            key={index}
            {...restProps}
            onClose={onClose}
            onSubmit={onSubmit}
          />
        );
      })}
    </>
  );
};

export default Modals;
