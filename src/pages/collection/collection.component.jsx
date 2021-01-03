import React from "react";
import { useSelector } from "react-redux";
import CollectionItem from "../../components/collection-item/collection-item.component";
import { selectCollection } from "../../store/shop/shop.reducer";

import "./collection.styles.scss";

const CollectionPage = ({ match }) => {
  const collection = useSelector(selectCollection(match.params.collectionId));
  console.log("collection", collection);
  return (
    <div className="collection-page">
      <h2 className="title">{collection?.title} </h2>
      <div className="items">
        {collection?.items?.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default CollectionPage;
