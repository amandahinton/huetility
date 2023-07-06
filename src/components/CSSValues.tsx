import { useColor } from "../contexts/ColorContext";
import { cssColorValue } from "../utils/helpers";
import { ColorMode } from "../types/enums";

export function CSSValues() {
  const { color } = useColor();

  return (
    <div>
      <h3>CSS Values</h3>
      {Object.keys(ColorMode).map((mode) => {
        const colorMode = mode as keyof typeof ColorMode;
        return (
          <p key={mode}>
            {cssColorValue(ColorMode[colorMode], color[colorMode])}
          </p>
        );
      })}
    </div>
  );
}
