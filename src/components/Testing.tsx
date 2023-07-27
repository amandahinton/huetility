import { useColor } from "../contexts/ColorContext";
import { BLACK_CODES, WHITE_CODES } from "../utils/constants";
import {
  isHexcode,
  isPartialHexcode,
  isRGB,
  isRGBA,
  isBlack,
  isWhite,
  approximateRGBFromRGBA,
  channelLuminance,
  relativeLuminance,
  contrast,
  contrastText,
  cssColorValue,
  hexToColor,
} from "../utils/helpers";
import { ColorMode } from "../types/enums";
import "./index.css";

export function Testing() {
  const { color } = useColor();

  return (
    <>
      <h2>Testing Helper Functions</h2>

      <h4 className="space-above">Color Selected</h4>
      <p>Hexcode: {JSON.stringify(color.HEX)}</p>
      <p>RGB: {JSON.stringify(color.RGB)}</p>
      <p>RGBA: {JSON.stringify(color.RGBA)}</p>

      <h4 className="space-above">hexToColor</h4>
      <p>white {JSON.stringify(hexToColor("#fff"))}</p>
      <p>black {JSON.stringify(hexToColor("#000"))}</p>

      <h4 className="space-above">isPartialHexcode</h4>
      <p>{JSON.stringify(isPartialHexcode(color.HEX))}</p>

      <h4 className="space-above">isHexcode</h4>
      <p>{JSON.stringify(isHexcode(color.HEX))}</p>

      <h4 className="space-above">isRGB</h4>
      <p>{JSON.stringify(isRGB(color.RGB))}</p>

      <h4 className="space-above">isRGBA</h4>
      <p>{JSON.stringify(isRGBA(color.RGBA))}</p>

      <h4 className="space-above">isBlack</h4>
      <p>{JSON.stringify(isBlack(color))}</p>

      <h4 className="space-above">isWhite</h4>
      <p>{JSON.stringify(isWhite(color))}</p>

      <h4 className="space-above">approximateRGBFromRGBA</h4>
      <p>{JSON.stringify(approximateRGBFromRGBA(color, WHITE_CODES))}</p>

      <h4 className="space-above">channelLuminance</h4>
      <p>{channelLuminance(color.RGB.r)}</p>

      <h4 className="space-above">relativeLuminance</h4>
      <p>{relativeLuminance(color)}</p>

      <h4 className="space-above">contrast</h4>
      <p>white should be 4.05</p>
      <p>{contrast(color, WHITE_CODES)}</p>
      <p>black should be 5.18</p>
      <p>{contrast(color, BLACK_CODES)}</p>

      <h4 className="space-above">contrastText</h4>
      <p>{contrastText(color, WHITE_CODES)}</p>

      <h4 className="space-above">cssColorValue</h4>
      <p>{cssColorValue(ColorMode.HEX, color)}</p>
      <p>{cssColorValue(ColorMode.RGB, color)}</p>
      <p>{cssColorValue(ColorMode.RGBA, color)}</p>
    </>
  );
}
