import { expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import BlissSection from "@/app/componets/BlissSection";

test("BlissSEction", () => {
  render(<BlissSection />);

  const caseTitle = screen.getByText("Bliss+");
  const btnVisit = screen.getByText("Visit");
  const caseType = screen.getByText("E-Commerce");
  const caseTech = screen.getByText(
    "NextJS + RTK + Redis + Shopify + TypeScript"
  );
  const btnView = screen.getByText("View Case");
  const imgBig = screen.getAllByAltText("bliss website");
  const imgSmallOne = screen.getAllByAltText("bliss website small one");
  const imgSmallTwo = screen.getAllByAltText("bliss website small two");
  const imgSmallThree = screen.getAllByAltText("bliss website small three");

  expect(caseTitle).toBeDefined();
  expect(btnVisit).toBeDefined();
  expect(caseType).toBeDefined();
  expect(caseTech).toBeDefined();
  expect(btnView).toBeDefined();
  expect(imgBig).toBeDefined();
  expect(imgSmallOne).toBeDefined();
  expect(imgSmallTwo).toBeDefined();
  expect(imgSmallThree).toBeDefined();
});
