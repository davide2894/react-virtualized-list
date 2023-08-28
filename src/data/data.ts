import { Row } from "@/types";
import { v4 as uuidv4 } from "uuid";

let data: Array<Row> = [];

for (let i = 0; i < 10000; i++) {
  data.push({
    name: "this is an item",
    description: "item description",
    price: "item price",
    position: i,
    id: uuidv4(),
  });
}

export default data;
