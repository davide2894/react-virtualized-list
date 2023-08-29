import { Row } from "@/types";
import log from "@/utils/log";
import { faker } from "@faker-js/faker";
import { v4 as uuidv4 } from "uuid";

const generateFakeDataEntry = (positionInDataset: number = 0) => {
  const newEntry = {
    name: faker.commerce.productName(),
    description: faker.lorem.sentence(),
    price: faker.commerce.price(),
    position: positionInDataset,
    id: uuidv4(),
  } as unknown as Row;

  log({ newEntry });

  return newEntry;
};

export default generateFakeDataEntry;
