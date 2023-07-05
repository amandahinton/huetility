import React from "react";
import { ColorContext } from "../App";
import { contrastText } from "../utils/helpers";
import { ColorMode } from "../types/enums";

export function Swatch() {
  const { color } = React.useContext(ColorContext);
  const { colorMode } = color;

  const labelColor = contrastText(color.HEX);

  let swatchColor;

  switch (colorMode) {
    case ColorMode.HEX:
      swatchColor = color.HEX;
      break;
    case ColorMode.RGB:
      swatchColor = `rgb(${color.RGB.r}, ${color.RGB.r}, ${color.RGB.r})`;
      break;
    case ColorMode.RGBA:
      swatchColor = `rgba(${color.RGBA.r}, ${color.RGBA.r}, ${color.RGBA.r}, ${color.RGBA.a})`;
      break;
      break;
  }

  return (
    <div style={{ backgroundColor: swatchColor }}>
      <p style={{ color: labelColor }}>{`${colorMode}: ${color[colorMode]}`}</p>
    </div>
  );
}
