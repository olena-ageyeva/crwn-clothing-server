import { initialCollection } from "./shop.data";
import { createSelector } from "reselect";
import memoize from "lodash.memoize";

const INITIAL_STATE = {
  collections: initialCollection,
};

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const selectShop = (state) => state.shop;

export const selectCollections = createSelector(
  [selectShop],
  (shop) => shop.collections
);

export const selectCollectionsForPreview = createSelector(
  [selectCollections],
  (collections) => Object.keys(collections).map((key) => collections[key])
);

export const selectCollection = memoize((collectionId) =>
  createSelector(
    [selectCollections],
    (collections) => collections[collectionId]
  )
);

export default shopReducer;
