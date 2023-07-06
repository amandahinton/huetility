import { useColor } from "../contexts/ColorContext";

export function ColorPickerRGB() {
  const { color, setRGB } = useColor();
  const { RGB } = color;

  return (
    <div>
      <label htmlFor="rgbaPickerR">R</label>
      <input
        required
        type="text"
        id="rgbaPickerR"
        name="rgbaPickerR"
        value={RGB.r}
        onChange={(e) =>
          setRGB({ r: Number(e.target.value), g: RGB.g, b: RGB.b })
        }
      />

      <label htmlFor="rgbaPickerG">G</label>
      <input
        required
        type="text"
        id="rgbaPickerG"
        name="rgbaPickerG"
        value={RGB.g}
        onChange={(e) =>
          setRGB({ r: RGB.r, g: Number(e.target.value), b: RGB.b })
        }
      />

      <label htmlFor="rgbaPickerB">B</label>
      <input
        required
        type="text"
        id="rgbaPickerB"
        name="rgbaPickerB"
        value={RGB.b}
        onChange={(e) =>
          setRGB({ r: RGB.r, g: RGB.g, b: Number(e.target.value) })
        }
      />
    </div>
  );
}
