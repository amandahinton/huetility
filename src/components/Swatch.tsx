import React from "react";
import { ColorContext } from "../App";
import { contrastText } from "../utils/colorCalculations";

export function Swatch() {
  const {color} = React.useContext(ColorContext);
  const { HEX, colorMode } = color;

  const labelColor = contrastText(HEX || "ffffff");

  return (
    <div style={{ backgroundColor: HEX }}>
      <p style={{ color: labelColor }}>{`${colorMode}: ${HEX}`}</p>
    </div>
  );
}
