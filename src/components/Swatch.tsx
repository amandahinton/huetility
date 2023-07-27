import { useColor } from "../contexts/ColorContext";
import { contrastText, cssColorValue } from "../utils/helpers";
import "./Swatch.css";

export function Swatch() {
  const { color } = useColor();
  const { colorMode } = color;

  const labelColor = contrastText(color);
  const cssValue = cssColorValue(colorMode, color);

  return (
    <div className="huetility-component-container">
      <div className="huetility-swatch" style={{ backgroundColor: cssValue }}>
        <p style={{ color: labelColor }}>{cssValue}</p>
      </div>
    </div>
  );
}
