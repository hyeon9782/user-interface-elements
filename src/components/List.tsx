import { useEffect, useState } from "react";
import Card from "./Card";
import { Product } from "../types";

const List = ({
  appendFromCart,
}: {
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

  return (
    <div className="flex flex-wrap gap-5 w-full">
      {list.map((item, index) => {
        return (
          <Card key={index}>
            <div onClick={() => appendFromCart(item)}>{item.name}</div>
          </Card>
        );
      })}
    </div>
  );
};

export default List;
