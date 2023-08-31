import { Row } from "@types";
import log from "@utils/log";
import { faker } from "@faker-js/faker";
import { v4 as uuidv4 } from "uuid";

export const generateFakeData = (numberOfEntries: number) => {
  return new Promise((resolve) => {
    let data: Array<Row> = [];
    for (let i = 0; i < numberOfEntries; i++) {
      data.push(generateFakeDataEntry(i));
    }
    resolve(data);
  });
};
