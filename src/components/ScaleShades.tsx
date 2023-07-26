import React from "react";
import { useColor } from "../contexts/ColorContext";
import { cssColorValue, isBlack } from "../utils/helpers";
import { BLACK_RGB_CSS } from "../utils/constants";
import { ColorMode } from "../types/enums";
import "./Scale.css";

export function ScaleShades() {
  const { color } = useColor();
  const { RGB } = color;

  const [shadeCount, setShadeCount] = React.useState<number>(3);

  if (isBlack(ColorMode.RGB, RGB)) {
    return (
      <div className="huetility-component-container">
        <h2 className="huetility-component-title">RGB Shades</h2>

        <div className="huetility-shade-tint-buttons-container">
          <button
            className="huetility-shade-tint-button"
            title={BLACK_RGB_CSS}
            style={{
              backgroundColor: BLACK_RGB_CSS,
              width: 300,
            }}
          ></button>
        </div>
      </div>
    );
  }

  const cssShades = [cssColorValue(ColorMode.RGB, RGB)];

  const shadeMultiplier = 1 / (shadeCount - 1);

  for (let i = shadeCount - 2; i > 0; i--) {
    const newShade = {
      r: RGB.r * shadeMultiplier * i,
      g: RGB.g * shadeMultiplier * i,
      b: RGB.b * shadeMultiplier * i,
    };
    cssShades.push(cssColorValue(ColorMode.RGB, newShade));
  }

  cssShades.push(BLACK_RGB_CSS);

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
        {cssShades.map((shadeValue, i) => (
          <button
            key={`${i}-shades-${shadeValue}`}
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
