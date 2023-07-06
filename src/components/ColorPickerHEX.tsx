import { useColor } from "../contexts/ColorContext";
import { ColorMode } from "../types/enums";

export function ColorPickerHEX() {
  const { color, setHEX } = useColor();

  //todo make onChange a handleChange
  // that stores the value in state here
  // checks isHexcode
  // if isHexcode is true, then setHex() with it

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
          onChange={(e) => setHEX(e.target.value)}
        />
      </div>
    </form>
  );
}
