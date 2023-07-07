import { useColor } from "../contexts/ColorContext";

export function ColorPickerRGBA() {
  const { color, setRGBA } = useColor();
  const { RGBA } = color;

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
          value={RGBA.r}
          onChange={(e) =>
            setRGBA({
              r: Number(e.target.value),
              g: RGBA.g,
              b: RGBA.b,
              a: RGBA.a,
            })
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
          value={RGBA.g}
          onChange={(e) =>
            setRGBA({
              r: RGBA.r,
              g: Number(e.target.value),
              b: RGBA.b,
              a: RGBA.a,
            })
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
          value={RGBA.b}
          onChange={(e) =>
            setRGBA({
              r: RGBA.r,
              g: RGBA.g,
              b: Number(e.target.value),
              a: RGBA.a,
            })
          }
        />
      </div>

      <div className="huetility-code-input">
        <label htmlFor="rgbaPickerA">A:</label>
        <input
          required
          className="huetility-number-input"
          type="text"
          id="rgbaPickerA"
          name="rgbaPickerA"
          value={RGBA.a}
          onChange={(e) =>
            setRGBA({
              r: RGBA.r,
              g: RGBA.g,
              b: RGBA.b,
              a: Number(e.target.value),
            })
          }
        />
      </div>
    </div>
  );
}
