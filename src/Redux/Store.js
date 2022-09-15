import { configureStore, combineReducers } from "@reduxjs/toolkit";
import {reMessage} from "./CRUD"


const reducer = combineReducers({
    message:reMessage,
  });

export const Store = configureStore({
    reducer,
    devTools: process.env.NODE_ENV !== "production",
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: false,
        immutableCheck: false,
      }),
  });