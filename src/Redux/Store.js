import { configureStore } from "@reduxjs/toolkit";
import RootReducer from "./Root-reducer"; 
import createSagaMiddleware from "redux-saga"
import rootSaga from "./Root-sagas";

const sagaMiddleware = createSagaMiddleware()

export const store = configureStore({
    reducer: RootReducer,
    middleware:  (getDefaultMiddleware) => {
        return [sagaMiddleware]
    },
})
sagaMiddleware.run(rootSaga)