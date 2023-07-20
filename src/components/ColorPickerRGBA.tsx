import React from "react";
import { useColor } from "../contexts/ColorContext";
import { isRGBA } from "../utils/helpers";
import { RGBA } from "../types/types";

export function ColorPickerRGBA() {
  const { color, setRGBA } = useColor();
  const { RGBA } = color;

  const [RGBAInput, setRGBAInput] = React.useState<RGBA>(RGBA);

  React.useEffect(() => {
    setRGBAInput(RGBA);
  }, [RGBA]);

  const handleRGBAChange = React.useCallback(
    (channel: keyof RGBA, e: React.ChangeEvent<HTMLInputElement>) => {
      e.preventDefault();

      const updatedChannel: Partial<RGBA> = {};
      updatedChannel[channel] = Number(e.target.value);
      const newRGBA = { ...RGBAInput, ...updatedChannel };
      setRGBAInput(newRGBA);

      if (isRGBA(newRGBA)) setRGBA(newRGBA);
    },
    [setRGBA]
  );

  return (
    <div className="huetility-code-input-container">
      <div className="huetility-code-input">
        <div className="huetility-code-input-group">
          <div className="huetility-code-number-input">
            <label htmlFor="rgba-picker-r">R:</label>
            <input
              required
              className="huetility-number-input"
              type="number"
              id="rgba-picker-r"
              name="rgbaPickerR"
              min={0}
              max={255}
              value={RGBAInput.r}
              onChange={(e) => handleRGBAChange("r", e)}
            />
          </div>
          <input
            type="range"
            min="0"
            max="255"
            step="1"
            id="rgba-slider-r"
            name="rgbaSliderR"
            value={RGBAInput.r}
            onChange={(e) => handleRGBAChange("r", e)}
          />
        </div>
        {(RGBAInput.r < 0 || RGBAInput.r > 255) && (
          <small className="huetility-input-error">Enter a number 0-255</small>
        )}
      </div>

      <div className="huetility-code-input">
        <div className="huetility-code-input-group">
          <div className="huetility-code-number-input">
            <label htmlFor="rgba-picker-g">G:</label>
            <input
              required
              className="huetility-number-input"
              type="number"
              id="rgba-picker-g"
              name="rgbaPickerG"
              min={0}
              max={255}
              value={RGBAInput.g}
              onChange={(e) => handleRGBAChange("g", e)}
            />
          </div>
          <input
            type="range"
            min="0"
            max="255"
            step="1"
            id="rgba-slider-g"
            name="rgbaSliderG"
            value={RGBAInput.g}
            onChange={(e) => handleRGBAChange("g", e)}
          />
        </div>
        {(RGBAInput.g < 0 || RGBAInput.g > 255) && (
          <small className="huetility-input-error">Enter a number 0-255</small>
        )}
      </div>

      <div className="huetility-code-input">
        <div className="huetility-code-input-group">
          <div className="huetility-code-number-input">
            <label htmlFor="rgba-picker-b">B:</label>
            <input
              required
              className="huetility-number-input"
              type="number"
              id="rgba-picker-b"
              name="rgbaPickerB"
              min={0}
              max={255}
              value={RGBAInput.b}
              onChange={(e) => handleRGBAChange("b", e)}
            />
          </div>
          <input
            type="range"
            min="0"
            max="255"
            step="1"
            id="rgba-slider-b"
            name="rgbaSliderB"
            value={RGBAInput.b}
            onChange={(e) => handleRGBAChange("b", e)}
          />
        </div>
        {(RGBAInput.b < 0 || RGBAInput.b > 255) && (
          <small className="huetility-input-error">Enter a number 0-255</small>
        )}
      </div>

      <div className="huetility-code-input">
        <div className="huetility-code-input-group">
          <div className="huetility-code-number-input">
            <label htmlFor="rgba-picker-a">A:</label>
            <input
              required
              className="huetility-number-input"
              type="number"
              id="rgba-picker-a"
              name="rgbaPickerA"
              min="0"
              max="1"
              step="0.1"
              value={RGBAInput.a}
              onChange={(e) => handleRGBAChange("a", e)}
            />
          </div>
          <input
            type="range"
            min="0"
            max="1"
            step="0.1"
            id="rgba-slider-a"
            name="rgbaSliderA"
            value={RGBAInput.a}
            onChange={(e) => handleRGBAChange("a", e)}
          />
        </div>
        {(RGBAInput.a < 0 || RGBAInput.a > 1) && (
          <small className="huetility-input-error">
            Enter a decimal number 0-1
          </small>
        )}
      </div>
    </div>
  );
}
