import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { ColorContext } from "contexts/ColorContext";
import type { ColorContextType } from "contexts/ColorContext";
import { Vision } from "components/vision/Vision";
import { mockPinkHSL, mock50PinkHSLA } from "tests/mocks";

function renderComponent(contextValue: ColorContextType) {
  return render(
    <ColorContext.Provider value={contextValue}>
      <Vision />
    </ColorContext.Provider>
  );
}

describe("Harmonies", () => {
  it("displays title", () => {
    renderComponent(mockPinkHSL);

    const title = screen.getByText("Vision Deficiencies");
    expect(title).toBeInTheDocument();
  });

  it("shows swatches for opaque colors", () => {
    renderComponent(mockPinkHSL);

    const trichromatic = screen.getByText("Trichromatic");
    expect(trichromatic).toBeInTheDocument();

    const protanopia = screen.getByText("Protanopia");
    expect(protanopia).toBeInTheDocument();

    const protanomaly = screen.getByText("Protanomaly");
    expect(protanomaly).toBeInTheDocument();

    const deuteranopia = screen.getByText("Deuteranopia");
    expect(deuteranopia).toBeInTheDocument();

    const deuteranomaly = screen.getByText("Deuteranomaly");
    expect(deuteranomaly).toBeInTheDocument();

    const tritanopia = screen.getByText("Tritanopia");
    expect(tritanopia).toBeInTheDocument();

    const tritanomaly = screen.getByText("Tritanomaly");
    expect(tritanomaly).toBeInTheDocument();

    const achromatopsia = screen.getByText("Achromatopsia");
    expect(achromatopsia).toBeInTheDocument();

    const monochromacy = screen.getByText("Monochromacy");
    expect(monochromacy).toBeInTheDocument();

    const container = document.getElementsByClassName(
      "huetility-vision-swatches-container"
    );
    expect(container.length).toBe(1);

    const display = document.getElementsByClassName("huetility-vision-display");
    expect(display.length).toBe(10);

    const swatches = document.getElementsByClassName("huetility-vision-swatch");
    expect(swatches.length).toBe(10);
    expect(swatches[0]).toHaveStyle("background-color: #f20091");

    const text = document.getElementsByClassName(
      "huetility-vision-text-samples"
    );
    expect(text.length).toBe(10);

    const swatchTextWhite = screen.queryAllByText("White 4.05");
    expect(swatchTextWhite.length).toBe(2);

    const swatchTextBlack = screen.queryAllByText("Black 5.18");
    expect(swatchTextBlack.length).toBe(2);
  });

  it("shows swatches for transparent colors", () => {
    renderComponent(mock50PinkHSLA);

    const trichromatic = screen.getByText("Trichromatic");
    expect(trichromatic).toBeInTheDocument();

    const protanopia = screen.getByText("Protanopia");
    expect(protanopia).toBeInTheDocument();

    const protanomaly = screen.getByText("Protanomaly");
    expect(protanomaly).toBeInTheDocument();

    const deuteranopia = screen.getByText("Deuteranopia");
    expect(deuteranopia).toBeInTheDocument();

    const deuteranomaly = screen.getByText("Deuteranomaly");
    expect(deuteranomaly).toBeInTheDocument();

    const tritanopia = screen.getByText("Tritanopia");
    expect(tritanopia).toBeInTheDocument();

    const tritanomaly = screen.getByText("Tritanomaly");
    expect(tritanomaly).toBeInTheDocument();

    const achromatopsia = screen.getByText("Achromatopsia");
    expect(achromatopsia).toBeInTheDocument();

    const monochromacy = screen.getByText("Monochromacy");
    expect(monochromacy).toBeInTheDocument();

    const container = document.getElementsByClassName(
      "huetility-vision-swatches-container"
    );
    expect(container.length).toBe(1);

    const display = document.getElementsByClassName("huetility-vision-display");
    expect(display.length).toBe(10);

    const swatches = document.getElementsByClassName("huetility-vision-swatch");
    expect(swatches.length).toBe(10);
    expect(swatches[0]).toHaveStyle("background-color: #f2009180");

    const text = document.getElementsByClassName(
      "huetility-vision-text-samples"
    );
    expect(text.length).toBe(10);

    const swatchTextWhite = screen.queryAllByText("White 4.05");
    expect(swatchTextWhite.length).toBe(2);

    const swatchTextBlack = screen.queryAllByText("Black 5.18");
    expect(swatchTextBlack.length).toBe(2);
  });
});
