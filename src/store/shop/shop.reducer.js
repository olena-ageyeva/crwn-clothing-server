import { initialCollection } from "./shop.data";
import { createSelector } from "reselect";

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

export default shopReducer;
