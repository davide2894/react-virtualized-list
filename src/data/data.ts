import { Row } from "@types";
import log from "@utils/log";
import { faker } from "@faker-js/faker";
import { v4 as uuidv4 } from "uuid";

export const generateFakeData = (numberOfEntries: number) => {
  return new Promise<Array<Row>>((resolve) => {
    let data: Array<Row> = [];
    for (let i = 0; i < numberOfEntries; i++) {
      data.push(generateFakeDataEntry(i));
    }
    resolve(data);
  });
};

export const generateFakeDataEntry = (positionInDataset: number = 0) => {
  const newEntry = {
    name: faker.commerce.productName(),
    description: faker.lorem.sentence(),
    price: faker.commerce.price(),
    position: positionInDataset,
    id: uuidv4(),
  } as unknown as Row;

  return newEntry;
};
