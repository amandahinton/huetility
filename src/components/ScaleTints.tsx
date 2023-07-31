import React from "react";
import { useColor } from "../contexts/ColorContext";
import {
  cssColorValue,
  isOpaque,
  isWhite,
  rgbaToColor,
} from "../utils/helpers";
import { WHITE_RGB } from "../utils/constants";
import { ColorMode } from "../types/enums";
import "./Scale.css";

export function ScaleTints() {
  const { color } = useColor();
  const { RGBA } = color;

  const [tintCount, setTintCount] = React.useState<number>(5);

  const whiteWithAlpha = rgbaToColor({ ...WHITE_RGB, a: RGBA.a });
  const whiteWithAlphaCSS = cssColorValue(ColorMode.RGBA, whiteWithAlpha);

  if (isWhite(color)) {
    return (
      <div className="huetility-component-container">
        <h2 className="huetility-component-title">
          {isOpaque(color) ? "Tints" : "Tints with Transparency"}
        </h2>

        <div className="huetility-shade-tint-buttons-container">
          <button
            className="huetility-shade-tint-button huetility-bordered"
            title={whiteWithAlphaCSS}
            style={{
              backgroundColor: whiteWithAlphaCSS,
              width: 300,
            }}
          ></button>
        </div>
      </div>
    );
  }

  const cssTints = [cssColorValue(ColorMode.RGBA, color)];

  const tintMultiplier = 1 / (tintCount - 1);

  const divergenceFromWhite = {
    r: 255 - RGBA.r,
    g: 255 - RGBA.g,
    b: 255 - RGBA.b,
  };

  for (let i = 1; i < tintCount - 1; i++) {
    const newTint = {
      r: RGBA.r + divergenceFromWhite.r * tintMultiplier * i,
      g: RGBA.g + divergenceFromWhite.g * tintMultiplier * i,
      b: RGBA.b + divergenceFromWhite.b * tintMultiplier * i,
      a: RGBA.a,
    };
    cssTints.push(cssColorValue(ColorMode.RGBA, rgbaToColor(newTint)));
  }

  cssTints.push(whiteWithAlphaCSS);

  return (
    <div className="huetility-component-container">
      <h2 className="huetility-component-title">
        {isOpaque(color) ? "Tints" : "Tints with Transparency"}
      </h2>
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
      <div className="huetility-shade-tint-buttons-container huetility-bordered">
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
