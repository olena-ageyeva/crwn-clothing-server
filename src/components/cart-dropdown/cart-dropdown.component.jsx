import React from "react";
import { useSelector } from "react-redux";
import { withRouter } from "react-router-dom";
import CustomButton from "../custom-button/custom-button.component";
import CartItem from "../cart-item/cart-item.component";
import { selectCartItems } from "../../store/cart/cart.reducer";

import "./cart-dropdown.styles.scss";

const CartDropdown = ({ history }) => {
  const cartItems = useSelector(selectCartItems);
  return (
    <div className="cart-dropdown">
      {cartItems.length ? (
        <div className="cart-items">
          {cartItems.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}
        </div>
      ) : (
        <span className="empty-message">Your cart is empty</span>
      )}

      <CustomButton onClick={() => history.push("/checkout")}>
        GO TO CHECKOUT
      </CustomButton>
    </div>
  );
};

export default withRouter(CartDropdown);
