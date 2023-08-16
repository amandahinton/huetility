import { ColorCodes, HSL, HSLA, RGB, RGBA } from "types/types";
import { BLACK_CODES } from "utils/constants";

export const hslToColor = (hsl: HSL): ColorCodes => {
  const formattedHSL = {
    h: Math.round(hsl.h),
    s: Math.round(hsl.s),
    l: Math.round(hsl.l),
  };
  return {
    HEX: HSLToHexcode(formattedHSL),
    HSL: formattedHSL,
    HSLA: HSLToHSLA(formattedHSL),
    RGB: HSLToRGB(formattedHSL),
    RGBA: HSLToRGBA(formattedHSL),
  };
};

export const HSLToHexcode = (hsl: HSL): string => {
  console.log("TODO", hsl);
  return BLACK_CODES.HEX;
};

export const HSLToHSLA = (hsl: HSL): HSLA => {
  return { ...hsl, a: 1 };
};

export const HSLToRGB = (hsl: HSL): RGB => {
  console.log("TODO", hsl);
  return BLACK_CODES.RGB;
};

export const HSLToRGBA = (hsl: HSL): RGBA => {
  console.log("TODO", hsl);
  return BLACK_CODES.RGBA;
};
