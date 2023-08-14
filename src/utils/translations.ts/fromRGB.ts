import { isHexcode } from "../helpers";
import { BLACK_HEXCODE } from "../constants";
import { ColorCodes, RGB, RGBA } from "../../types/types";

export const rgbToColor = (rgb: RGB): ColorCodes => {
  const formattedRGB = {
    r: Math.round(rgb.r),
    g: Math.round(rgb.g),
    b: Math.round(rgb.b),
  };
  return {
    HEX: RGBToHexcode(formattedRGB),
    RGB: formattedRGB,
    RGBA: RGBToRGBA(formattedRGB),
  };
};

export const RGBToHexcode = (rgb: RGB): string => {
  let red = rgb.r.toString(16);
  let green = rgb.g.toString(16);
  let blue = rgb.b.toString(16);

  if (red.length == 1) red = "0" + red;
  if (green.length == 1) green = "0" + green;
  if (blue.length == 1) blue = "0" + blue;

  const hexcode = "#" + red + green + blue;

  if (isHexcode(hexcode)) {
    return hexcode;
  } else {
    console.error(
      "Error: improper rgb input, defaulting to black hexcode",
      rgb,
      hexcode
    );
    return BLACK_HEXCODE;
  }
};

export const RGBToRGBA = (rgb: RGB): RGBA => {
  return { ...rgb, a: 1 };
};
