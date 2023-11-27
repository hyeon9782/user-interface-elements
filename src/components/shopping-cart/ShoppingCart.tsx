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
            className="rounded-md w-[50px] h-[50px] bg-slate-300 flex flex-col justify-center items-center text-gray-500"
          >
            <div>{product.name}</div>
            <div>{product.price * (1 - product.discount / 100)}</div>
          </div>
        );
      })}
    </div>
  );
};

export default ShoppingCart;

// 1. 상품을 클릭하면 장바구니에 추가 => O
// 2. 장바구니 아이템을 클릭하면 장바구니에서 삭제 => O
// 3. 새로고침이 되거나 창을 닫았다가 다시 켜도 장바구니 유지 => O
// 4. 이미 들어간 상품은 장바구니에 넣을 수 없음
// 5. 장바구니에 들어가 있는 상품은 표시하기
// 6. 쿠폰이 적용된 가격을 보여주기 => O
