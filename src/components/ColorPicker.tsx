import { useColor } from "../contexts/ColorContext";
import {
  ColorPickerHEX,
  ColorPickerHSL,
  ColorPickerHSLA,
  ColorPickerRGB,
  ColorPickerRGBA,
  RGBColorWheel,
  Swatch,
} from "../components";
import { ColorMode } from "../types/enums";
import "./ColorPicker.css";

const pickerComponents = {
  HEX: ColorPickerHEX,
  HSL: ColorPickerHSL,
  HSLA: ColorPickerHSLA,
  RGB: ColorPickerRGB,
  RGBA: ColorPickerRGBA,
};

export function ColorPicker() {
  const { color, setMode } = useColor();
  const { colorMode } = color;

  const PickerInput = pickerComponents[colorMode];

  return (
    <div className="huetility-component-container huetility-outer">
      <Swatch />
      <h2 className="huetility-component-title huetility-space-above">
        Color Picker
      </h2>
      <select
        required
        className="huetility-mode-select"
        id="colorMode"
        value={colorMode}
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

      <div className="huetility-color-selection-container">
        <RGBColorWheel />
        <PickerInput />
      </div>
    </div>
  );
}
