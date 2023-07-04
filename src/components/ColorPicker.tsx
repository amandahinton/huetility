import React from "react";
import { ColorMode } from "../types/enums";

export function ColorPicker() {
  const [colorMode, setColorMode] = React.useState<ColorMode>(ColorMode.HEX);
  const [colorCode, setColorCode] = React.useState<string>("");

  return (
    <form>
      <div>
        <label htmlFor="colorMode">Color mode</label>
        <select
          required
          value={colorMode}
          onChange={(e) =>
            setColorMode(ColorMode[e.target.value as keyof typeof ColorMode])
          }
        >
          {Object.keys(ColorMode).map((mode) => (
            <option key={mode} value={mode}>
              {mode}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="colorPicker">Select color</label>
        <input
          required
          type="color"
          id="colorPicker"
          name="colorPicker"
          value={colorCode}
          onChange={(e) => setColorCode(e.target.value)}
        />
      </div>
    </form>
  );
}
