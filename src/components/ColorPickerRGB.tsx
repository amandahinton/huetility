import { useColor } from "../contexts/ColorContext";

export function ColorPickerRGB() {
  const { color, setRGB } = useColor();
  const { RGB } = color;

  return (
    <div className="huetility-code-input-container">
      <div className="huetility-code-input">
        <label htmlFor="rgbaPickerR">R:</label>
        <input
          required
          className="huetility-number-input"
          type="text"
          id="rgbaPickerR"
          name="rgbaPickerR"
          value={RGB.r}
          onChange={(e) =>
            setRGB({ r: Number(e.target.value), g: RGB.g, b: RGB.b })
          }
        />
      </div>

      <div className="huetility-code-input">
        <label htmlFor="rgbaPickerG">G:</label>
        <input
          required
          className="huetility-number-input"
          type="text"
          id="rgbaPickerG"
          name="rgbaPickerG"
          value={RGB.g}
          onChange={(e) =>
            setRGB({ r: RGB.r, g: Number(e.target.value), b: RGB.b })
          }
        />
      </div>

      <div className="huetility-code-input">
        <label htmlFor="rgbaPickerB">B:</label>
        <input
          required
          className="huetility-number-input"
          type="text"
          id="rgbaPickerB"
          name="rgbaPickerB"
          value={RGB.b}
          onChange={(e) =>
            setRGB({ r: RGB.r, g: RGB.g, b: Number(e.target.value) })
          }
        />
      </div>
    </div>
  );
}
