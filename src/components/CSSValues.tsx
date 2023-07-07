import { useColor } from "../contexts/ColorContext";
import { cssColorValue } from "../utils/helpers";
import { ColorMode } from "../types/enums";
import "./CSSValues.css"

export function CSSValues() {
  const { color } = useColor();

  return (
    <>
      <h3 className="huetility-css-rules-title">CSS Values</h3>
      <div className="huetility-css-rules-container">
        {Object.keys(ColorMode).map((mode) => {
          const colorMode = mode as keyof typeof ColorMode;
          return (
            <div key={mode} className="huetility-css-rule">
              {cssColorValue(ColorMode[colorMode], color[colorMode])}
            </div>
          );
        })}
      </div>
    </>
  );
}
