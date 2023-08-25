import React from "react";
import { Tooltip } from "components/index";
import { useColor } from "contexts/ColorContext";
import { ColorMode } from "types/enums";
import { WHITE_RGB } from "utils/constants";
import { cssColorValue, isOpaque, isWhite } from "utils/helpers";
import { rgbaToColor } from "@/utils/translations";
import "components/Scale.css";

export function ScaleTints() {
  const { color } = useColor();
  const { RGBA } = color;

  const [tintCount, setTintCount] = React.useState<number>(5);

  const tooltip = (
    <div className="huetility-tooltip-content-left-align">
      <p>Tints are created by mixing a color with white.</p>
      {!isWhite(color) && (
        <p>
          Change the number of tints to produce more mixtures on a scale from
          the selected color to pure white.
        </p>
      )}
    </div>
  );

  const whiteWithAlpha = rgbaToColor({ ...WHITE_RGB, a: RGBA.a });
  const whiteWithAlphaCSS = cssColorValue(ColorMode.RGBA, whiteWithAlpha);

  if (isWhite(color)) {
    return (
      <div className="huetility-component-container huetility-outer">
        <Tooltip hasIcon message={tooltip}>
          <h2 className="huetility-component-title">
            {isOpaque(color) ? "Tints" : "Tints with Transparency"}
          </h2>
        </Tooltip>

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
    <div className="huetility-component-container huetility-outer">
      <Tooltip hasIcon message={tooltip}>
        <h2 className="huetility-component-title">
          {isOpaque(color) ? "Tints" : "Tints with Transparency"}
        </h2>
      </Tooltip>

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
