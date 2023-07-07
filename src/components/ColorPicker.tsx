import { useColor } from "../contexts/ColorContext";
import { ColorPickerHEX, ColorPickerRGB, ColorPickerRGBA } from "../components";
import { ColorMode } from "../types/enums";
import "./ColorPicker.css";

const pickerComponents = {
  HEX: ColorPickerHEX,
  RGB: ColorPickerRGB,
  RGBA: ColorPickerRGBA,
};

export function ColorPicker() {
  const { color, setMode } = useColor();
  const { colorMode } = color;

  const PickerInput = pickerComponents[colorMode];

  return (
    <div className="huetility-picker-container">
      <select
        required
        className="huetility-mode-select"
        id="colorMode"
        value={color.colorMode}
        onChange={(e) =>
          setMode(ColorMode[e.target.value as keyof typeof ColorMode])
        }
      >
        {Object.keys(ColorMode).map((mode) => (
          <option key={mode} value={mode}>
            {mode}
          </option>
        ))}
      </select>

      <PickerInput />
    </div>
  );
}
