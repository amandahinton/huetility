import React from "react";
import { useColor } from "../contexts/ColorContext";
import { isHSL } from "../utils/helpers";
import { HSL } from "../types/types";

export function ColorPickerHSL() {
  const { color, setHSL } = useColor();
  const { HSL } = color;

  const [HSLInput, setHSLInput] = React.useState<HSL>(HSL);

  React.useEffect(() => {
    setHSLInput(HSL);
  }, [HSL]);

  const handleHSLChange = React.useCallback(
    (channel: keyof HSL, e: React.ChangeEvent<HTMLInputElement>) => {
      e.preventDefault();

      const updatedChannel: Partial<HSL> = {};
      updatedChannel[channel] = Number(e.target.value);
      const newHSL = { ...HSLInput, ...updatedChannel };
      setHSLInput(newHSL);

      if (isHSL(newHSL)) setHSL(newHSL);
    },
    [HSLInput, setHSL]
  );

  return (
    <div className="huetility-code-input-container">
      <div className="huetility-code-input">
        <div className="huetility-code-input-group">
          <div className="huetility-code-number-input">
            <label htmlFor="hsl-picker-h">H:</label>
            <input
              required
              className="huetility-number-input"
              type="number"
              id="hsl-picker-h"
              name="hslPickerH"
              min={0}
              max={360}
              value={HSLInput.h}
              onChange={(e) => handleHSLChange("h", e)}
            />
          </div>
          <input
            type="range"
            min="0"
            max="360"
            step="1"
            id="hsl-slider-h"
            name="hslSliderH"
            value={HSLInput.h}
            onChange={(e) => handleHSLChange("h", e)}
          />
        </div>
        {(HSLInput.h < 0 || HSLInput.h > 360) && (
          <small className="huetility-input-error">Enter an angle 0-360</small>
        )}
      </div>

      <div className="huetility-code-input">
        <div className="huetility-code-input-group">
          <div className="huetility-code-number-input">
            <label htmlFor="hsl-picker-s">S:</label>
            <input
              required
              className="huetility-number-input"
              type="number"
              id="hsl-picker-s"
              name="hslPickerS"
              min={0}
              max={100}
              value={HSLInput.s}
              onChange={(e) => handleHSLChange("s", e)}
            />
          </div>
          <input
            type="range"
            min="0"
            max="100"
            step="1"
            id="hsl-slider-s"
            name="hslSliderS"
            value={HSLInput.s}
            onChange={(e) => handleHSLChange("s", e)}
          />
        </div>
        {(HSLInput.s < 0 || HSLInput.s > 100) && (
          <small className="huetility-input-error">Enter a percent 0-100</small>
        )}
      </div>

      <div className="huetility-code-input">
        <div className="huetility-code-input-group">
          <div className="huetility-code-number-input">
            <label htmlFor="hsl-picker-l">L:</label>
            <input
              required
              className="huetility-number-input"
              type="number"
              id="hsl-picker-l"
              name="hslPickerL"
              min={0}
              max={100}
              value={HSLInput.l}
              onChange={(e) => handleHSLChange("l", e)}
            />
          </div>
          <input
            type="range"
            min="0"
            max="100"
            step="1"
            id="hsl-slider-l"
            name="hslSliderL"
            value={HSLInput.l}
            onChange={(e) => handleHSLChange("l", e)}
          />
        </div>
        {(HSLInput.l < 0 || HSLInput.l > 100) && (
          <small className="huetility-input-error">Enter a percent 0-100</small>
        )}
      </div>
    </div>
  );
}
