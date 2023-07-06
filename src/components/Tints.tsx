import React from "react";
import { useColor } from "../contexts/ColorContext";
import { cssColorValue } from "../utils/helpers";
import { ColorMode } from "../types/enums";

export function Tints() {
  const { color } = useColor();
  const { RGB } = color;

  const [tintCount, setTintCount] = React.useState<number>(10);
  const source = cssColorValue(ColorMode.RGB, RGB);
  const cssTints = [source];

  const tintMultiplier = 1 / (tintCount - 1);

  const divergenceFromWhite = {
    r: 255 - RGB.r,
    g: 255 - RGB.g,
    b: 255 - RGB.b,
  };

  console.log(divergenceFromWhite)
  for (let i = tintCount - 2; i > 0; i--) {
    const newtint = {
      r: divergenceFromWhite.r * tintMultiplier * i,
      g: divergenceFromWhite.g * tintMultiplier * i,
      b: divergenceFromWhite.b * tintMultiplier * i,
    };
    cssTints.push(cssColorValue(ColorMode.RGB, newtint));
  }

  cssTints.push("rgb(255, 255, 255)");

  return (
    <>
      <h3>Tints</h3>
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
        {cssTints.map((tintValue) => (
          <button
            key={tintValue}
            title={tintValue}
            style={{
              backgroundColor: tintValue,
              borderRadius: 0,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: 100,
              width: 900 / tintCount,
            }}
          ></button>
        ))}
      </div>
    </>
  );
}
