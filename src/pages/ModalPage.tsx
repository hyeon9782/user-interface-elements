import useModal from "../hooks/useModal";
import { modals } from "../components/modal/Modals";

const ModalPage = () => {
  const { openModal, closeModal } = useModal();
  return (
    <main className="h-[calc(100%-44px)]">
      <button
        onClick={() => {
          openModal(modals.LoginModal, {
            closeModal: () => {
              closeModal(modals.LoginModal);
            },
          });
        }}
      >
        Login Modal
      </button>
    </main>
  );
};

export default ModalPage;
