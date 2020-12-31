import React from "react";
import { useDispatch } from "react-redux";
import { clearItem, addItem, removeItem } from "../../store/cart/cart.actions";

import "./checkout.styles.scss";

const CheckoutItem = (item) => {
  const { name, price, imageUrl, quantity } = item;
  const dispatch = useDispatch();

  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="item" />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={() => dispatch(removeItem(item))}>
          {" "}
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={() => dispatch(addItem(item))}>
          {" "}
          &#10095;
        </div>
      </span>
      <span className="price">{price}</span>
      <span className="remove-button" onClick={() => dispatch(clearItem(item))}>
        &#10005;
      </span>
    </div>
  );
};

export default CheckoutItem;
