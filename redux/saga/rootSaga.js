import { all } from "redux-saga/effects";

import { watchExampleAsync } from "./exampleSaga";

function* helloSaga() {
  console.log("Hello Sagas!");
}

export default function* rootSaga() {
  yield all([helloSaga(), watchExampleAsync()]);
}
