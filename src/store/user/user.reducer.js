import { UserActionTypes } from "./user.types";
import { createSelector } from "reselect";

const INITIAL_STATE = {
  currentUser: null,
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UserActionTypes.SET_CURRENT_USER:
      return { ...state, currentUser: action.payload };
    default:
      return state;
  }
};

const selectUser = (state) => state.user;

export const selectCurrentUser = createSelector(
  [selectUser],
  (user) => user.currentUser
);



export default userReducer;
