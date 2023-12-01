import { useEffect, useState } from "react";
import Card from "./Card";
import { Product } from "../types";
import CartItem from "./shopping-cart/CartItem";

const List = ({
  appendFromCart,
  cartProducts,
}: {
  cartProducts: Product[];
  appendFromCart: (product: Product) => void;
}) => {
  const [list, setList] = useState<Product[]>([]);
  const productsPath = "./src/json/products.json";
  function fetchData() {
    fetch(productsPath)
      .then((res) => res.json())
      .then((data) => setList(data));
  }

  useEffect(() => {
    fetchData();
  }, []);

  const checkCart = (id: number) => {
    if (cartProducts.find((cartProduct) => cartProduct.id === id)) {
      return true;
    }

    return false;
  };

  return (
    <div className="flex flex-wrap gap-5 w-full">
      {list.map((item, index) => {
        return (
          <Card key={index}>
            <CartItem
              item={item}
              appendFromCart={appendFromCart}
              isIncluded={checkCart(item.id)}
            />
          </Card>
        );
      })}
    </div>
  );
};

export default List;
