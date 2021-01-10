import React, { useEffect } from "react";
import { Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchCollectionsStartAsync } from "../../store/shop/shop.actions";
import {
  selectCollection,
  selectIsCollectionFetching,
} from "../../store/shop/shop.reducer";
import WithSpinner from "../../components/with-spinner/with-spinner.components";

import CollectionPage from "../collection/collection.component";
import CollectionsOverview from "../../components/collections-overview/collections-overview.component";

const CollectionOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

const ShopPage = ({ match }) => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsCollectionFetching);

  const collections = useSelector(selectCollection);
  console.log("collections", collections, isLoading)

  useEffect(() => {
    dispatch(fetchCollectionsStartAsync());
  }, [dispatch]);

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
