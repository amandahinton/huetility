import { useColor } from "../contexts/ColorContext";
import { InputHex } from "../components";

export function ColorPickerHEX() {
  const { color, setHEX } = useColor();

  return <InputHex onChange={(input: string) => setHEX(input)} color={color} />;
}
