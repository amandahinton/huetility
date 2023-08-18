import { Palette } from "@/types/types";
import { contrastTextHex } from "utils/helpers";
import "components/PaletteSwatches.css";

export function PaletteSwatches({ palette }: { palette: Palette }) {
  return (
    <div className="huetility-palette-container">
      <div className="huetility-swatch-group">
        {palette.paletteColors.map((color) => (
          <div
            key={color.HEX}
            className={"huetility-palette-swatch huetility-bordered"}
            style={{ backgroundColor: color.HEX }}
          >
            <small style={{ color: contrastTextHex(color) }}>{color.HEX}</small>
          </div>
        ))}
      </div>
      <p className="huetility-palette-name">
        {palette.name.charAt(0).toUpperCase() + palette.name.slice(1)}
      </p>
    </div>
  );
}
