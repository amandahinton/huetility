import { ColorCodes, HSL, HSLA, RGB, RGBA } from "types/types";
import { BLACK_CODES } from "utils/constants";

export const hslaToColor = (hsla: HSLA): ColorCodes => {
  const formattedHSLA = {
    h: Math.round(hsla.h),
    s: Math.round(hsla.s),
    l: Math.round(hsla.l),
    a: hsla.a,
  };
  return {
    HEX: HSLAToHexcode(formattedHSLA),
    HSL: HSLAToHSL(formattedHSLA),
    HSLA: formattedHSLA,
    RGB: HSLAToRGB(formattedHSLA),
    RGBA: HSLAToRGBA(formattedHSLA),
  };
};

export const HSLAToHexcode = (hsla: HSLA): string => {
  console.log("TODO", hsla);
  return BLACK_CODES.HEX;
};

export const HSLAToHSL = (hsla: HSLA): HSL => {
  return { h: hsla.h, s: hsla.s, l: hsla.l };
};

export const HSLAToRGB = (hsla: HSLA): RGB => {
  console.log("TODO", hsla);
  return BLACK_CODES.RGB;
};

export const HSLAToRGBA = (hsla: HSLA): RGBA => {
  console.log("TODO", hsla);
  return BLACK_CODES.RGBA;
};
