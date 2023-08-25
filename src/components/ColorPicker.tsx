import {
  ColorPickerHEX,
  ColorPickerHSL,
  ColorPickerHSLA,
  ColorPickerRGB,
  ColorPickerRGBA,
  RGBColorWheel,
  Swatch,
  Tooltip,
} from "components/index";
import { useColor } from "contexts/ColorContext";
import { ColorMode } from "types/enums";
import "components/ColorPicker.css";

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

  const tooltip = (
    <div className="huetility-tooltip-content-left-align">
      <p>
        Select a color by entering values through the inputs or sliders, or by
        clicking a color on the wheel. On the wheel, shades are along the
        exterior, tints on the interior and full-saturation hues in the central
        band.
      </p>
      <ul>
        <li>Hexcode - 3, 6, or 8 character hexidecimal notation.</li>
        <li>
          HSL - Hue as 0 to 360 angle on the color wheel, saturation as 0 (gray)
          to 100 (full color), and luminance as 0 (black) to 100 (white).
        </li>
        <li>
          HSLA - HSL with an alpha channel of 0 (opaque) to 1 (transparent).
        </li>
        <li>RGB - Red, green, and blue values between 0 and 255.</li>
        <li>
          RGBA - RGB with an alpha channel of 0 (opaque) to 1 (transparent).
        </li>
      </ul>
      <p>
        Selecting a new color will recalculate all of the information below.
      </p>
    </div>
  );

  return (
    <div className="huetility-component-container huetility-outer">
      <Swatch />
      <div className="huetility-space-above">
        <Tooltip hasIcon message={tooltip}>
          <h2 className="huetility-component-title">Color Picker</h2>
        </Tooltip>
      </div>

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
