import React from "react";
import { useSelector } from "react-redux";
import { selectCollections } from "../../store/shop/shop.reducer";
import CollectionPreview from "../../components/collection-preview/collection-preview.component";

const ShopPage = () => {
  const collection = useSelector(selectCollections);
  return (
    <div className="shop-page">
      {collection.map(({ id, ...otherProps }) => (
        <CollectionPreview key={id} {...otherProps} />
      ))}
    </div>
  );
};

export default ShopPage;
