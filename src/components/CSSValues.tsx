import { useColor } from "contexts/ColorContext";
import { ColorMode } from "types/enums";
import { cssColorValue } from "utils/helpers";
import "components/CSSValues.css";

export enum CSSMode {
  HEX = "HEX",
  HSLA = "HSLA",
  RGBA = "RGBA",
}

export function CSSValues() {
  const { color } = useColor();

  return (
    <div className="huetility-component-container huetility-outer">
      <h2 className="huetility-component-title">CSS Values</h2>
      <div className="huetility-css-rules-container">
        {Object.keys(CSSMode).map((mode) => {
          const colorMode = mode as keyof typeof ColorMode;
          return (
            <button key={mode} className="huetility-css-rule">
              {cssColorValue(ColorMode[colorMode], color)}
            </button>
          );
        })}
      </div>
    </div>
  );
}
