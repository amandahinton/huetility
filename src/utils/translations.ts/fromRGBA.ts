import { isHexcode } from "../helpers";
import { BLACK_HEXCODE } from "../constants";
import { RGB, RGBA } from "../../types/types";

// todo rgba.a needs to take a decimal between 0 and 1
export const RGBAToHexcode = (rgba: RGBA): string => {
  let hexcode =
    "#" +
    rgba.r.toString(16) +
    rgba.g.toString(16) +
    rgba.b.toString(16) +
    rgba.a.toString(16);

  if (isHexcode(hexcode)) {
    return hexcode;
  } else {
    console.error("Error: improper rgba input, defaulting to black hexcode");
    return BLACK_HEXCODE;
  }
};

export const RGBAToRGB = (rgba: RGBA): RGB => {
  return { r: rgba.r, g: rgba.g, b: rgba.b };
};
