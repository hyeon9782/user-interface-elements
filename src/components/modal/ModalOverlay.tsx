const ModalOverlay = ({ onClose }: { onClose: () => void }) => {
  return (
    <div
      className="absolute inset-0 bg-black opacity-30"
      onClick={onClose}
    ></div>
  );
};

export default ModalOverlay;
