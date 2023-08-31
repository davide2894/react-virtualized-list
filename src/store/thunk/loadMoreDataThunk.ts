import { generateFakeData } from "@data";
import { loadMoreData } from "@fakeDataSlice";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { getCurrentDb, updateLocalDb } from "src/data/localDatabase";

export const loadMoreDataThunk = createAsyncThunk(
  "fakeDataSlice/loadMoreDataThunk",
  async (_: any, thunkAPI: any) => {
    const moreData = await generateFakeData(100);
    const currentDb = getCurrentDb();
    const newData = [...currentDb, ...moreData];
    updateLocalDb(newData);
    thunkAPI.dispatch(loadMoreData(newData));
    return { newData };
  }
);
