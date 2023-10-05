import { render, screen, within } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { ColorContext } from "contexts/ColorContext";
import type { ColorContextType } from "contexts/ColorContext";
import { Helpers } from "./Helpers";
import { mock50PinkHSLA } from "tests/mocks";

function renderComponent(contextValue: ColorContextType) {
  return render(
    <ColorContext.Provider value={contextValue}>
      <Helpers />
    </ColorContext.Provider>
  );
}

describe("Helper Functions", () => {
  it("displays title", () => {
    renderComponent(mock50PinkHSLA);

    const title = screen.getByText("Testing Helper Functions");
    expect(title).toBeInTheDocument();

    const contextColor = screen.getByTestId("color-from-context");
    expect(contextColor).toHaveTextContent('Hexcode: "#f2009180"');
    expect(contextColor).toHaveTextContent('HSL: {"h":324,"s":100,"l":47}');
    expect(contextColor).toHaveTextContent(
      'HSLA: {"h":324,"s":100,"l":47,"a":0.5}'
    );
    expect(contextColor).toHaveTextContent('RGB: {"r":242,"g":0,"b":145}');
    expect(contextColor).toHaveTextContent(
      'RGBA: {"r":242,"g":0,"b":145,"a":0.5}'
    );

    const hexToColor = screen.getByTestId("hexToColor-function");
    expect(hexToColor).toHaveTextContent(
      'WHITE: { "HEX": "#fff", "RGB": { "r": 255, "g": 255, "b": 255 }, "RGBA": { "r": 255, "g": 255, "b": 255, "a": 1 }, "HSL": { "h": 0, "s": 0, "l": 100 }, "HSLA": { "h": 0, "s": 0, "l": 100, "a": 1 } }'
    );
    expect(hexToColor).toHaveTextContent(
      'BLACK: { "HEX": "#000", "RGB": { "r": 0, "g": 0, "b": 0 }, "RGBA": { "r": 0, "g": 0, "b": 0, "a": 1 }, "HSL": { "h": 0, "s": 0, "l": 0 }, "HSLA": { "h": 0, "s": 0, "l": 0, "a": 1 } }'
    );
    expect(hexToColor).toHaveTextContent(
      'PINK: { "HEX": "#f20091", "RGB": { "r": 242, "g": 0, "b": 145 }, "RGBA": { "r": 242, "g": 0, "b": 145, "a": 1 }, "HSL": { "h": 324, "s": 100, "l": 47 }, "HSLA": { "h": 324, "s": 100, "l": 47, "a": 1 } }'
    );
    expect(hexToColor).toHaveTextContent(
      'HALFPINK: { "HEX": "#f2009180", "RGB": { "r": 242, "g": 0, "b": 145 }, "RGBA": { "r": 242, "g": 0, "b": 145, "a": 0.5 }, "HSL": { "h": 324, "s": 100, "l": 47 }, "HSLA": { "h": 324, "s": 100, "l": 47, "a": 0.5 } }'
    );
    expect(hexToColor).toHaveTextContent(
      'TEAL: {"HEX":"#186276","RGB":{"r":24,"g":98,"b":118},"RGBA":{"r":24,"g":98,"b":118,"a":1},"HSL":{"h":193,"s":66,"l":28},"HSLA":{"h":193,"s":66,"l":28,"a":1}}'
    );

    const isPartialHex = screen.getByTestId("isPartialHexcode-function");
    expect(isPartialHex).toHaveTextContent("true");

    const isHex = screen.getByTestId("isHexcode-function");
    expect(isHex).toHaveTextContent("true");

    const isRGB = screen.getByTestId("isRGB-function");
    expect(isRGB).toHaveTextContent("true");

    const isRGBA = screen.getByTestId("isRGBA-function");
    expect(isRGBA).toHaveTextContent("true");

    const isBlack = screen.getByTestId("isBlack-function");
    expect(isBlack).toHaveTextContent("false");

    const isWhite = screen.getByTestId("isWhite-function");
    expect(isWhite).toHaveTextContent("false");

    const blend = screen.getByTestId("blendForegroundToBackground-function");
    expect(blend).toHaveTextContent(
      '{"HEX":"#f980c8","RGB":{"r":249,"g":128,"b":200},"RGBA":{"r":249,"g":128,"b":200,"a":1},"HSL":{"h":324,"s":91,"l":74},"HSLA":{"h":324,"s":91,"l":74,"a":1}}'
    );

    const linear = screen.getByTestId("channelLinear-function");
    expect(linear).toHaveTextContent("0.8879231178819663");
    expect(linear).toHaveTextContent("1");

    const nonlinear = screen.getByTestId("channelNonlinear-function");
    expect(nonlinear).toHaveTextContent("242");
    expect(nonlinear).toHaveTextContent("255");

    const luminance = screen.getByTestId("relativeLuminance-function");
    expect(luminance).toHaveTextContent("0.20921579392075149");

    const contast = screen.getByTestId("contrast-function");
    expect(contast).toHaveTextContent("WHITE: 4.05");
    expect(contast).toHaveTextContent("BLACK: 5.18");

    const contrastHex = screen.getByTestId("contrastTextHex-function");
    expect(contrastHex).toHaveTextContent("#000000");

    const css = screen.getByTestId("cssColorValue-function");
    expect(css).toHaveTextContent("HEX: #f2009180");
    expect(css).toHaveTextContent("HSL: hsl(324deg 100% 47% / 0.50)");
    expect(css).toHaveTextContent("HSLA: hsl(324deg 100% 47% / 0.50)");
    expect(css).toHaveTextContent("RGB: rgb(242 0 145 / 0.50)");
    expect(css).toHaveTextContent("RGBA: rgb(242 0 145 / 0.50)");
  });
});
