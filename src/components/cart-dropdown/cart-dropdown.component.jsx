import React from "react";
import { useSelector } from "react-redux";
import CustomButton from "../custom-button/custom-button.component";
import CartItem from "../cart-item/cart-item.component";

import "./cart-dropdown.styles.scss";

const CartDropdown = () => {
  const cartItems = useSelector(({ cart }) => cart.cartItems);
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>
      <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
  );
};

export default CartDropdown;
