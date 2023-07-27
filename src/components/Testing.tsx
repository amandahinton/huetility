import { useColor } from "../contexts/ColorContext";
import { WHITE_RGB } from "../utils/constants";
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
  contrastText,
  cssColorValue,
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
      <p>{JSON.stringify(approximateRGBFromRGBA(color.RGBA, WHITE_RGB))}</p>

      <h4 className="space-above">channelLuminance</h4>
      <p>{channelLuminance(color.RGB.r)}</p>

      <h4 className="space-above">relativeLuminance</h4>
      <p>{relativeLuminance(color)}</p>

      <h4 className="space-above">contrastText</h4>
      <p>{contrastText(color)}</p>

      <h4 className="space-above">cssColorValue</h4>
      <p>{cssColorValue(ColorMode.HEX, color)}</p>
      <p>{cssColorValue(ColorMode.RGB, color)}</p>
      <p>{cssColorValue(ColorMode.RGBA, color)}</p>
    </>
  );
}