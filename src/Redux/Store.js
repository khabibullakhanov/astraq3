import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { reCrud } from "./CRUD"
import { reLoading } from "./Loading";


const reducer = combineReducers({
  crud: reCrud,
  reLoading,
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