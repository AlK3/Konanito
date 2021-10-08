import createSagaMiddleware from "@redux-saga/core";
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { dataReducer } from "./dataReducer";
import { pageReducer } from "./pageReducer";
import { rootSaga } from "./rootSaga";

const rootReducer = combineReducers({
  data: dataReducer,
  page: pageReducer,
});

const sagaMiddleware = createSagaMiddleware();
export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
});
export type RootState = ReturnType<typeof rootReducer>;
sagaMiddleware.run(rootSaga);