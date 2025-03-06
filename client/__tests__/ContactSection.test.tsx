import { expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import ContactSection from "@/app/componets/ContactSection";

test("ContactSection", () => {
  render(<ContactSection />);

  const img = screen.getAllByRole("img");
  const header = screen.getByText("Let's talk about whatever.");
  const input = screen.getByLabelText("From:");
  const textarea = screen.getByLabelText("Content:");
  const btns = screen.getAllByRole("button");
  const footer = screen.getByText("AtoffettidevLlc");
  expect(btns).toHaveLength(5);
  expect(input).toBeDefined();
  expect(textarea).toBeDefined();
  expect(img).toBeDefined();
  expect(header).toBeDefined();
  expect(footer).toBeDefined();
});
