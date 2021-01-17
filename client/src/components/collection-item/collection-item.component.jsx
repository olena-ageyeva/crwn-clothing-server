import React from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../../store/cart/cart.actions";

import CustomButton from "../custom-button/custom-button.component";
import "./collection-item.styles.scss";

const CollectionItem = ({ item }) => {
  const { name, price, imageUrl } = item;
  const dispatch = useDispatch();

  return (
    <div className="collection-item">
      <div
        className="image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <CustomButton
        id={item.id}
        onClick={() => dispatch(addItem(item))}
        inverted
      >
        ADD TO CART
      </CustomButton>
    </div>
  );
};

export default CollectionItem;
