import { useColor } from "../contexts/ColorContext";
import { ColorMode } from "../types/enums";

export function ColorPickerHEX() {
  const { color, setHEX } = useColor();

  return (
    <form>
      <div>
        <label htmlFor="colorPicker">Select color</label>
        <input
          required
          type="text"
          id="colorPicker"
          name="colorPicker"
          value={color[ColorMode.HEX]}
          onChange={(e) =>
            setHEX(e.target.value)
          }
        />
      </div>
    </form>
  );
}
