import React, { useEffect } from "react";
import { Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fetchCollectionsStartAsync } from "../../store/shop/shop.actions";

import CollectionPageContainer from "../collection/collection.container";
import CollectionsOverviewContainer from "../../components/collections-overview/collections-overview.container";

const ShopPage = ({ match }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCollectionsStartAsync());
  }, [dispatch]);

  return (
    <div className="shop-page">
      <Route
        exact
        path={`${match.path}`}
        render={(props) => <CollectionsOverviewContainer {...props} />}
      />
      <Route
        path={`${match.path}/:collectionId`}
        render={(props) => <CollectionPageContainer {...props} />}
      />
    </div>
  );
};

export default ShopPage;
