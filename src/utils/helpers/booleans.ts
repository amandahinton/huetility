import { ColorCodes, HSL, HSLA, RGB, RGBA } from "types/types";

// FUNCTIONS FOR CHECKING VALUE OF INPUT

export const isHexcode = (hexcode: string): boolean => {
  const pattern = new RegExp(
    /^#([A-Fa-f0-9]{8}|[A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/
  );
  return pattern.test(hexcode);
};

export const isOpaque = (color: ColorCodes): boolean => {
  return color.RGBA.a == 1;
};

export const isPartialHexcode = (hexcode: string): boolean => {
  const pattern = new RegExp(/^#([A-Fa-f0-9]{0,8})$/);
  return pattern.test(hexcode);
};

export const isHSL = (hsl: HSL): boolean => {
  return (
    hsl.h >= 0 &&
    hsl.h <= 360 &&
    hsl.s >= 0 &&
    hsl.s <= 100 &&
    hsl.l >= 0 &&
    hsl.l <= 100
  );
};

export const isHSLA = (hsla: HSLA): boolean => {
  return (
    hsla.h >= 0 &&
    hsla.h <= 360 &&
    hsla.s >= 0 &&
    hsla.s <= 100 &&
    hsla.l >= 0 &&
    hsla.l <= 100 &&
    hsla.a >= 0 &&
    hsla.a <= 1
  );
};

export const isRGB = (rgb: RGB): boolean => {
  return (
    rgb.r >= 0 &&
    rgb.r <= 255 &&
    rgb.g >= 0 &&
    rgb.g <= 255 &&
    rgb.b >= 0 &&
    rgb.b <= 255
  );
};

export const isRGBA = (rgba: RGBA): boolean => {
  return (
    rgba.r >= 0 &&
    rgba.r <= 255 &&
    rgba.g >= 0 &&
    rgba.g <= 255 &&
    rgba.b >= 0 &&
    rgba.b <= 255 &&
    rgba.a >= 0 &&
    rgba.a <= 1
  );
};

export const isBlack = (color: ColorCodes): boolean => {
  return color.RGB.r === 0 && color.RGB.g === 0 && color.RGB.b === 0;
};

export const isWhite = (color: ColorCodes): boolean => {
  return color.RGB.r === 255 && color.RGB.g === 255 && color.RGB.b === 255;
};
