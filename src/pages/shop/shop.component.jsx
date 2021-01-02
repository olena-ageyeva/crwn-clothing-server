import React, { useEffect, useCallback } from "react";
import { Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import { updateCollections } from "../../store/shop/shop.actions";

import {
  firestore,
  convertCollectionsSnapshotToMap,
} from "../../components/firebase/firebase.utils";
import CollectionOverview from "../../components/collections-overview/collections-overview.component";
import CollectionPage from "../collection/collection.component";

const ShopPage = ({ match }) => {
  const dispatch = useDispatch();

  const onCollectionChange = useCallback(async () => {
    const collectionRef = firestore.collection("collections");
    collectionRef.onSnapshot(async (snapShot) => {
      const collectionMap = convertCollectionsSnapshotToMap(snapShot);
      dispatch(updateCollections(collectionMap));
    });
  }, [dispatch]);

  useEffect(() => {
    onCollectionChange();
  }, [onCollectionChange]);

  return (
    <div className="shop-page">
      <Route exact path={`${match.path}`} component={CollectionOverview} />
      <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
    </div>
  );
};

export default ShopPage;
