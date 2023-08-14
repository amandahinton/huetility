import { useColor } from "../contexts/ColorContext";
import { ColorMode } from "../types/enums";
import { BLACK_CODES, WHITE_CODES } from "../utils/constants";
import {
  blendForegroundToBackground,
  channelLinear,
  channelNonlinear,
  contrast,
  contrastTextHex,
  cssColorValue,
  isBlack,
  isHexcode,
  isPartialHexcode,
  isRGB,
  isRGBA,
  isWhite,
  relativeLuminance,
} from "../utils/helpers";
import { hexToColor } from "../utils/translations.ts";
import "./index.css";

export function Testing() {
  const { color } = useColor();

  return (
    <>
      <h2>Testing Helper Functions</h2>

      <h4 className="huetility-space-above">Color Selected</h4>
      <p>Hexcode: {JSON.stringify(color.HEX)}</p>
      <p>HSL: {JSON.stringify(color.HSL)}</p>
      <p>HSLA: {JSON.stringify(color.HSLA)}</p>
      <p>RGB: {JSON.stringify(color.RGB)}</p>
      <p>RGBA: {JSON.stringify(color.RGBA)}</p>

      <h4 className="huetility-space-above">hexToColor</h4>
      <p>WHITE {JSON.stringify(hexToColor("#fff"), null, "\n")}</p>
      <p>BLACK {JSON.stringify(hexToColor("#000"), null, "\n")}</p>
      <p>PINK {JSON.stringify(hexToColor("#f2009180"), null, "\n")}</p>
      <p>TEST DARK CYAN {JSON.stringify(hexToColor("#186276"))}</p>
      <h4 className="huetility-space-above">isPartialHexcode</h4>
      <p>{JSON.stringify(isPartialHexcode(color.HEX))}</p>

      <h4 className="huetility-space-above">isHexcode</h4>
      <p>{JSON.stringify(isHexcode(color.HEX))}</p>

      <h4 className="huetility-space-above">isRGB</h4>
      <p>{JSON.stringify(isRGB(color.RGB))}</p>

      <h4 className="huetility-space-above">isRGBA</h4>
      <p>{JSON.stringify(isRGBA(color.RGBA))}</p>

      <h4 className="huetility-space-above">isBlack</h4>
      <p>{JSON.stringify(isBlack(color))}</p>

      <h4 className="huetility-space-above">isWhite</h4>
      <p>{JSON.stringify(isWhite(color))}</p>

      <h4 className="huetility-space-above">blendForegroundToBackground</h4>
      <p>picker RGBA: {JSON.stringify(color.RGBA)}</p>
      <p>
        approximate blended RGB:{" "}
        {JSON.stringify(blendForegroundToBackground(color, WHITE_CODES).RGB)}
      </p>
      <p>
        approximate blended HEX:{" "}
        {blendForegroundToBackground(color, WHITE_CODES).HEX}
      </p>

      <h4 className="huetility-space-above">channelLinear</h4>
      <p>{channelLinear(color.RGB.r)}</p>
      <p>{channelLinear(255)}</p>

      <h4 className="huetility-space-above">channelNonlinear</h4>
      <p>{channelNonlinear(0.8879231178819663)}</p>
      <p>{channelNonlinear(1)}</p>
      <p>{channelNonlinear(2)}</p>

      <h4 className="huetility-space-above">relativeLuminance</h4>
      <p>{relativeLuminance(color)}</p>

      <h4 className="huetility-space-above">contrast</h4>
      <p>white should be 4.05</p>
      <p>{contrast(color, WHITE_CODES)}</p>
      <p>black should be 5.18</p>
      <p>{contrast(color, BLACK_CODES)}</p>

      <h4 className="huetility-space-above">contrastText</h4>
      <p>{contrastTextHex(color)}</p>

      <h4 className="huetility-space-above">cssColorValue</h4>
      <p>{cssColorValue(ColorMode.HEX, color)}</p>
      <p>{cssColorValue(ColorMode.RGB, color)}</p>
      <p>{cssColorValue(ColorMode.RGBA, color)}</p>
    </>
  );
}
