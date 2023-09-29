import React from "react";
import { useColor } from "contexts/ColorContext";
import { HSLA } from "types/types";
import { isHSLA } from "utils/helpers";
import "components/picker/ColorPicker.css";

export function PickerHSLA() {
  const { color, setHSLA } = useColor();
  const { HSLA } = color;

  const [HSLAInput, setHSLAInput] = React.useState<HSLA>(HSLA);

  React.useEffect(() => {
    setHSLAInput(HSLA);
  }, [HSLA]);

  const handleHSLAChange = React.useCallback(
    (channel: keyof HSLA, e: React.ChangeEvent<HTMLInputElement>) => {
      e.preventDefault();

      const updatedChannel: Partial<HSLA> = {};
      updatedChannel[channel] = Number(e.target.value);
      const newHSLA = { ...HSLAInput, ...updatedChannel };
      setHSLAInput(newHSLA);

      if (isHSLA(newHSLA)) setHSLA(newHSLA);
    },
    [HSLAInput, setHSLA]
  );

  return (
    <div className="huetility-picker-input-container">
      <div className="huetility-code-input">
        <div className="huetility-code-input-group">
          <div className="huetility-code-number-input">
            <label htmlFor="hsla-picker-h">H:</label>
            <input
              required
              className="huetility-number-input"
              type="number"
              id="hsla-picker-h"
              name="hslaPickerH"
              min={0}
              max={360}
              value={HSLAInput.h}
              onChange={(e) => handleHSLAChange("h", e)}
            />
          </div>
          <input
            className="huetility-slider-input"
            type="range"
            min="0"
            max="360"
            step="1"
            id="hsla-slider-h"
            name="hslaSliderH"
            value={HSLAInput.h}
            onChange={(e) => handleHSLAChange("h", e)}
          />
        </div>
        {(HSLAInput.h < 0 || HSLAInput.h > 360) && (
          <small className="huetility-input-error">Enter an angle 0-360</small>
        )}
      </div>

      <div className="huetility-code-input">
        <div className="huetility-code-input-group">
          <div className="huetility-code-number-input">
            <label htmlFor="hsla-picker-s">S:</label>
            <input
              required
              className="huetility-number-input"
              type="number"
              id="hsla-picker-s"
              name="hslaPickerS"
              min={0}
              max={100}
              value={HSLAInput.s}
              onChange={(e) => handleHSLAChange("s", e)}
            />
          </div>
          <input
            className="huetility-slider-input"
            type="range"
            min="0"
            max="100"
            step="1"
            id="hsla-slider-s"
            name="hslaSliderS"
            value={HSLAInput.s}
            onChange={(e) => handleHSLAChange("s", e)}
          />
        </div>
        {(HSLAInput.s < 0 || HSLAInput.s > 100) && (
          <small className="huetility-input-error">Enter a percent 0-100</small>
        )}
      </div>

      <div className="huetility-code-input">
        <div className="huetility-code-input-group">
          <div className="huetility-code-number-input">
            <label htmlFor="hsla-picker-l">L:</label>
            <input
              required
              className="huetility-number-input"
              type="number"
              id="hsla-picker-l"
              name="hslaPickerL"
              min={0}
              max={100}
              value={HSLAInput.l}
              onChange={(e) => handleHSLAChange("l", e)}
            />
          </div>
          <input
            className="huetility-slider-input"
            type="range"
            min="0"
            max="100"
            step="1"
            id="hsla-slider-l"
            name="hslaSliderL"
            value={HSLAInput.l}
            onChange={(e) => handleHSLAChange("l", e)}
          />
        </div>
        {(HSLAInput.l < 0 || HSLAInput.l > 100) && (
          <small className="huetility-input-error">Enter a percent 0-100</small>
        )}
      </div>

      <div className="huetility-code-input">
        <div className="huetility-code-input-group">
          <div className="huetility-code-number-input">
            <label htmlFor="hsla-picker-a">A:</label>
            <input
              required
              className="huetility-number-input"
              type="number"
              id="hsla-picker-a"
              name="hslaPickerA"
              min="0"
              max="1"
              step="0.1"
              value={HSLAInput.a}
              onChange={(e) => handleHSLAChange("a", e)}
            />
          </div>
          <input
            className="huetility-slider-input"
            type="range"
            min="0"
            max="1"
            step="0.1"
            id="hsla-slider-a"
            name="hslaSliderA"
            value={HSLAInput.a}
            onChange={(e) => handleHSLAChange("a", e)}
          />
        </div>
        {(HSLAInput.a < 0 || HSLAInput.a > 1) && (
          <small className="huetility-input-error">
            Enter a decimal number 0-1
          </small>
        )}
      </div>
    </div>
  );
}
