import React, { PropsWithChildren } from "react";
import { render } from "@testing-library/react";
import type { RenderOptions } from "@testing-library/react";
import { Store, configureStore } from "@reduxjs/toolkit";
import type { PreloadedState } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import fakeDataReducer from "../store/features/fakeData/fakeDataSlice";
import { RootState } from "@store";
import { localDbKey } from "@constants";
import { Row } from "@types";

// This type interface extends the default options for render from RTL, as well
// as allows the user to specify other things such as initialState, store.
interface ExtendedRenderOptions extends Omit<RenderOptions, "queries"> {
  preloadedState?: PreloadedState<RootState>;
  store?: Store;
}
//sources:
// - https://www.freecodecamp.org/news/how-to-write-unit-tests-in-react-redux/#-how-to-perform-testing-with-the-react-redux-toolkit
// - https://redux.js.org/usage/writing-tests#setting-up-a-reusable-test-render-function
export function renderWithProviders(
  ui: React.ReactElement,
  {
    preloadedState = {
      fakeDataReducer: {
        data:
          typeof window !== "undefined"
            ? JSON.parse(localStorage.getItem(localDbKey) || "[]")
            : ([] as Array<Row>),
      },
    },
    // Automatically create a store instance if no store was passed in
    store = configureStore({
      reducer: {
        fakeDataReducer: fakeDataReducer,
      },
      preloadedState,
    }),
    ...renderOptions
  }: ExtendedRenderOptions = {}
) {
  function Wrapper({ children }: PropsWithChildren<{}>): JSX.Element {
    return <Provider store={store}>{children}</Provider>;
  }

  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
}
