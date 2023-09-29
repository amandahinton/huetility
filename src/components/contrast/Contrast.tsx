import { ContrastChecker, Tooltip } from "components/index";
import { BLACK_CODES, WHITE_CODES } from "utils/constants";
import "components/contrast/Contrast.css";

export function Contrast() {
  const tooltip = (
    <div className="huetility-tooltip-content-left-align">
      <p>
        To meet WCAG accessibility standards, text and interactive elements
        should have a contrast ratio of at least 4.5:1.
      </p>
      <ul>
        <li>21 is maximum contrast (ex: black on white)</li>
        <li>
          4.5 or above is good for all text sizes, prefer 14pt text and above
        </li>
        <li>
          3 to 4.5 is ok for large text, at least 18pt regular weight or 14pt
          bold type
        </li>
        <li>1 is no contrast (ex: black on black)</li>
      </ul>
    </div>
  );
  return (
    <div className="huetility-contrast">
      <Tooltip hasIcon message={tooltip}>
        <h2 className="huetility-component-title">Color Contrast</h2>
      </Tooltip>
      <div className="huetility-contrast-checkers-container">
        <ContrastChecker contrastColor={WHITE_CODES} id="contrast-checker-1" />
        <ContrastChecker contrastColor={BLACK_CODES} id="contrast-checker-2" />
      </div>
    </div>
  );
}
