import type { Product } from "../../types";

const CartItem = ({
  item,
  appendFromCart,
  isIncluded,
}: {
  item: Product;
  appendFromCart: (product: Product) => void;
  isIncluded: boolean;
}) => {
  return (
    <div
      onClick={() => appendFromCart(item)}
      style={
        isIncluded
          ? { backgroundColor: "yellowgreen" }
          : { backgroundColor: "white" }
      }
    >
      {item.name}
    </div>
  );
};

export default CartItem;
