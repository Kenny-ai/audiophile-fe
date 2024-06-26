import {
  decrementQuantity,
  incrementQuantity,
  removeFromCart,
} from "@/lib/features/cartSlice";
import { useAppDispatch } from "@/lib/hooks";
import React from "react";

interface Props {
  _id: string;
  quantity: number;
}

const CartQuantity = ({ _id, quantity }: Props) => {
  const dispatch = useAppDispatch();

  const increaseQuantity = () => {
    dispatch(incrementQuantity({ _id, amount: 1 }));
  };

  const decreaseQuantity = () => {
    dispatch(decrementQuantity({ _id, amount: 1 }));
    if (quantity === 1) dispatch(removeFromCart(_id));
  };

  return (
    <div className="bg-gray-200 flex justify-around py-2 w-24 rounded-lg">
      <span
        className="cursor-pointer hover:text-clr-accent font-fw-bold text-xl select-none"
        onClick={decreaseQuantity}
      >
        -
      </span>
      <span className="font-bold">{quantity}</span>

      <span
        className="cursor-pointer hover:text-clr-accent font-fw-bold text-xl select-none"
        onClick={increaseQuantity}
      >
        +
      </span>
    </div>
  );
};

export default CartQuantity;
