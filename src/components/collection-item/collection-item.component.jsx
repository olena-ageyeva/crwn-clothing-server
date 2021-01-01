import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../../store/cart/cart.actions";
import { selectSections } from "../../store/directory/directory.reducer";


import CustomButton from "../custom-button/custom-button.component";
import "./collection-item.styles.scss";

const CollectionItem = ({item}) => {
  const { name, price, imageUrl } = item;
  const dispatch = useDispatch();
  const collection = useSelector(selectSections)

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
