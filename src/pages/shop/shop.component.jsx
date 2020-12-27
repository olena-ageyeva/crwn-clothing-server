import React from "react";
import { initialCollection } from "./shop.data";
import CollectionPreview from "../../components/collection-preview/collection-preview.component";

const ShopPage = () => {
  const [collection, setCollection] = React.useState(initialCollection);
  return (
    <div className="shop-page">
      {collection.map(({ id, ...otherProps }) => (
        <CollectionPreview key={id} {...otherProps} />
      ))}
    </div>
  );
};

export default ShopPage;
