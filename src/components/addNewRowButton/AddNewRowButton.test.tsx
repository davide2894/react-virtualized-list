import { screen, cleanup } from "@testing-library/react";
import { renderWithProviders } from "@utils/testUtils";
import AddNewRowButton from "./AddNewRowButton";
import "@testing-library/jest-dom";

afterEach(() => {
  cleanup();
});

test("<AddNewRowButton/> component renders correctly", () => {
  renderWithProviders(<AddNewRowButton />);
  const btnTextString = "Add new item";
  const addNewRowButton = screen.getByTestId("addNewRowButtonTestAttribute");
  expect(addNewRowButton).toBeInTheDocument();
  expect(addNewRowButton).toHaveTextContent(btnTextString);
});
