import { localDbKey } from "@constants";
import { Row } from "@types";

export function initLocalDb(data: Array<Row>) {
  localStorage.setItem(localDbKey, JSON.stringify(data ? data : []));
}

export function getCurrentDb() {
  const currentDb = JSON.parse(localStorage.getItem(localDbKey) || "[]");
  if (currentDb.length) {
    return currentDb;
  }
}

export function addEntryToDb(entry: Row) {
  const currentDb = getCurrentDb();
  currentDb.unshift(entry);
  localStorage.setItem(localDbKey, JSON.stringify(currentDb));
}

export function updateLocalDb(updatedData: Array<Row>) {
  localStorage.setItem(localDbKey, JSON.stringify(updatedData));
}

export function getUpdatedLocalDb(updatedData: Array<Row>) {
  localStorage.setItem(localDbKey, JSON.stringify(updatedData));
  getCurrentDb();
}
