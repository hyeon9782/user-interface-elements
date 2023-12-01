import { useState } from "react";
import Modal from "../components/modal/Modal";

const ModalPage = () => {
  const [isOpen, setOpen] = useState(false);
  const closeModal = () => {
    setOpen(false);
  };

  const openModal = () => {
    setOpen(true);
  };
  return (
    <main>
      <Modal.Trigger openModal={openModal} />
      <Modal isOpen={isOpen}>
        <Modal.Overlay onClose={closeModal} />
        <Modal.Content>
          <Modal.Header>
            <Modal.Close onClose={closeModal} />
          </Modal.Header>
          <div>내용</div>
          <Modal.Footer>
            <button>취소</button>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
    </main>
  );
};

export default ModalPage;
