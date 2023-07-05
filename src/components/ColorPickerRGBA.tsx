import { useColor } from "../contexts/ColorContext";

export function ColorPickerRGBA() {
  const { color, setRGBA } = useColor();
  const { RGBA } = color;

  return (
    <form>
      <div>
        <label htmlFor="colorPicker">Select color</label>
        <input
          required
          type="text"
          id="colorPickerR"
          name="colorPickerR"
          value={RGBA.r}
          onChange={(e) =>
            setRGBA({ r: Number(e.target.value), g: RGBA.g, b: RGBA.b, a: RGBA.a })
          }
        />
        <input
          required
          type="text"
          id="colorPicker"
          name="colorPicker"
          value={RGBA.g}
          onChange={(e) =>
            setRGBA({ r: RGBA.r, g: Number(e.target.value), b: RGBA.b, a: RGBA.a })
          }
        />
        <input
          required
          type="text"
          id="colorPicker"
          name="colorPicker"
          value={RGBA.b}
          onChange={(e) =>
            setRGBA({ r: RGBA.r, g: RGBA.g, b: Number(e.target.value), a: RGBA.a })
          }
        />
        <input
          required
          type="text"
          id="colorPicker"
          name="colorPicker"
          value={RGBA.a}
          onChange={(e) =>
            setRGBA({ r: RGBA.r, g: RGBA.g, b: RGBA.b, a: Number(e.target.value) })
          }
        />
      </div>
    </form>
  );
}
