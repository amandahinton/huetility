import { afterEach } from "vitest";
import { cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";
import "@testing-library/jest-dom/vitest";

// clear jsdom and clean up after each test case
afterEach(() => {
  cleanup();
});
