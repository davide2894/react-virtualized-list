import generateFakeDataEntry from "@/data/generateFakeProduct";
import {
  addEntryToDb,
  getCurrentDb,
  initLocalDb,
  updateLocalDb,
} from "@/data/localDatabase";

const dataMiddleWare = (store: any) => (next: any) => (action: any) => {
  if (action.type === "fakeDataSlice/initData") {
    initLocalDb(action.payload);
    action.payload = getCurrentDb();
  }

  if (action.type === "fakeDataSlice/updateData") {
    updateLocalDb(action.payload);
    action.payload = getCurrentDb();
  }

  if (action.type === "fakeDataSlice/addFakeDataRow") {
    addEntryToDb(action.payload);
    action.payload = getCurrentDb();
  }

  return next(action);
};

export default dataMiddleWare;
