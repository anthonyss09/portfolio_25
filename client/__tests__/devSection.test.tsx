import { expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import DevSection from "@/app/componets/DevSection";

test("DevSEction", () => {
  render(<DevSection />);

  // const header = screen.getByText("Development at glance.");
  const subHead1 = screen.getByText("Design");
  const subHead2 = screen.getByText("Architecture");
  const subHead3 = screen.getByText("Engineering");
  const p1 = screen.getByText(
    "Keep up with design trends & strive to move them forward."
  );
  const p2 = screen.getByText(
    "Think small to think big. Sleek component based architecture with scalability in mind."
  );
  const p3 = screen.getByText(
    "Research based approach. Custom solutions meant to perform in perpetually evolving ecosystems."
  );

  // expect(header).toBeDefined();
  expect(subHead1).toBeDefined();
  expect(subHead2).toBeDefined();
  expect(subHead3).toBeDefined();
  expect(p1).toBeDefined();
  expect(p2).toBeDefined();
  expect(p3).toBeDefined();
});
