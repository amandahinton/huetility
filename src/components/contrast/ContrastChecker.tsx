import React from "react";
import { InputHex, Swatch } from "components/index";
import { useColor } from "contexts/ColorContext";
import { ColorCodes } from "types/types";
import { WHITE_CODES } from "utils/constants";
import { blendForegroundToBackground, contrast, isOpaque } from "utils/helpers";
import { hexToColor } from "utils/translations";
import "components/contrast/Contrast.css";

export function ContrastChecker({
  contrastColor,
}: {
  contrastColor: ColorCodes;
}) {
  const { color } = useColor();

  const [selection, setSelection] = React.useState<ColorCodes>(contrastColor);

  // use if opaque color and selection
  const colorContrast = contrast(color, selection);

  /*
  if color and/or selection has transparency, blend first
  example color = transparent red #ff004080
  example selection = transparent black #00000080
  page = white #fff

  color on selection                selection on color
   ----------------------           ------------------------
  | transparent red text |         | transparent black text | 
  |                      |         |                        |
  | transparent black bg |         |  transparent red bg    | 
   ----------------------           ------------------------

  bg1 = blend selection to page     bg2 = blend color to page
  text1 = blend color to bg1        text2 = blend selection to bg2
  contrast(text1, bg1)              contrast(text2, bg2)
*/

  const background1 = blendForegroundToBackground(selection, WHITE_CODES);
  const text1 = blendForegroundToBackground(color, background1);
  const contrast1 = contrast(text1, background1);

  const background2 = blendForegroundToBackground(color, WHITE_CODES);
  const text2 = blendForegroundToBackground(selection, background2);
  const contrast2 = contrast(text2, background2);

  function contrastMessage(contrast: number): string {
    if (contrast >= 4.5) {
      return "Good for text of all sizes";
    } else if (contrast < 3) {
      return "Low contrast, hard to read";
    } else {
      return "Good for large text only";
    }
  }

  return (
    <div className="huetility-component-container">
      <div className="huetility-contrast-hex-input">
        <InputHex
          onChange={(hexcode: string) => setSelection(hexToColor(hexcode))}
          color={selection}
        />
      </div>

      {isOpaque(color) && isOpaque(selection) && (
        <>
          <div className="huetility-contrast-swatch-container">
            <Swatch backgroundColor={color.HEX} height="200" width="200">
              <ContrastSamples textHex={selection.HEX} />
            </Swatch>
            <Swatch backgroundColor={selection.HEX} height="200" width="200">
              <ContrastSamples textHex={color.HEX} />
            </Swatch>
          </div>
          <h3 className="huetility-contrast-ratio">{colorContrast}</h3>
          {colorContrast && <p>{contrastMessage(colorContrast)}</p>}
        </>
      )}

      {(!isOpaque(color) || !isOpaque(selection)) && (
        <div className="huetility-contrast-swatch-container">
          <div>
            <Swatch backgroundColor={background1.HEX} height="200" width="200">
              <ContrastSamples textHex={text1.HEX} />
            </Swatch>
            <div className="huetility-contrast-text-ratios">
              <h3 className="huetility-contrast-ratio">{contrast1}</h3>
              {contrast1 && <p>{contrastMessage(contrast1)}</p>}
            </div>
          </div>

          <div>
            <Swatch backgroundColor={background2.HEX} height="200" width="200">
              <ContrastSamples textHex={text2.HEX} />
            </Swatch>
            <div className="huetility-contrast-text-ratios">
              <h3 className="huetility-contrast-ratio">{contrast2}</h3>
              {contrast2 && <p>{contrastMessage(contrast2)}</p>}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function ContrastSamples({ textHex }: { textHex: string }) {
  return (
    <div className="huetility-contrast-text-samples" style={{ color: textHex }}>
      <p style={{ fontSize: "14pt" }}>14 point</p>
      <p style={{ fontSize: "14pt", fontWeight: "bold" }}>14 point bold</p>
      <p style={{ fontSize: "18pt" }}>18 point</p>
      <p style={{ fontSize: "24pt" }}>24 point</p>
    </div>
  );
}
