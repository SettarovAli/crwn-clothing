import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { persistStore } from "redux-persist";
import createSagaMiddleware from "redux-saga";
import rootReducer from "./root-reducer";
import { fetchCollectionsStart } from "./shop/shopSagas";

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];

if (process.env.NODE_ENV === "development") {
  middlewares.push();
}

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middlewares))
);

sagaMiddleware.run(fetchCollectionsStart);

export const persistor = persistStore(store);
