import { useColor } from "contexts/ColorContext";
import { ColorMode } from "types/enums";
import { BLACK_CODES, WHITE_CODES } from "utils/constants";
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
} from "utils/helpers";
import { hexToColor } from "utils/translations";

export function Helpers() {
  const { color } = useColor();

  return (
    <>
      <h2>Testing Helper Functions</h2>

      <div data-testid="color-from-context">
        <p>Hexcode: {JSON.stringify(color.HEX)}</p>
        <p>HSL: {JSON.stringify(color.HSL)}</p>
        <p>HSLA: {JSON.stringify(color.HSLA)}</p>
        <p>RGB: {JSON.stringify(color.RGB)}</p>
        <p>RGBA: {JSON.stringify(color.RGBA)}</p>
      </div>

      <div data-testid="hexToColor-function">
        <p>WHITE: {JSON.stringify(hexToColor("#fff"), null, "\n")}</p>
        <p>BLACK: {JSON.stringify(hexToColor("#000"), null, "\n")}</p>
        <p>PINK: {JSON.stringify(hexToColor("#f20091"), null, "\n")}</p>
        <p>HALFPINK: {JSON.stringify(hexToColor("#f2009180"), null, "\n")}</p>
        <p>TEAL: {JSON.stringify(hexToColor("#186276"))}</p>
      </div>

      <div data-testid="isPartialHexcode-function">
        <p>{JSON.stringify(isPartialHexcode(color.HEX))}</p>
      </div>

      <div data-testid="isHexcode-function">
        <p>{JSON.stringify(isHexcode(color.HEX))}</p>
      </div>

      <div data-testid="isRGB-function">
        <p>{JSON.stringify(isRGB(color.RGB))}</p>
      </div>

      <div data-testid="isRGBA-function">
        <p>{JSON.stringify(isRGBA(color.RGBA))}</p>
      </div>

      <div data-testid="isBlack-function">
        <p>{JSON.stringify(isBlack(color))}</p>
      </div>

      <div data-testid="isWhite-function">
        <p>{JSON.stringify(isWhite(color))}</p>
      </div>

      <div data-testid="blendForegroundToBackground-function">
        <p>{JSON.stringify(blendForegroundToBackground(color, WHITE_CODES))}</p>
      </div>

      <div data-testid="channelLinear-function">
        <p>{channelLinear(color.RGB.r)}</p>
        <p>{channelLinear(255)}</p>
      </div>

      <div data-testid="channelNonlinear-function">
        <p>{channelNonlinear(0.8879231178819663)}</p>
        <p>{channelNonlinear(1)}</p>
        <p>{channelNonlinear(2)}</p>
      </div>

      <div data-testid="relativeLuminance-function">
        <p>{relativeLuminance(color)}</p>
      </div>

      <div data-testid="contrast-function">
        <p>WHITE: {contrast(color, WHITE_CODES)}</p>
        <p>BLACK: {contrast(color, BLACK_CODES)}</p>
      </div>

      <div data-testid="contrastTextHex-function">
        <p>{contrastTextHex(color)}</p>
      </div>

      <div data-testid="cssColorValue-function">
        <p>HEX: {cssColorValue(ColorMode.HEX, color)}</p>
        <p>HSL: {cssColorValue(ColorMode.HSL, color)}</p>
        <p>HSLA: {cssColorValue(ColorMode.HSLA, color)}</p>
        <p>RGB: {cssColorValue(ColorMode.RGB, color)}</p>
        <p>RGBA: {cssColorValue(ColorMode.RGBA, color)}</p>
      </div>
    </>
  );
}
