import { all, takeLatest, put, call } from "redux-saga/effects";

import UserActionTypes from "../user/userTypes";

import { clearCart } from "./cartActions";

export function* clearCartOnSignOut() {
  try {
    yield put(clearCart());
  } catch (error) {}
}

export function* watchSignOutSuccess() {
  yield takeLatest(UserActionTypes.SIGN_OUT_SUCCESS, clearCartOnSignOut);
}

export function* cartSagas() {
  yield all([call(watchSignOutSuccess)]);
}
