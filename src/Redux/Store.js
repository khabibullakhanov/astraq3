import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { reCrud } from "./CRUD"


const reducer = combineReducers({
  crud: reCrud,
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