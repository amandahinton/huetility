import { isHexcode } from "../helpers";
import { BLACK_HEXCODE } from "../constants";
import { ColorCodes, RGB, RGBA } from "../../types/types";

export const rgbaToColor = (rgba: RGBA): ColorCodes => {
  const formattedRGBA = {
    r: Math.round(rgba.r),
    g: Math.round(rgba.g),
    b: Math.round(rgba.b),
    a: rgba.a,
  };
  return {
    HEX: RGBAToHexcode(formattedRGBA),
    RGB: RGBAToRGB(formattedRGBA),
    RGBA: formattedRGBA,
  };
};

export const RGBAToHexcode = (rgba: RGBA): string => {
  let red = rgba.r.toString(16);
  let green = rgba.g.toString(16);
  let blue = rgba.b.toString(16);
  let alpha = Math.round(rgba.a * 255).toString(16);

  if (red.length == 1) red = "0" + red;
  if (green.length == 1) green = "0" + green;
  if (blue.length == 1) blue = "0" + blue;
  if (alpha.length == 1) alpha = "0" + alpha;

  const hexcode = "#" + red + green + blue + alpha;

  if (isHexcode(hexcode)) {
    return hexcode;
  } else {
    console.error(
      "Error: improper rgba input, defaulting to black hexcode",
      rgba,
      hexcode
    );
    return BLACK_HEXCODE;
  }
};

export const RGBAToRGB = (rgba: RGBA): RGB => {
  return { r: rgba.r, g: rgba.g, b: rgba.b };
};
