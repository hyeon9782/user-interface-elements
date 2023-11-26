import { useState } from "react";
import Accordion from "../components/accordion/Accordion";
import Modal from "../components/modal/Modal";
import List from "../components/List";
const list = ["제목 1입니다.", "제목 2입니다.", "제목 3입니다."];
const HomePage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <main className="flex justify-center items-center h-full">
      <button onClick={() => setIsModalOpen(true)}>모달 오픈</button>
      <List />
      {isModalOpen && <Modal onClose={closeModal} />}
    </main>
  );
};

export default HomePage;
