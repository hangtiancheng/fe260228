import { render, screen } from "@testing-library/react";
import { expect, test } from "vitest";
import { App } from "../";

test("renders the application shell", () => {
  render(<App />);

  expect(
    // MUST `fe260228`
    screen.getByRole("main", { name: "fe260228" }),
  ).toBeInTheDocument();
});
