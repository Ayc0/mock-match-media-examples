import React from "react";
import { render } from "@testing-library/react";

import "mock-match-media/jest-setup.cjs";

import { setMedia } from "mock-match-media";

import App from "./App";

test("renders dark mode", () => {
  setMedia({
    prefersColorScheme: "dark",
  });
  const component = render(<App />);
  expect(component.baseElement.textContent).toBe("dark");
});

test("renders light mode", () => {
  setMedia({
    prefersColorScheme: "light",
  });
  const component = render(<App />);
  expect(component.baseElement.textContent).toBe("light");
});
