import { Swatch, Tooltip } from "components/index";
import { useColor } from "contexts/ColorContext";
import { PerceivedColor } from "types/types";
import {
  blendForegroundToBackground,
  contrast,
  isOpaque,
  perceivedColors,
} from "utils/helpers";
import { BLACK_CODES, WHITE_CODES } from "utils/constants";
import "components/vision/Vision.css";

export function Vision() {
  const { color } = useColor();

  const flattenedColor = isOpaque(color)
    ? color
    : blendForegroundToBackground(color, WHITE_CODES);

  const visionDeficiencyColors: PerceivedColor[] =
    perceivedColors(flattenedColor);

  const tooltip = (
    <div className="huetility-tooltip-message">
      <p>
        Simulations for how users with vision deficiencies might perceive the
        selected color. Hover over the deficiency's name to see how prevelant it
        is and how it affects color vision.
      </p>
      <p>
        Each simulated swatch shows the WCAG contast ratio between the perceived
        color and black or white.
      </p>
    </div>
  );

  return (
    <div className="huetility-vision">
      <Tooltip
        classes="huetility-component-title"
        message={tooltip}
        text={<h2 className="huetility-tooltip-text">Vision Deficiencies</h2>}
        trigger={<p style={{ position: "relative", top: "-.5rem" }}>&#9432;</p>}
      />

      <div className="huetility-vision-swatches-container">
        {visionDeficiencyColors.map((viz) => (
          <div key={viz.name} className="huetility-vision-display">
            <Swatch
              backgroundColor={viz.color.HEX}
              bordered
              classes="huetility-vision-swatch"
            >
              <div
                className={`huetility-vision-text-samples huetility-${viz.name}-vision-swatch`}
              >
                <p
                  style={{ color: "#ffffff" }}
                  className={`huetility-${viz.name}-vision-text`}
                >
                  White {contrast(viz.color, WHITE_CODES)}
                </p>
                <p
                  style={{ color: "#000000" }}
                  className={`huetility-${viz.name}-vision-text`}
                >
                  Black {contrast(viz.color, BLACK_CODES)}
                </p>
              </div>
            </Swatch>

            <Tooltip
              message={
                <div className="huetility-tooltip-message">
                  <p>{viz.description}</p>
                  <p>{viz.prevalence}</p>
                </div>
              }
              trigger={
                <p className="huetility-vision-category">
                  {viz.name.charAt(0).toUpperCase() + viz.name.slice(1)}
                </p>
              }
            />
          </div>
        ))}
      </div>
    </div>
  );
}
