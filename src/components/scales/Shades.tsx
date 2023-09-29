import React from "react";
import { Tooltip } from "components/index";
import { useColor } from "contexts/ColorContext";
import { ColorCodes } from "types/types";
import { BLACK_RGB } from "utils/constants";
import { cssColorValue, isBlack, isOpaque } from "utils/helpers";
import { hslaToColor, rgbaToColor } from "utils/translations";
import "components/scales/Scales.css";
import "components/index.css";

export function Shades() {
  const { color } = useColor();
  const { colorMode, HSLA, RGBA } = color;

  const [shadeCount, setShadeCount] = React.useState<number>(5);

  const cssColor = cssColorValue(colorMode, color);

  const tooltip = (
    <div className="huetility-tooltip-content-left-align">
      <p>Shades are created by mixing a color with black.</p>
      {!isBlack(color) && (
        <>
          <p>
            Change the number of shades to produce more mixtures on a scale from
            the selected color to pure black.
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

  if (isBlack(color)) {
    return (
      <div className="huetility-component-container huetility-outer">
        <Tooltip hasIcon message={tooltip}>
          <h2 className="huetility-component-title">
            {isOpaque(color) ? "Shades" : "Shades with Transparency"}
          </h2>
        </Tooltip>

        <div className="huetility-scale-button huetility-bordered">
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

  const shades: ColorCodes[] = [color];

  const luminanceStep = HSLA.l / (shadeCount - 1);

  for (let i = 1; i < shadeCount - 1; i++) {
    const newShade = hslaToColor({
      h: HSLA.h,
      s: HSLA.s,
      l: HSLA.l - luminanceStep * i,
      a: HSLA.a,
    });
    shades.push(newShade);
  }

  shades.push(rgbaToColor({ ...BLACK_RGB, a: RGBA.a }));

  return (
    <div className="huetility-component-container huetility-outer">
      <Tooltip hasIcon message={tooltip}>
        <h2 className="huetility-component-title">
          {isOpaque(color) ? "Shades" : "Shades with Transparency"}
        </h2>
      </Tooltip>

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
      <div className="huetility-scale-buttons-container huetility-bordered">
        {shades.map((shade, i) => {
          const cssShade = cssColorValue(colorMode, shade);
          return (
            <button
              key={`${i}-shades-${shade}`}
              onClick={() => navigator.clipboard.writeText(cssShade)}
              className="huetility-scale-button"
              title={`Click to copy: ${cssShade}`}
              aria-label={`Click to copy: ${cssShade}`}
              style={{
                backgroundColor: cssShade,
                width: 1000 / shadeCount,
              }}
            ></button>
          );
        })}
      </div>
    </div>
  );
}
