import { InputHex } from "components/index";
import { useColor } from "contexts/ColorContext";

export function PickerHEX() {
  const { color, setHEX } = useColor();

  return (
    <InputHex
      onChange={(input: string) => setHEX(input)}
      color={color}
      id="color-picker"
    />
  );
}
