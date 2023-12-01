import { useState } from "react";
import { Product } from "../types";
import { getLocalStorage, setLocalStorage } from "../utils/localStorage";
import List from "../components/List";
import ShoppingCart from "../components/shopping-cart/ShoppingCart";

const ShoppingPage = () => {
  const [cartProducts, setCartProducts] = useState<Product[]>(getCartProducts);

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
    <main>
      <List appendFromCart={appendFromCart} cartProducts={cartProducts} />
      <ShoppingCart
        cartProducts={cartProducts}
        removeFromCart={removeFromCart}
      />
    </main>
  );
};

export default ShoppingPage;
