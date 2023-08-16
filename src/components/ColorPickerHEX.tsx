import { InputHex } from "components/index";
import { useColor } from "contexts/ColorContext";

export function ColorPickerHEX() {
  const { color, setHEX } = useColor();

  return <InputHex onChange={(input: string) => setHEX(input)} color={color} />;
}
