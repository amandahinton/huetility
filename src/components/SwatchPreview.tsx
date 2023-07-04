import { contrastText } from "../utils/colorCalculations";

type Props = {
  colorCode: string;
  colorMode: string;
};

export function SwatchPreview({ colorCode, colorMode }: Props) {
  const labelColor = contrastText(colorCode);

  return (
    <div style={{ backgroundColor: colorCode }}>
      <p
        style={{ color: labelColor }}
      >{`${colorMode}: ${colorCode}`}</p>
    </div>
  );
}