import { useColor } from "../contexts/ColorContext";
import { perceivedColors } from "../utils/helpers";
import { PerceivedColor } from "../types/types";
import "./Vision.css";

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
            ></div>
            <p className="huetility-vision-category">{viz.name}</p>
            <small>{viz.description}</small>
          </div>
        ))}
      </div>
    </div>
  );
}
