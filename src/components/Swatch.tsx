import { useColor } from "../contexts/ColorContext";
import { contrastText, cssColorValue } from "../utils/helpers";
import { ColorMode } from "../types/enums";

export function Swatch() {
  const { color } = useColor();
  const { colorMode } = color;
  const colorCode = color[colorMode];

  const labelColor = contrastText(color.HEX);
  const cssValue = cssColorValue(colorMode, colorCode);

  let swatchColor;

  switch (colorMode) {
    case ColorMode.HEX:
      swatchColor = color.HEX;
      break;
    case ColorMode.RGB:
      swatchColor = `rgb(${color.RGB.r}, ${color.RGB.r}, ${color.RGB.r})`;
      break;
    case ColorMode.RGBA:
      swatchColor = `rgba(${color.RGBA.r}, ${color.RGBA.r}, ${color.RGBA.r}, ${color.RGBA.a})`;
      break;
  }

  return (
    <div
      style={{
        backgroundColor: cssValue,
        height: 100,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: 20,
      }}
    >
      <p
        style={{
          color: labelColor,
        }}
      >
        {cssValue}
      </p>
    </div>
  );
}
