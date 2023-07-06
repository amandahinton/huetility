import { useColor } from "../contexts/ColorContext";
import { ColorPickerHEX, ColorPickerRGB, ColorPickerRGBA } from "../components";
import { ColorMode } from "../types/enums";

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
    <>
      <h3>Select Color</h3>
      <form>
        <div>
          <label htmlFor="colorMode">Color mode</label>
          <select
            required
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
        </div>
      </form>
      <PickerInput />
    </>
  );
}
