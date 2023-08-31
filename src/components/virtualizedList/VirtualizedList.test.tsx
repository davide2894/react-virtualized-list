import {
  screen,
  cleanup,
  fireEvent,
  getByTestId,
} from "@testing-library/react";
import { renderWithProviders } from "@utils/testUtils";
import "@testing-library/jest-dom";
import VirtualizedList from "./VirtualizedList";
import { generateFakeData } from "@data";
import userEvent from "@testing-library/user-event";

afterEach(() => {
  cleanup();
});

beforeAll(async () => {
  const data = await generateFakeData(100);
  renderWithProviders(<VirtualizedList data={data} />);
});

test("<VirtualizedList data={data}/> component renders correctly", () => {
  const virtualizedList = screen.getByTestId("virtualizedListTestAttribute");
  expect(virtualizedList).toBeInTheDocument();
});

