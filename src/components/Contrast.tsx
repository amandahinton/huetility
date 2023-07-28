import { useColor } from "../contexts/ColorContext";
import { ContrastChecker } from "../components";
import { BLACK_CODES, WHITE_CODES } from "../utils/constants";
import "./Contrast.css";

export function Contrast() {
  const { color } = useColor();

  return (
    <div className="huetility-component-container">
      <h2 className="huetility-component-title">Color Contrast</h2>
      {color.RGBA.a < 1 && (
        <p>
          Selected color {color.HEX} has transparency, which affects
          contrast
        </p>
      )}
      <div className="huetility-contrast-input-container">
        <ContrastChecker contrastColor={WHITE_CODES} />
        <ContrastChecker contrastColor={BLACK_CODES} />
      </div>
    </div>
  );
}
