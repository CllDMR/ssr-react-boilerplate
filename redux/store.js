import { createStore, applyMiddleware } from "redux";

import createSagaMiddleware from "redux-saga";

import rootSaga from "./saga/rootSaga";

import reducer from "./reducers";

const sagaMiddleware = createSagaMiddleware();

export function initializeStore() {
  const asd = createStore(reducer, applyMiddleware(sagaMiddleware));
  sagaMiddleware.run(rootSaga);
  return asd;
}
