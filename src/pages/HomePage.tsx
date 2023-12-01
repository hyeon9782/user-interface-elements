import { useState } from "react";
import List from "../components/List";
import ShoppingCart from "../components/shopping-cart/ShoppingCart";
import { Product } from "../types";
import { getLocalStorage, setLocalStorage } from "../utils/localStorage";
import Modal from "../components/modal/Modal";
import Tabs from "../components/tab/Tabs";
const HomePage = () => {
  const [isOpen, setOpen] = useState(false);
  const [cartProducts, setCartProducts] = useState<Product[]>(getCartProducts);

  const tabs = [
    { label: "Tab 1", content: <div>Tab 1 내용</div> },
    { label: "Tab 2", content: <div>Tab 2 내용</div> },
    { label: "Tab 3", content: <div>Tab 3 내용</div> },
  ];

  const closeModal = () => {
    setOpen(false);
  };

  const openModal = () => {
    setOpen(true);
  };

  function getCartProducts() {
    return getLocalStorage("products");
  }

  const appendFromCart = (product: Product) => {
    if (cartProducts.find((cartProduct) => cartProduct.id === product.id)) {
      alert("이미 장바구니에 담았어요!");
      return;
    }
    setCartProducts((prevData) => [...prevData, product]);
    setLocalStorage("products", [...cartProducts, product]);
  };

  const removeFromCart = (product: Product) => {
    setCartProducts(
      cartProducts.filter((cartProduct) => cartProduct.id !== product.id)
    );
    setLocalStorage(
      "products",
      cartProducts.filter((cartProduct) => cartProduct.id !== product.id)
    );
  };

  return (
    <main className="flex justify-center items-center h-full">
      <Tabs tabs={tabs} />
      <List appendFromCart={appendFromCart} cartProducts={cartProducts} />
      <ShoppingCart
        cartProducts={cartProducts}
        removeFromCart={removeFromCart}
      />
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

export default HomePage;
