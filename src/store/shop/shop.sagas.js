import { takeEvery, call, put } from "redux-saga/effects";
import { ShopActionTypes } from "./shop.types.js";
import {
  firestore,
  convertCollectionsSnapshotToMap,
} from "../../components/firebase/firebase.utils";

import {
  fetchCollectionsSuccess,
  fetchCollectionsFailure,
} from "./shop.actions";

export function* fetchCollectionsStartAsync() {
  try {
    const collectionRef = firestore.collection("collections");
    const snapshot = yield collectionRef.get();
    const collectionMap = yield call(convertCollectionsSnapshotToMap, snapshot);
    yield put(fetchCollectionsSuccess(collectionMap));
  } catch (error) {
    yield put(fetchCollectionsFailure(error.message));
  }
}

export function* fetchCollectionsStart() {
  yield takeEvery(
    ShopActionTypes.FETCH_COLLECTIONS_START,
    fetchCollectionsStartAsync
  );
}
