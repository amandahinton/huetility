import React from "react";
import { ColorCodes } from "types/types";
import { isHexcode, isPartialHexcode } from "utils/helpers";
import "components/picker/ColorPicker.css";

type Props = {
  onChange: (hexcode: string) => void;
  color: ColorCodes;
};

export function InputHex({ onChange, color }: Props) {
  const { HEX } = color;

  const [hexInput, setHexInput] = React.useState<string>(HEX);

  React.useEffect(() => {
    setHexInput(HEX);
  }, [HEX]);

  const handleHexChange = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      e.preventDefault();

      let input = e.target.value;
      if (input[0] !== "#") input = "#" + input;
      if (isPartialHexcode(input)) setHexInput(input);

      if (isHexcode(input)) onChange(input);
    },
    [onChange]
  );

  return (
    <div className="huetility-code-input-container">
      <div className="huetility-code-input">
        <div className="huetility-code-string-input">
          <label htmlFor="hexPicker">Hexcode:</label>
          <input
            required
            className="huetility-string-input"
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
