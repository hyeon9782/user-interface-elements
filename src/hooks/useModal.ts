import { ComponentType, useContext } from "react";
import { ModalDispatchContext } from "../context/ModalContext";

const useModal = () => {
  const { open, close } = useContext(ModalDispatchContext);
  const openModal = (Component: ComponentType<any>, props: any) => {
    open(Component, props);
  };

  const closeModal = (Component: ComponentType<any>) => {
    close(Component);
  };
  return { openModal, closeModal };
};

export default useModal;
