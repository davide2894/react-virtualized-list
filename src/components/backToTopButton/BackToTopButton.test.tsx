import { screen, cleanup } from "@testing-library/react";
import { renderWithProviders } from "@utils/testUtils";
import BackToTopButton from "./BackToTopButton";
import "@testing-library/jest-dom";

afterEach(() => {
  cleanup();
});

test("<BackToTopButton/> component renders correctly", () => {
  renderWithProviders(<BackToTopButton onClick={() => undefined} />);
  const btnTextString = "Back to top";
  const backToTopButton = screen.getByTestId("backToTopButtonTestAttribute");
  expect(backToTopButton).toBeInTheDocument();
  expect(backToTopButton).toHaveTextContent(btnTextString);
});
