import { Tooltip } from "components/index";
import { useColor } from "contexts/ColorContext";
import { ColorMode } from "types/enums";
import { cssColorValue } from "utils/helpers";
import "components/values/CSSValues.css";

export enum CSSMode {
  HEX = "HEX",
  HSLA = "HSLA",
  RGBA = "RGBA",
}

export function CSSValues() {
  const { color } = useColor();

  const tooltip = (
    <p className="huetility-tooltip-content-left-align">
      Click any of the values to copy to the clipboard for use in CSS
      declarations.
    </p>
  );

  return (
    <div className="huetility-component-container huetility-outer">
      <Tooltip hasIcon message={tooltip}>
        <h2 className="huetility-component-title">CSS Values</h2>
      </Tooltip>

      <div className="huetility-css-rules-container">
        {Object.keys(CSSMode).map((mode) => {
          const colorMode = mode as keyof typeof ColorMode;
          const cssColor = cssColorValue(ColorMode[colorMode], color);
          return (
            <button
              key={mode}
              onClick={() => navigator.clipboard.writeText(cssColor)}
              className="huetility-css-rule"
              title={`Click to copy: ${cssColor}`}
            >
              {cssColor}
            </button>
          );
        })}
      </div>
    </div>
  );
}
