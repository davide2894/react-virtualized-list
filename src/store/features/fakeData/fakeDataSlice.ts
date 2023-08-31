import { localDbKey } from "@constants";
import { Row } from "@types";
import { createSlice } from "@reduxjs/toolkit";

export const fakeDataSlice = createSlice({
  name: "fakeDataSlice",
  initialState: {
    data:
      typeof window !== "undefined"
        ? JSON.parse(localStorage.getItem(localDbKey) || "[]")
        : ([] as Array<Row>),
  },
  reducers: {
    initData: (state, action) => {
      state.data = action.payload;
    },
    updateData: (state, action) => {
      state.data = action.payload;
    },
    loadMoreData: (state, action) => {
      state.data = action.payload;
    },
    addFakeDataRow: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { initData, updateData, loadMoreData, addFakeDataRow } =
  fakeDataSlice.actions;
export default fakeDataSlice.reducer;
