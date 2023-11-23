import { useEffect, useState } from "react";
import Card from "./Card";
import { Product } from "../types";

const List = () => {
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
    <div className="flex flex-wrap gap-5">
      {list.map((item, index) => {
        return <Card key={index}>{item.name}</Card>;
      })}
    </div>
  );
};

export default List;
