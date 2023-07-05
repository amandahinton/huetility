import { useColor } from "../contexts/ColorContext";

export function ColorPickerRGB() {
  const { color, setRGB} = useColor();
  const {RGB} = color;

  return (
    <form>
      <div>
        <label htmlFor="colorPicker">Select color</label>
        <input
          required
          type="text"
          id="colorPickerR"
          name="colorPickerR"
          value={RGB.r}
          onChange={(e) =>
            setRGB({r: Number(e.target.value), g: RGB.g, b: RGB.b})
          }
        />
                <input
          required
          type="text"
          id="colorPicker"
          name="colorPicker"
          value={RGB.g}
          onChange={(e) =>
            setRGB({r: RGB.r, g: Number(e.target.value), b: RGB.b})
          }
        />
                <input
          required
          type="text"
          id="colorPicker"
          name="colorPicker"
          value={RGB.b}
          onChange={(e) =>
            setRGB({r: RGB.r, g: RGB.g, b: Number(e.target.value)})
          }
        />
      </div>
    </form>
  );
}
