import { isHexcode } from "../helpers";
import { BLACK_HEXCODE } from "../constants";
import { RGB, RGBA } from "../../types/types";

export const RGBAToHexcode = (rgba: RGBA): string => {
  let aValue = Math.round(rgba.a * 255);

  let red = rgba.r < 9 ? "0" + rgba.r.toString() : rgba.r.toString(16);
  let green = rgba.g < 9 ? "0" + rgba.g.toString() : rgba.g.toString(16);
  let blue = rgba.b < 9 ? "0" + rgba.b.toString() : rgba.b.toString(16);
  let alpha = aValue < 9 ? "0" + aValue.toString() : aValue.toString(16);

  let hexcode = "#" + red + green + blue + alpha;

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
