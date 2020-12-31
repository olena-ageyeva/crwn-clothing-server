import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleCartHidden } from "../../store/cart/cart.actions";
import { cartItemCount } from "../../store/cart/cart.reducer";

import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";

import "./cart-icon.styles.scss";

const CartIcon = () => {
  const dispatch = useDispatch();
  const itemCount = useSelector(cartItemCount);

  return (
    <div className="cart-icon" onClick={() => dispatch(toggleCartHidden())}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{itemCount}</span>
    </div>
  );
};

export default CartIcon;
