import React from "react";
import { Tooltip } from "components/index";
import { useColor } from "contexts/ColorContext";
import { WHITE_RGB } from "utils/constants";
import { cssColorValue, isWhite } from "utils/helpers";
import { hslaToColor, rgbaToColor } from "utils/translations";
import "components/scales/Scales.css";
import { ColorCodes } from "@/types/types";

export function Tints() {
  const { color } = useColor();
  const { colorMode, HSLA, RGBA } = color;

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
      <div className="huetility-tints">
        <Tooltip message={tooltip}>
          <h2 className="huetility-tooltip-title">Tints </h2>
          <p className="huetility-tooltip-icon">&#9432;</p>
        </Tooltip>

        <div className="huetility-scale-buttons-container huetility-bordered">
          <button
            onClick={() => navigator.clipboard.writeText(cssColor)}
            className="huetility-scale-button"
            title={`Click to copy: ${cssColor}`}
            aria-label={`Click to copy: ${cssColor}`}
            style={{
              backgroundColor: cssColor,
              width: 250,
            }}
          ></button>
        </div>
      </div>
    );
  }

  const tints: ColorCodes[] = [color];

  const luminanceStep = (100 - HSLA.l) / (tintCount - 1);

  for (let i = 1; i < tintCount - 1; i++) {
    const newTint = hslaToColor({
      h: HSLA.h,
      s: HSLA.s,
      l: HSLA.l + luminanceStep * i,
      a: HSLA.a,
    });
    tints.push(newTint);
  }

  tints.push(rgbaToColor({ ...WHITE_RGB, a: RGBA.a }));

  return (
    <div className="huetility-tints">
      <Tooltip message={tooltip}>
        <h2 className="huetility-tooltip-title">Tints </h2>
        <p className="huetility-tooltip-icon">&#9432;</p>
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
              aria-label={`Click to copy: ${cssTint}`}
              style={{
                backgroundColor: cssTint,
                width: 1000 / tintCount,
              }}
            ></button>
          );
        })}
      </div>
    </div>
  );
}
