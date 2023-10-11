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
    <div className="huetility-tooltip-message">
      <p>
        Click any of the values to copy to the clipboard for use in CSS
        declarations.
      </p>
    </div>
  );

  return (
    <div className="huetility-css-values">
      <Tooltip
        classes="huetility-component-title"
        message={tooltip}
        text={<h2 className="huetility-tooltip-text">CSS Values</h2>}
        trigger={<p style={{ position: "relative", top: "-.5rem" }}>&#9432;</p>}
      />

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
              aria-label={`Click to copy: ${cssColor}`}
            >
              {cssColor}
            </button>
          );
        })}
      </div>
    </div>
  );
}
