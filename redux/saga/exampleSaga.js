import { takeEvery, put } from "redux-saga/effects";

import { getExampleApi } from "../api/example";

import { ActionTypes } from "../config/constants";

export function* getExample(action) {
  const data = yield getExampleApi(action.payload);

  yield put({ type: ActionTypes.EXAMPLE.GET.ONE.REDUCER, payload: data });
}

export function* watchExampleAsync() {
  yield takeEvery(ActionTypes.EXAMPLE.GET.ONE.SAGA, getExample);
}
