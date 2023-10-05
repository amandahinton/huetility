import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import type { ColorContextType } from "contexts/ColorContext";
import { ColorContext } from "contexts/ColorContext.tsx";
import { CSSValues } from "./CSSValues";
import {
  mockBlackHEX,
  mockPinkHSL,
  mock80TealRGB,
  mock80TealRGBA,
} from "tests/mocks";

function renderComponent(contextValue: ColorContextType) {
  return render(
    <ColorContext.Provider value={contextValue}>
      <CSSValues />
    </ColorContext.Provider>
  );
}

describe("CSS Values", () => {
  it("displays title", () => {
    renderComponent(mockBlackHEX);

    const title = screen.getByText("CSS Values");
    expect(title).toBeInTheDocument();
  });

  it("shows black values", () => {
    renderComponent(mockBlackHEX);

    const hex = screen.getByText("#000000");
    expect(hex).toBeInTheDocument();

    const hsl = screen.getByText("hsl(0deg 0% 0% / 1)");
    expect(hsl).toBeInTheDocument();

    const rgb = screen.getByText("rgb(0 0 0 / 1)");
    expect(rgb).toBeInTheDocument();
  });

  it("shows color values", () => {
    renderComponent(mockPinkHSL);

    const hex = screen.getByText("#f20091");
    expect(hex).toBeInTheDocument();

    const hsl = screen.getByText("hsl(324deg 100% 47% / 1)");
    expect(hsl).toBeInTheDocument();

    const rgb = screen.getByText("rgb(242 0 145 / 1)");
    expect(rgb).toBeInTheDocument();
  });

  it("shows transparent values for alpha modes", () => {
    renderComponent(mock80TealRGBA);

    const hex = screen.getByText("#186276cc");
    expect(hex).toBeInTheDocument();

    const hsl = screen.getByText("hsl(193deg 66% 28% / 0.80)");
    expect(hsl).toBeInTheDocument();

    const rgb = screen.getByText("rgb(24 98 118 / 0.80)");
    expect(rgb).toBeInTheDocument();
  });

  it("shows transparent values for nonalpha modes", () => {
    renderComponent(mock80TealRGB);

    const hex = screen.getByText("#186276cc");
    expect(hex).toBeInTheDocument();

    const hsl = screen.getByText("hsl(193deg 66% 28% / 0.80)");
    expect(hsl).toBeInTheDocument();

    const rgb = screen.getByText("rgb(24 98 118 / 0.80)");
    expect(rgb).toBeInTheDocument();
  });
});
