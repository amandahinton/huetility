import { Tooltip } from "components/index";
import { useColor } from "contexts/ColorContext";
import { Palette } from "@/types/types";
import { contrastTextHex, cssColorValue } from "utils/helpers";
import "components/PaletteSwatches.css";

export function PaletteSwatches({ palette }: { palette: Palette }) {
  const { color } = useColor();
  const { colorMode } = color;

  return (
    <div className="huetility-palette-container">
      <div className="huetility-swatch-group huetility-bordered">
        {palette.paletteColors.map((swatch) => {
          const cssSwatch = cssColorValue(colorMode, swatch);
          return (
            <button
              key={swatch.HEX}
              onClick={() => navigator.clipboard.writeText(cssSwatch)}
              className={"huetility-palette-swatch"}
              title={`Click to copy: ${cssSwatch}`}
              aria-label={`Click to copy: ${cssSwatch}`}
              style={{ backgroundColor: swatch.HEX }}
            ></button>
          );
        })}
      </div>

      <Tooltip hoverChildren message={palette.description}>
        <p className="huetility-palette-name">
          {palette.name
            .split(" ")
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(" ")}
        </p>
      </Tooltip>
    </div>
  );
}
