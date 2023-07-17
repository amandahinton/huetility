import { useColor } from "../contexts/ColorContext";
import { cssColorValue } from "../utils/helpers";
import { ColorMode } from "../types/enums";
import "./CSSValues.css"

export function CSSValues() {
  const { color } = useColor();

  return (
    <div className="huetility-component-container">
      <h2 className="huetility-component-title">CSS Values</h2>
      <div className="huetility-css-rules-container">
        {Object.keys(ColorMode).map((mode) => {
          const colorMode = mode as keyof typeof ColorMode;
          return (
            <button key={mode} className="huetility-css-rule">
              {cssColorValue(ColorMode[colorMode], color[colorMode])}
            </button>
          );
        })}
      </div>
    </div>
  );
}