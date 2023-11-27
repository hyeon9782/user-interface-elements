import { useState } from "react";
import List from "../components/List";
import ShoppingCart from "../components/shopping-cart/ShoppingCart";
import { Product } from "../types";
import { getLocalStorage, setLocalStorage } from "../utils/localStorage";
const HomePage = () => {
  const [cartProducts, setCartProducts] = useState<Product[]>(getCartProducts);

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
    </main>
  );
};

export default HomePage;
