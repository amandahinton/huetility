import { PaletteSwatches, Tooltip } from "components/index";
import { useColor } from "contexts/ColorContext";
import { Palette } from "types/types";
import { harmonyPalettes } from "utils/helpers";
import "components/harmonies/Harmonies.css";

export function Harmonies() {
  const { color } = useColor();

  // don't show harmonies for black or white (or RGB values to low to register luminance)
  if (color.HSL.l <= 0 || color.HSL.l >= 100 || color.HSL.s == 0) return <></>;

  const harmonies: Palette[] = harmonyPalettes(color);

  const tooltip = (
    <div className="huetility-tooltip-content-left-align">
      <p>
        Harmonious palettes are created through geometric relationships on the
        color wheel. Hover over a palette name to see how the colors are
        determined.
      </p>
      <p>
        Click any of the swatches to copy the value (formatted in the color mode
        you have selected in the picker) to your clipboard for use in CSS
        declarations.
      </p>
    </div>
  );

  return (
    <div className="huetility-component-container huetility-outer">
      <Tooltip hasIcon message={tooltip}>
        <h2 className="huetility-component-title">Color Harmonies</h2>
      </Tooltip>

      <div className="huetility-harmonies-container">
        {harmonies.map((harmony) => (
          <PaletteSwatches palette={harmony} key={harmony.name} />
        ))}
      </div>
    </div>
  );
}
