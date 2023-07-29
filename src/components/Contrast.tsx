import { ContrastChecker } from "../components";
import { BLACK_CODES, WHITE_CODES } from "../utils/constants";
import "./Contrast.css";

export function Contrast() {
  return (
    <div className="huetility-component-container">
      <h2 className="huetility-component-title">Color Contrast</h2>
      <div className="huetility-contrast-input-container">
        <ContrastChecker contrastColor={WHITE_CODES} />
        <ContrastChecker contrastColor={BLACK_CODES} />
      </div>
    </div>
  );
}
