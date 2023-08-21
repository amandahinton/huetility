import { Palette } from "@/types/types";
import { contrastTextHex } from "utils/helpers";
import "components/PaletteSwatches.css";

export function PaletteSwatches({ palette }: { palette: Palette }) {
  return (
    <div className="huetility-palette-container">
      <div className="huetility-swatch-group huetility-bordered">
        {palette.paletteColors.map((color) => (
          <div
            key={color.HEX}
            className={"huetility-palette-swatch"}
            style={{ backgroundColor: color.HEX }}
          >
            <small style={{ color: contrastTextHex(color) }}>{color.HEX}</small>
          </div>
        ))}
      </div>
      <p className="huetility-palette-name">
        {palette.name
          .split(" ")
          .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
          .join(" ")}
      </p>
    </div>
  );
}
