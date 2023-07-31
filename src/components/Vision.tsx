import { useColor } from "../contexts/ColorContext";
import { contrast, perceivedColors } from "../utils/helpers";
import { PerceivedColor } from "../types/types";
import "./Vision.css";
import { BLACK_CODES, WHITE_CODES } from "../utils/constants";

export function Vision() {
  const { color } = useColor();

  const perceived: PerceivedColor[] = perceivedColors(color);

  return (
    <div className="huetility-component-container huetility-outer">
      <h2 className="huetility-component-title">Perceived Colors</h2>
      <div className="huetility-vision-container">
        {perceived.map((viz) => (
          <div key={viz.name} className="huetility-vision-display">
            <div
              className="huetility-vision-swatch huetility-bordered"
              style={{ backgroundColor: viz.color.HEX }}
            >
              <div className="huetility-vision-text-samples">
                <p
                  style={{ color: "#ffffff" }}
                  className={
                    viz.name === "Diminished" ? "huetility-blurred-text" : ""
                  }
                >
                  White {contrast(viz.color, WHITE_CODES)}
                </p>
                <p
                  style={{ color: "#000000" }}
                  className={
                    viz.name === "Diminished" ? "huetility-blurred-text" : ""
                  }
                >
                  Black {contrast(viz.color, BLACK_CODES)}
                </p>
              </div>
            </div>
            <p className="huetility-vision-category">{viz.name}</p>
            <small>{viz.description}</small>
          </div>
        ))}
      </div>
    </div>
  );
}
