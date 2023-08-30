import React from "react";
import { useColor } from "contexts/ColorContext";
import { RGB } from "types/types";
import { isRGB } from "utils/helpers";
import "components/picker/ColorPicker.css";

export function ColorPickerRGB() {
  const { color, setRGB } = useColor();
  const { RGB } = color;

  const [RGBInput, setRGBInput] = React.useState<RGB>(RGB);

  React.useEffect(() => {
    setRGBInput(RGB);
  }, [RGB]);

  const handleRGBChange = React.useCallback(
    (channel: keyof RGB, e: React.ChangeEvent<HTMLInputElement>) => {
      e.preventDefault();

      const updatedChannel: Partial<RGB> = {};
      updatedChannel[channel] = Number(e.target.value);
      const newRGB = { ...RGBInput, ...updatedChannel };
      setRGBInput(newRGB);

      if (isRGB(newRGB)) setRGB(newRGB);
    },
    [RGBInput, setRGB]
  );

  return (
    <div className="huetility-code-input-container">
      <div className="huetility-code-input">
        <div className="huetility-code-input-group">
          <div className="huetility-code-number-input">
            <label htmlFor="rgb-picker-r">R:</label>
            <input
              required
              className="huetility-number-input"
              type="number"
              id="rgb-picker-r"
              name="rgbPickerR"
              min={0}
              max={255}
              value={RGBInput.r}
              onChange={(e) => handleRGBChange("r", e)}
            />
          </div>
          <input
            type="range"
            min="0"
            max="255"
            step="1"
            id="rgb-slider-r"
            name="rgbSliderR"
            value={RGBInput.r}
            onChange={(e) => handleRGBChange("r", e)}
          />
        </div>
        {(RGBInput.r < 0 || RGBInput.r > 255) && (
          <small className="huetility-input-error">Enter a number 0-255</small>
        )}
      </div>

      <div className="huetility-code-input">
        <div className="huetility-code-input-group">
          <div className="huetility-code-number-input">
            <label htmlFor="rgb-picker-g">G:</label>
            <input
              required
              className="huetility-number-input"
              type="number"
              id="rgb-picker-g"
              name="rgbPickerG"
              min={0}
              max={255}
              value={RGBInput.g}
              onChange={(e) => handleRGBChange("g", e)}
            />
          </div>
          <input
            type="range"
            min="0"
            max="255"
            step="1"
            id="rgb-slider-g"
            name="rgbSliderG"
            value={RGBInput.g}
            onChange={(e) => handleRGBChange("g", e)}
          />
        </div>
        {(RGBInput.g < 0 || RGBInput.g > 255) && (
          <small className="huetility-input-error">Enter a number 0-255</small>
        )}
      </div>

      <div className="huetility-code-input">
        <div className="huetility-code-input-group">
          <div className="huetility-code-number-input">
            <label htmlFor="rgb-picker-b">B:</label>
            <input
              required
              className="huetility-number-input"
              type="number"
              id="rgb-picker-b"
              name="rgbPickerB"
              min={0}
              max={255}
              value={RGBInput.b}
              onChange={(e) => handleRGBChange("b", e)}
            />
          </div>
          <input
            type="range"
            min="0"
            max="255"
            step="1"
            id="rgb-slider-b"
            name="rgbSliderB"
            value={RGBInput.b}
            onChange={(e) => handleRGBChange("b", e)}
          />
        </div>
        {(RGBInput.b < 0 || RGBInput.b > 255) && (
          <small className="huetility-input-error">Enter a number 0-255</small>
        )}
      </div>
    </div>
  );
}
