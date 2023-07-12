import React from "react";
import { useColor } from "../contexts/ColorContext";
import { cssColorValue } from "../utils/helpers";
import { ColorMode } from "../types/enums";
import "./Scale.css";

export function ScaleShades() {
  const { color } = useColor();
  const { RGB } = color;

  const [shadeCount, setShadeCount] = React.useState<number>(3);
  const source = cssColorValue(ColorMode.RGB, RGB);
  const cssShades = [source];

  const shadeMultiplier = 1 / (shadeCount - 1);

  for (let i = shadeCount - 2; i > 0; i--) {
    const newShade = {
      r: RGB.r * shadeMultiplier * i,
      g: RGB.g * shadeMultiplier * i,
      b: RGB.b * shadeMultiplier * i,
    };
    cssShades.push(cssColorValue(ColorMode.RGB, newShade));
  }

  cssShades.push("rgb(0, 0, 0)");

  return (
    <div className="huetility-component-container">
      <h2 className="huetility-component-title">RGB Shades</h2>
      <label htmlFor="shadeCount">Number of Shades: {shadeCount}</label>
      <input
        type="range"
        min="3"
        max="20"
        id="shadeCount"
        name="shadeCount"
        value={shadeCount}
        onChange={(e) => setShadeCount(Number(e.target.value))}
      />
      <div className="huetility-shade-tint-buttons-container">
        {cssShades.map((shadeValue) => (
          <button
            key={shadeValue}
            className="huetility-shade-tint-button"
            title={shadeValue}
            style={{
              backgroundColor: shadeValue,
              width: 900 / shadeCount,
            }}
          ></button>
        ))}
      </div>
    </div>
  );
}
