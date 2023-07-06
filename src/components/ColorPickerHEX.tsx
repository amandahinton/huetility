import React from "react";
import { useColor } from "../contexts/ColorContext";
import { isHexcode } from "../utils/helpers";

export function ColorPickerHEX() {
  const { color, setHEX } = useColor();

  const [hexInput, setHexInput] = React.useState<string>(color.HEX);

  const handleHexChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setHexInput(e.target.value);
    if (isHexcode(e.target.value)) setHEX(e.target.value);
  };

  return (
    <div>
      <label htmlFor="colorPicker">Select color</label>
      <input
        required
        type="text"
        id="colorPicker"
        name="colorPicker"
        value={hexInput}
        onChange={handleHexChange}
      />
    </div>
  );
}
