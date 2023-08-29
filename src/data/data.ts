import { Row } from "@/types";
import generateFakeDataEntry from "./generateFakeProduct";

export const generateFakeData = (numberOfEntries: number) => {
  return new Promise((resolve) => {
    let data: Array<Row> = [];
    for (let i = 0; i < numberOfEntries; i++) {
      data.push(generateFakeDataEntry(i));
    }
    resolve(data);
  });
};
