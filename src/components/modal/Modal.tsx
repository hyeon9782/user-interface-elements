import { ReactNode, useEffect } from "react";
import ModalOverlay from "./ModalOverlay";
import ModalContent from "./ModalContent";
import ModalHeader from "./ModalHeader";
import ModalFooter from "./ModalFooter";
import ModalClose from "./ModalClose";
import ModalTrigger from "./ModalTrigger";

type Props = {
  isOpen: boolean;
  children: ReactNode;
};

const Modal = ({ isOpen, children }: Props) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);
  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center">
          {children}
        </div>
      )}
    </>
  );
};

export default Modal;

// 1. 모달의 배경은 비활성화 상태 (스크롤 X) => O
// 2. 모달의 배경을 클릭했을 때, Close 버튼을 클릭했을 때, X 버튼을 클릭했을 때 모달 닫기
// 3. 모달의 위치를 변경할 수 있는 props 부여
// 4. 모달의 두 번째 기능을 진행할 수 있는 함수 부여
// 5. 모달의 transition을 설정할 수 있는 props 부여

Modal.Trigger = ModalTrigger;
Modal.Overlay = ModalOverlay;
Modal.Header = ModalHeader;
Modal.Close = ModalClose;
Modal.Content = ModalContent;
Modal.Footer = ModalFooter;
