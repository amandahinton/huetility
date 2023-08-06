import { useColor } from "../contexts/ColorContext";
import { contrast, perceivedColors } from "../utils/helpers";
import { BLACK_CODES, WHITE_CODES } from "../utils/constants";
import { PerceivedColor } from "../types/types";
import "./Vision.css";

export function Vision() {
  const { color } = useColor();

  const visionDeficiencyColors: PerceivedColor[] = perceivedColors(color);

  return (
    <div className="huetility-component-container huetility-outer">
      <h2 className="huetility-component-title">Vision Deficiencies</h2>
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
            <p className="huetility-vision-category">
              {viz.name.charAt(0).toUpperCase() + viz.name.slice(1)}
            </p>
            <small>{viz.description}</small>
            {viz.prevalence && <small>{viz.prevalence}</small>}
          </div>
        ))}
      </div>
    </div>
  );
}
