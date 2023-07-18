import React from "react";
import { useColor } from "../contexts/ColorContext";
import { isHexcode, isPartialHexcode } from "../utils/helpers";

export function ColorPickerHEX() {
  const { color, setHEX } = useColor();
  const { HEX } = color;

  const [hexInput, setHexInput] = React.useState<string>(HEX);
  
  React.useEffect(() => {
    setHexInput(HEX)
  }, [HEX]);


  const handleHexChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    let input = e.target.value;
    if (input[0] !== "#") input = "#" + input;
    if (isPartialHexcode(input)) setHexInput(input);
    if (isHexcode(input)) setHEX(input);
  };

  return (
    <div className="huetility-code-input-container">
      <div className="huetility-code-input">
        <div className="huetility-code-string-input">
          <label htmlFor="hexPicker">Hexcode:</label>
          <input
            required
            className="huetility-hex-input"
            type="text"
            id="hexPicker"
            name="hexPicker"
            value={hexInput}
            onChange={handleHexChange}
          />
        </div>
        {!isHexcode(hexInput) && (
          <small className="huetility-input-error">Enter a valid hexcode</small>
        )}
      </div>
    </div>
  );
}
