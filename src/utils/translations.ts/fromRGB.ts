import { isHexcode } from "../helpers";
import { BLACK_HEXCODE } from "../constants";
import { RGB, RGBA } from "../../types/types";

export const RGBToHexcode = (rgb: RGB): string => {
  let red = rgb.r < 9 ? "0" + rgb.r.toString() : rgb.r.toString(16);
  let green = rgb.g < 9 ? "0" + rgb.g.toString() : rgb.g.toString(16);
  let blue = rgb.b < 9 ? "0" + rgb.b.toString() : rgb.b.toString(16);

  let hexcode = "#" + red + green + blue;

  if (isHexcode(hexcode)) {
    return hexcode;
  } else {
    console.error("Error: improper rgb input, defaulting to black hexcode");
    return BLACK_HEXCODE;
  }
};

export const RGBToRGBA = (rgb: RGB): RGBA => {
  return { ...rgb, a: 1 };
};
