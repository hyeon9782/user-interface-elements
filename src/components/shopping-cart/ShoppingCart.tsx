import { Product } from "../../types";

type Props = {
  cartProducts: Product[];
  removeFromCart: (product: Product) => void;
};

const ShoppingCart = ({ cartProducts, removeFromCart }: Props) => {
  return (
    <div className="flex flex-col gap-3">
      {cartProducts.map((product, index) => {
        return (
          <div
            key={index}
            onClick={() => removeFromCart(product)}
            className="rounded-md w-[50px] h-[50px] bg-slate-300 flex justify-center items-center text-gray-500"
          >
            {product.name}
          </div>
        );
      })}
    </div>
  );
};

export default ShoppingCart;
