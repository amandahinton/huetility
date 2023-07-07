import React from "react";
import { useColor } from "../contexts/ColorContext";
import { cssColorValue } from "../utils/helpers";
import { ColorMode } from "../types/enums";
import "./Shades.css";

export function Shades() {
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
    <>
      <h3 className="huetility-shades-title">RGB Shades</h3>
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
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          margin: 20,
          height: 100,
          width: 900,
        }}
      >
        {cssShades.map((shadeValue) => (
          <button
            key={shadeValue}
            title={shadeValue}
            style={{
              backgroundColor: shadeValue,
              borderRadius: 0,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: 100,
              width: 900 / shadeCount,
            }}
          ></button>
        ))}
      </div>
    </>
  );
}
