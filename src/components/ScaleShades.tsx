import React from "react";
import { useColor } from "contexts/ColorContext";
import { ColorMode } from "types/enums";
import { BLACK_RGB } from "utils/constants";
import { cssColorValue, isBlack, isOpaque } from "utils/helpers";
import { rgbaToColor } from "@/utils/translations";
import "components/Scale.css";
import "components/index.css";

export function ScaleShades() {
  const { color } = useColor();
  const { RGBA } = color;

  const [shadeCount, setShadeCount] = React.useState<number>(5);

  const blackWithAlpha = rgbaToColor({ ...BLACK_RGB, a: RGBA.a });
  const blackWithAlphaCSS = cssColorValue(ColorMode.RGBA, blackWithAlpha);

  if (isBlack(color)) {
    return (
      <div className="huetility-component-container huetility-outer">
        <h2 className="huetility-component-title">
          {isOpaque(color) ? "Shades" : "Shades with Transparency"}
        </h2>

        <div className="huetility-shade-tint-button huetility-bordered">
          <button
            className="huetility-shade-tint-button"
            title={blackWithAlphaCSS}
            style={{
              backgroundColor: blackWithAlphaCSS,
              width: 300,
            }}
          ></button>
        </div>
      </div>
    );
  }

  const cssShades = [cssColorValue(ColorMode.RGBA, color)];

  const shadeMultiplier = 1 / (shadeCount - 1);

  for (let i = shadeCount - 2; i > 0; i--) {
    const newShade = {
      r: RGBA.r * shadeMultiplier * i,
      g: RGBA.g * shadeMultiplier * i,
      b: RGBA.b * shadeMultiplier * i,
      a: RGBA.a,
    };
    cssShades.push(cssColorValue(ColorMode.RGBA, rgbaToColor(newShade)));
  }

  cssShades.push(blackWithAlphaCSS);

  return (
    <div className="huetility-component-container huetility-outer">
      <h2 className="huetility-component-title">
        {isOpaque(color) ? "Shades" : "Shades with Transparency"}
      </h2>
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
      <div className="huetility-shade-tint-buttons-container huetility-bordered">
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
