import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { ColorContext } from "contexts/ColorContext";
import type { ColorContextType } from "contexts/ColorContext";
import { Harmonies } from "components/harmonies/Harmonies";
import {
  mockBlackHEX,
  mockWhiteHEX,
  mockPinkHEX,
  mockPinkHSL,
  mockPinkHSLA,
  mockPinkRGB,
  mockPinkRGBA,
  mock50PinkHSLA,
} from "tests/mocks";

function renderComponent(contextValue: ColorContextType) {
  return render(
    <ColorContext.Provider value={contextValue}>
      <Harmonies />
    </ColorContext.Provider>
  );
}

describe("Harmonies", () => {
  it("displays title", () => {
    renderComponent(mockPinkHSL);

    const title = screen.getByText("Color Harmonies");
    expect(title).toBeInTheDocument();
  });

  it("does not display for black", () => {
    renderComponent(mockBlackHEX);

    const title = screen.queryByText("Color Harmonies");
    expect(title).not.toBeInTheDocument();

    const container = document.getElementsByClassName(
      "huetility-harmonies-container"
    );
    expect(container.length).toBe(0);

    const palettes = document.getElementsByClassName(
      "huetility-palette-swatches"
    );
    expect(palettes.length).toBe(0);

    const swatches = document.getElementsByClassName(
      "huetility-palette-swatch"
    );
    expect(swatches.length).toBe(0);
  });

  it("does not display for white", () => {
    renderComponent(mockWhiteHEX);

    const title = screen.queryByText("Color Harmonies");
    expect(title).not.toBeInTheDocument();

    const container = document.getElementsByClassName(
      "huetility-harmonies-container"
    );
    expect(container.length).toBe(0);

    const palettes = document.getElementsByClassName(
      "huetility-palette-swatches"
    );
    expect(palettes.length).toBe(0);

    const swatches = document.getElementsByClassName(
      "huetility-palette-swatch"
    );
    expect(swatches.length).toBe(0);
  });

  it("shows palettes for opaque colors", () => {
    renderComponent(mockPinkHSL);

    const title = screen.getByText("Color Harmonies");
    expect(title).toBeInTheDocument();

    const triadic = screen.getByText("Triadic");
    expect(triadic).toBeInTheDocument();

    const tetradic = screen.getByText("Tetradic");
    expect(tetradic).toBeInTheDocument();

    const split = screen.getByText("Split Complementary");
    expect(split).toBeInTheDocument();

    const mono = screen.getByText("Monochromatic");
    expect(mono).toBeInTheDocument();

    const analogous = screen.getByText("Analogous");
    expect(analogous).toBeInTheDocument();

    const container = document.getElementsByClassName(
      "huetility-harmonies-container"
    );
    expect(container.length).toBe(1);

    const palettes = document.getElementsByClassName(
      "huetility-palette-swatches"
    );
    expect(palettes.length).toBe(6);

    const swatches = document.getElementsByClassName(
      "huetility-palette-swatch"
    );
    expect(swatches.length).toBe(18);

    const thisSwatch = swatches[0];
    expect(thisSwatch).toHaveAttribute(
      "title",
      "Click to copy: hsl(324deg 100% 47% / 1)"
    );

    const complementSwatch = swatches[1];
    expect(complementSwatch).toHaveAttribute(
      "title",
      "Click to copy: hsl(144deg 100% 47% / 1)"
    );
  });

  it("shows palettes for transparent colors", () => {
    renderComponent(mock50PinkHSLA);

    const title = screen.getByText("Color Harmonies");
    expect(title).toBeInTheDocument();

    const triadic = screen.getByText("Triadic");
    expect(triadic).toBeInTheDocument();

    const tetradic = screen.getByText("Tetradic");
    expect(tetradic).toBeInTheDocument();

    const split = screen.getByText("Split Complementary");
    expect(split).toBeInTheDocument();

    const mono = screen.getByText("Monochromatic");
    expect(mono).toBeInTheDocument();

    const analogous = screen.getByText("Analogous");
    expect(analogous).toBeInTheDocument();

    const container = document.getElementsByClassName(
      "huetility-harmonies-container"
    );
    expect(container.length).toBe(1);

    const palettes = document.getElementsByClassName(
      "huetility-palette-swatches"
    );
    expect(palettes.length).toBe(6);

    const swatches = document.getElementsByClassName(
      "huetility-palette-swatch"
    );
    expect(swatches.length).toBe(18);

    const thisSwatch = swatches[0];
    expect(thisSwatch).toHaveAttribute(
      "title",
      "Click to copy: hsl(324deg 100% 47% / 0.50)"
    );

    const complementSwatch = swatches[1];
    expect(complementSwatch).toHaveAttribute(
      "title",
      "Click to copy: hsl(144deg 100% 47% / 0.50)"
    );
  });

  it("formats clipboard to HEX", () => {
    renderComponent(mockPinkHEX);
    const swatchesHEX = document.getElementsByClassName(
      "huetility-palette-swatch"
    );
    expect(swatchesHEX[0]).toHaveAttribute("title", "Click to copy: #f20091");
  });

  it("formats clipboard to HSL", () => {
    renderComponent(mockPinkHSL);
    const swatchesHSL = document.getElementsByClassName(
      "huetility-palette-swatch"
    );
    expect(swatchesHSL[0]).toHaveAttribute(
      "title",
      "Click to copy: hsl(324deg 100% 47% / 1)"
    );
  });

  it("formats clipboard to HSLA", () => {
    renderComponent(mockPinkHSLA);
    const swatchesHSLA = document.getElementsByClassName(
      "huetility-palette-swatch"
    );
    expect(swatchesHSLA[0]).toHaveAttribute(
      "title",
      "Click to copy: hsl(324deg 100% 47% / 1)"
    );
  });

  it("formats clipboard to RGB", () => {
    renderComponent(mockPinkRGB);
    const swatchesRGB = document.getElementsByClassName(
      "huetility-palette-swatch"
    );
    expect(swatchesRGB[0]).toHaveAttribute(
      "title",
      "Click to copy: rgb(242 0 145 / 1)"
    );
  });

  it("formats clipboard to RGBA", () => {
    renderComponent(mockPinkRGBA);
    const swatchesRGBA = document.getElementsByClassName(
      "huetility-palette-swatch"
    );
    expect(swatchesRGBA[0]).toHaveAttribute(
      "title",
      "Click to copy: rgb(242 0 145 / 1)"
    );
  });
});
