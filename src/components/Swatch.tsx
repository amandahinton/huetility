import { useColor } from "contexts/ColorContext";
import { WHITE_CODES } from "utils/constants";
import {
  blendForegroundToBackground,
  contrastTextHex,
  cssColorValue,
} from "utils/helpers";
import "components/Swatch.css";
import "components/index.css";

export function Swatch() {
  const { color } = useColor();
  const { colorMode } = color;

  const blendedColor = blendForegroundToBackground(color, WHITE_CODES);

  const labelColor = contrastTextHex(blendedColor);

  const cssValue = cssColorValue(colorMode, color);

  return (
    <div
      className="huetility-picker-swatch huetility-bordered"
      style={{ backgroundColor: cssValue }}
    >
      <p style={{ color: labelColor }}>{cssValue}</p>
    </div>
  );
}
