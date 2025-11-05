import React from "react";
import { useCartContext } from "@/contexts/cartContext";
import CartItem from "@/components/Cart/CartItem";

const CartList = ({ items }) => {
  const { deleteFromCart } = useCartContext();
  return (
    <ul className="flex flex-col gap-6 max-h-[500px] overflow-y-scroll pr-2">
      {items.map((item) => (
        <CartItem
          item={item}
          key={item.id}
          onDeleteItem={() => deleteFromCart(item.id)}
        />
      ))}
    </ul>
  );
};

export default CartList;
