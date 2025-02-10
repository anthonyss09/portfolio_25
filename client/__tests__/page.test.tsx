import { expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import Page from "../src/app/page";

test("Navbar", () => {
  render(<Page />);

  const text = screen.getByText("Hello world!");

  expect(text).toBeDefined();
});
