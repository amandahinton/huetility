import React from "react";
import { useColor } from "../contexts/ColorContext";
import { cssColorValue, isWhite, rgbToColor } from "../utils/helpers";
import { WHITE_RGB_CSS } from "../utils/constants";
import { ColorMode } from "../types/enums";
import "./Scale.css";

export function ScaleTints() {
  const { color } = useColor();
  const { RGB } = color;

  const [tintCount, setTintCount] = React.useState<number>(5);

  if (isWhite(color)) {
    return (
      <div className="huetility-component-container">
        <h2 className="huetility-component-title">RGB Tints</h2>

        <div className="huetility-shade-tint-buttons-container">
          <button
            className="huetility-shade-tint-button"
            title={WHITE_RGB_CSS}
            style={{
              backgroundColor: WHITE_RGB_CSS,
              width: 300,
            }}
          ></button>
        </div>
      </div>
    );
  }

  const cssTints = [cssColorValue(ColorMode.RGB, color)];

  const tintMultiplier = 1 / (tintCount - 1);

  const divergenceFromWhite = {
    r: 255 - RGB.r,
    g: 255 - RGB.g,
    b: 255 - RGB.b,
  };

  for (let i = 1; i < tintCount - 1; i++) {
    const newTint = {
      r: RGB.r + divergenceFromWhite.r * tintMultiplier * i,
      g: RGB.g + divergenceFromWhite.g * tintMultiplier * i,
      b: RGB.b + divergenceFromWhite.b * tintMultiplier * i,
    };
    cssTints.push(cssColorValue(ColorMode.RGB, rgbToColor(newTint)));
  }

  cssTints.push(WHITE_RGB_CSS);

  return (
    <div className="huetility-component-container">
      <h2 className="huetility-component-title">RGB Tints</h2>
      <label htmlFor="tintCount">Number of Tints: {tintCount}</label>
      <input
        type="range"
        min="3"
        max="20"
        id="tintCount"
        name="tintCount"
        value={tintCount}
        onChange={(e) => setTintCount(Number(e.target.value))}
      />
      <div className="huetility-shade-tint-buttons-container">
        {cssTints.map((tintValue, i) => (
          <button
            key={`${i}-tints-${tintValue}`}
            className="huetility-shade-tint-button"
            title={tintValue}
            style={{
              backgroundColor: tintValue,
              width: 900 / tintCount,
            }}
          ></button>
        ))}
      </div>
    </div>
  );
}
