import { ColorCodes } from "types/types";
import { hslToColor } from "utils/translations";

export const randomHue = (): ColorCodes => {
  const newHue = Math.floor(Math.random() * 360);
  const newHSL = {
    h: newHue,
    s: 100,
    l: 50,
  };
  return hslToColor(newHSL);
};
