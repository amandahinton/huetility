import { ColorCodes, HSL, HSLA, RGB, RGBA } from "types/types";
import { HSLToRGB, RGBAToHexcode } from ".";

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
  const RGBA = HSLAToRGBA(hsla);
  return RGBAToHexcode(RGBA);
};

export const HSLAToHSL = (hsla: HSLA): HSL => {
  return { h: hsla.h, s: hsla.s, l: hsla.l };
};

export const HSLAToRGB = (hsla: HSLA): RGB => {
  const HSL = HSLAToHSL(hsla);
  return HSLToRGB(HSL);
};

export const HSLAToRGBA = (hsla: HSLA): RGBA => {
  const RGB = HSLAToRGB(hsla);
  return { ...RGB, a: hsla.a };
};
