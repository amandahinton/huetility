import React from "react";
import { InputHex } from ".";
import { ColorCodes } from "../types/types";
import "./Contrast.css";
import { useColor } from "../contexts/ColorContext";
import { contrast, hexToColor, isBlack, isWhite } from "../utils/helpers";

type Props = {
  contrastColor: ColorCodes;
};
export function ContrastChecker({ contrastColor }: Props) {
  const { color } = useColor();

  const [selectedColor, setSelectedColor] =
    React.useState<ColorCodes>(contrastColor);

  const contrastRatio = contrast(color, selectedColor) || 0;
  const colorLabel = isWhite(selectedColor)
    ? "white"
    : isBlack(selectedColor)
    ? "black"
    : selectedColor.HEX;

  const contrastMessage =
    contrastRatio >= 4.5
      ? "Good for text of all sizes"
      : contrastRatio < 3
      ? "Low contrast, not accessible"
      : "Good for large text only";

  return (
    <div className="huetility-component-container">
      <InputHex
        onChange={(hexcode: string) => setSelectedColor(hexToColor(hexcode))}
        color={selectedColor}
      />

      <p className="huetility-contrast-advice">{contrastMessage}</p>

      <div className="huetility-contrast-swatch-container">
        <div
          className="huetility-contrast-swatch huetility-bordered"
          style={{ backgroundColor: color.HEX }}
        >
          <p style={{ color: selectedColor.HEX }}>14 point</p>
        </div>

        <div
          className="huetility-contrast-swatch huetility-bordered"
          style={{ backgroundColor: selectedColor.HEX }}
        >
          <p style={{ color: color.HEX }}>14 point</p>
        </div>
      </div>

      <h3 className="huetility-contrast-ratio">
        {contrastRatio} contrast with {colorLabel}
      </h3>
    </div>
  );
}
