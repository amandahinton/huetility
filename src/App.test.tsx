import { render, screen } from "@testing-library/react";
import { beforeEach, describe, it, expect } from "vitest";
import App from "./App";

describe("App", () => {
  beforeEach(() => {
    render(<App />);
  });

  it("renders title", () => {
    const title = screen.getByText("HUETILITY");
    expect(title).toBeInTheDocument();
  });

  it("renders picker", () => {
    const picker = screen.getByText("Color Picker");
    expect(picker).toBeInTheDocument();
  });

  it("renders contrast component", () => {
    const contrast = screen.getByText("Color Contrast");
    expect(contrast).toBeInTheDocument();
  });

  it("renders css component", () => {
    const css = screen.getByText("CSS Values");
    expect(css).toBeInTheDocument();
  });

  it("renders harmonies component", () => {
    const harmonies = screen.getByText("Color Harmonies");
    expect(harmonies).toBeInTheDocument();
  });

  it("renders scales components", () => {
    const tints = screen.getByText("Tints");
    expect(tints).toBeInTheDocument();

    const shades = screen.getByText("Shades");
    expect(shades).toBeInTheDocument();
  });

  it("renders colorblindness component", () => {
    const vision = screen.getByText("Vision Deficiencies");
    expect(vision).toBeInTheDocument();
  });

  it("renders footer", () => {
    const byline = screen.getByText("Amanda Hinton");
    expect(byline).toBeInTheDocument();
  });
});
