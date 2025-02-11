import { expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import HeaderSection from "@/app/componets/HeaderSection";

test("HeaderSection", () => {
  render(<HeaderSection />);

  const p1 = screen.getByText("Hi.");
  const p2 = screen.getByText("I'm Anthony Toffetti.");
  const p3 = screen.getByText("A Web Developer.");
  const p4 = screen.getByText("I write clean, developer friendly");
  const p5 = screen.getByText("code, tested & optimized for");
  const p6 = screen.getByText("the internet.");

  const profilePic = screen.getAllByAltText("profile picture");

  const btnContact = screen.getAllByRole("button");

  expect(p1).toBeDefined();
  expect(p2).toBeDefined();
  expect(p3).toBeDefined();
  expect(p4).toBeDefined();
  expect(p5).toBeDefined();
  expect(p6).toBeDefined();
  expect(profilePic).toBeDefined();
  expect(btnContact).toBeDefined();
});
