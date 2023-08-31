import { generateFakeData, generateFakeDataEntry } from "@data";
import { cleanup } from "@testing-library/react";

afterEach(() => {
  cleanup();
});

test("generateFakeDataEntry", () => {
  const dataEntry = generateFakeDataEntry();
  expect(dataEntry).toBeDefined();
  expect(dataEntry).toHaveProperty("name");
  expect(dataEntry).toHaveProperty("description");
  expect(dataEntry).toHaveProperty("price");
  expect(dataEntry).toHaveProperty("position");
  expect(dataEntry).toHaveProperty("id");
});

test("generateFakeData", async () => {
  const data = await generateFakeData(100);
  expect(data).toHaveLength(100);
  expect(data).toBeInstanceOf(Object);
  expect(data[0]).toHaveProperty("position");
  expect(data[0].position).toEqual(0);
});
