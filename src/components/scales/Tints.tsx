import React from "react";
import { Tooltip } from "components/index";
import { useColor } from "contexts/ColorContext";
import { WHITE_RGB } from "utils/constants";
import { cssColorValue, isOpaque, isWhite } from "utils/helpers";
import { rgbaToColor } from "utils/translations";
import "components/scales/Scales.css";
import { ColorCodes } from "@/types/types";

export function Tints() {
  const { color } = useColor();
  const { colorMode, RGBA } = color;

  const [tintCount, setTintCount] = React.useState<number>(5);

  const cssColor = cssColorValue(colorMode, color);

  const tooltip = (
    <div className="huetility-tooltip-content-left-align">
      <p>Tints are created by mixing a color with white.</p>
      {!isWhite(color) && (
        <>
          <p>
            Change the number of tints to produce more mixtures on a scale from
            the selected color to pure white.
          </p>
          <p>
            Click any of the swatches to copy the value (formatted in the color
            mode you have selected in the picker) to your clipboard for use in
            CSS declarations.
          </p>
        </>
      )}
    </div>
  );

  if (isWhite(color)) {
    return (
      <div className="huetility-component-container huetility-outer">
        <Tooltip hasIcon message={tooltip}>
          <h2 className="huetility-component-title">
            {isOpaque(color) ? "Tints" : "Tints with Transparency"}
          </h2>
        </Tooltip>

        <div className="huetility-scale-buttons-container">
          <button
            onClick={() => navigator.clipboard.writeText(cssColor)}
            className="huetility-scale-button huetility-bordered"
            title={`Click to copy: ${cssColor}`}
            style={{
              backgroundColor: cssColor,
              width: 300,
            }}
          ></button>
        </div>
      </div>
    );
  }

  const tints: ColorCodes[] = [color];

  const tintMultiplier = 1 / (tintCount - 1);

  const divergenceFromWhite = {
    r: 255 - RGBA.r,
    g: 255 - RGBA.g,
    b: 255 - RGBA.b,
  };

  for (let i = 1; i < tintCount - 1; i++) {
    const newTint = rgbaToColor({
      r: RGBA.r + divergenceFromWhite.r * tintMultiplier * i,
      g: RGBA.g + divergenceFromWhite.g * tintMultiplier * i,
      b: RGBA.b + divergenceFromWhite.b * tintMultiplier * i,
      a: RGBA.a,
    });
    tints.push(newTint);
  }

  tints.push(rgbaToColor({ ...WHITE_RGB, a: RGBA.a }));

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
      <div className="huetility-scale-buttons-container huetility-bordered">
        {tints.map((tint, i) => {
          const cssTint = cssColorValue(colorMode, tint);
          return (
            <button
              key={`${i}-tints-${tint}`}
              onClick={() => navigator.clipboard.writeText(cssTint)}
              className="huetility-scale-button"
              title={`Click to copy: ${cssTint}`}
              style={{
                backgroundColor: cssTint,
                width: 900 / tintCount,
              }}
            ></button>
          );
        })}
      </div>
    </div>
  );
}
