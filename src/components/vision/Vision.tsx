import { Tooltip } from "components/index";
import { useColor } from "contexts/ColorContext";
import { PerceivedColor } from "types/types";
import { contrast, perceivedColors } from "utils/helpers";
import { BLACK_CODES, WHITE_CODES } from "utils/constants";
import "components/vision/Vision.css";

export function Vision() {
  const { color } = useColor();

  const visionDeficiencyColors: PerceivedColor[] = perceivedColors(color);

  const tooltip = (
    <div className="huetility-tooltip-content-left-align">
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
    <div className="huetility-component-container huetility-outer">
      <Tooltip hasIcon message={tooltip}>
        <h2 className="huetility-component-title">Vision Deficiencies</h2>
      </Tooltip>

      <div className="huetility-vision-container">
        {visionDeficiencyColors.map((viz) => (
          <div key={viz.name} className="huetility-vision-display">
            <div
              className={`huetility-vision-swatch huetility-bordered huetility-${viz.name}-vision-swatch`}
              style={{ backgroundColor: viz.color.HEX }}
            >
              <div className="huetility-vision-text-samples">
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
            </div>

            <Tooltip
              hoverChildren
              message={
                <div className="huetility-tooltip-content-left-align">
                  <p>{viz.description}</p>
                  <p>{viz.prevalence}</p>
                </div>
              }
            >
              <p className="huetility-vision-category">
                {viz.name.charAt(0).toUpperCase() + viz.name.slice(1)}
              </p>
            </Tooltip>
          </div>
        ))}
      </div>
    </div>
  );
}
