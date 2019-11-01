import React from "react";
import { render } from "@testing-library/react";

// Mock window.matchMedia
import "mock-match-media/polyfill";

import { setMedia } from "mock-match-media";

import App from "./App";

test("renders dark mode", () => {
  setMedia({
    "prefers-color-scheme": "dark"
  });
  const component = render(<App />);
  expect(component.baseElement.textContent).toBe("dark");
});

test("renders light mode", () => {
  setMedia({
    "prefers-color-scheme": "light"
  });
  const component = render(<App />);
  expect(component.baseElement.textContent).toBe("light");
});
