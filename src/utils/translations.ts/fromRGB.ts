import { isHexcode } from "../helpers";
import { BLACK_HEXCODE } from "../constants";
import { RGB, RGBA } from "../../types/types";

export const RGBToHexcode = (rgb: RGB): string => {
  let hexcode = "#" + rgb.r.toString(16) + rgb.g.toString(16) + rgb.b.toString(16);

  console.log(hexcode)

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
