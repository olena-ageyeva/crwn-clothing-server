import React, { useState, useEffect, useCallback } from "react";
import { Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import { updateCollections } from "../../store/shop/shop.actions";
import WithSpinner from "../../components/with-spinner/with-spinner.components";

import {
  firestore,
  convertCollectionsSnapshotToMap,
} from "../../components/firebase/firebase.utils";
import CollectionPage from "../collection/collection.component";
import CollectionsOverview from "../../components/collections-overview/collections-overview.component";

const CollectionOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

const ShopPage = ({ match }) => {
  const [isLoading, setIsLoading] = useState(true);

  const dispatch = useDispatch();

  const onCollectionChange = useCallback(async () => {
    const collectionRef = firestore.collection("collections");
    collectionRef.onSnapshot(async (snapShot) => {
      const collectionMap = convertCollectionsSnapshotToMap(snapShot);
      dispatch(updateCollections(collectionMap));
      setIsLoading(false);
    });
  }, [dispatch]);

  useEffect(() => {
    onCollectionChange();
  }, [onCollectionChange]);

  return (
    <div className="shop-page">
      <Route
        exact
        path={`${match.path}`}
        render={(props) => (
          <CollectionOverviewWithSpinner isLoading={isLoading} {...props} />
        )}
      />
      <Route
        path={`${match.path}/:collectionId`}
        render={(props) => (
          <CollectionPageWithSpinner isLoading={isLoading} {...props} />
        )}
      />
    </div>
  );
};

export default ShopPage;
