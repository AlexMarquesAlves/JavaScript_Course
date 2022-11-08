import { screen } from "@testing-library/react";
import { Home } from ".";
import { renderTheme } from "../../styles/render-theme";

it("should test", () => {
  renderTheme(<Home>Test</Home>);
  expect(screen.getByRole("heading", { name: "Test" })).toMatchSnapshot();
});
