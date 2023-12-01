import { useState } from "react";
import List from "../components/List";
import ShoppingCart from "../components/shopping-cart/ShoppingCart";
import { Product } from "../types";
import { getLocalStorage, setLocalStorage } from "../utils/localStorage";
import Modal from "../components/modal/Modal";
const HomePage = () => {
  const [isOpen, setOpen] = useState(false);
  const [cartProducts, setCartProducts] = useState<Product[]>(getCartProducts);

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
      <List appendFromCart={appendFromCart} />
      <ShoppingCart
        cartProducts={cartProducts}
        removeFromCart={removeFromCart}
      />
      <Modal.Trigger openModal={openModal} />
      <Modal>
        <Modal.Overlay onClose={closeModal} />
        <Modal.Content>
          <Modal.Header>
            <Modal.Close onClose={closeModal} />
          </Modal.Header>
          <div>내용입니다.</div>
          <Modal.Footer>
            <button>취소</button>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
    </main>
  );
};

export default HomePage;
