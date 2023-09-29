import { Shades, Tints } from "components/index";

export function Scales() {
  return (
    <div className="huetility-scales-container huetility-flattenable-column">
      <Tints />
      <Shades />
    </div>
  );
}
