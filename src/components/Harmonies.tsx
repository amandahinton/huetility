import { PaletteSwatches } from "components/index";
import { useColor } from "contexts/ColorContext";
import { Palette } from "types/types";
import { harmonyPalettes } from "utils/helpers";
import "components/Harmonies.css";

export function Harmonies() {
  const { color } = useColor();

  const harmonies: Palette[] = harmonyPalettes(color);

  return (
    <div className="huetility-component-container huetility-outer">
      <h2 className="huetility-component-title">Color Harmonies</h2>
      <div className="huetility-harmonies-container">
        {harmonies.map((harmony) => (
          <PaletteSwatches palette={harmony} key={harmony.name} />
        ))}
      </div>
    </div>
  );
}
