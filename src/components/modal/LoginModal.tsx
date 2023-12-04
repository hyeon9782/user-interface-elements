import Modal from "./Modal";
type LoginModalProps = {
  isOpen: boolean;
  closeModal: () => void;
};
const LoginModal = ({ isOpen, closeModal }: LoginModalProps) => {
  return (
    <>
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
    </>
  );
};

export default LoginModal;
