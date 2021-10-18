import createSagaMiddleware from "@redux-saga/core";
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { translateReducer } from "./reducers/translateReducer";
import { dataReducer } from "./reducers/dataReducer";
import { pageReducer } from "./reducers/pageReducer";
import { rootSaga } from "./sagas/rootSaga";

const rootReducer = combineReducers({
  data: dataReducer,
  page: pageReducer,
  translate: translateReducer,
});

const sagaMiddleware = createSagaMiddleware();
export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
});
export type RootState = ReturnType<typeof rootReducer>;
sagaMiddleware.run(rootSaga);