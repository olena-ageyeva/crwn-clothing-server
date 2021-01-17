import React from "react";
import { useSelector } from "react-redux";
import { selectCollectionsForPreview } from "../../store/shop/shop.reducer";
import CollectionPreview from "../collection-preview/collection-preview.component";

import "./collections-overview.styles.scss";

const CollectionsOverview = () => {
  const collection = useSelector(selectCollectionsForPreview);
  return (
    <div className="collections-overview">
      {collection.map(({ id, ...otherProps }) => (
        <CollectionPreview key={id} {...otherProps} />
      ))}
    </div>
  );
};

export default CollectionsOverview;
