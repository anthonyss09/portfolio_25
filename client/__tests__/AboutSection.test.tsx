import { expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import AboutSection from "@/app/componets/AboutSection";

test("AboutSection", () => {
  render(<AboutSection />);

  const header = screen.getAllByText("I love tech!");
  const body = screen.getAllByText(
    "More about me. This is where I'm gonna talk about my background.I'm gonna tell you about some of the tech I use & a little about my process & goals. I might even tell you how I plan to accomplish them!"
  );
  const headerCount = header.length;
  const bodyCount = body.length;
  expect(headerCount).toEqual(5);
  expect(bodyCount).toEqual(5);
});
