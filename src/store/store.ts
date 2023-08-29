import { configureStore } from "@reduxjs/toolkit";
import fakeDataReducer from "./features/fakeData/fakeDataSlice";
import dataMiddleWare from "./middleware/dataMiddleWare";

export const store = configureStore({
  reducer: {
    fakeDataReducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(dataMiddleWare);
  },
});

// Source: https://redux-toolkit.js.org/tutorials/typescript#project-setup
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
