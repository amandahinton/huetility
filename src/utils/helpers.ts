import { hexcodeToRGBA, hexcodeToRGB } from "./translations.ts/fromHEX";
import { BLACK_HEXCODE, WHITE_HEXCODE } from "./constants";
import { RGB, RGBA } from "../types/types";
import { ColorMode } from "../types/enums";

export const isHexcode = (hexcode: string): boolean => {
  const pattern = new RegExp(
    /^#([A-Fa-f0-9]{8}|[A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/
  );
  return pattern.test(hexcode);
};

export const isPartialHexcode = (hexcode: string): boolean => {
  const pattern = new RegExp(/^#([A-Fa-f0-9]{0,8})$/);
  return pattern.test(hexcode);
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

export const isBlack = (mode: ColorMode, code: any): boolean => {
  let isBlack = false;

  switch (mode) {
    case ColorMode.HEX:
      if (code === "#000000") isBlack = true;
      break;
    case ColorMode.RGB:
    case ColorMode.RGBA:
      if (code.r === 0 && code.g === 0 && code.b === 0) isBlack = true;
      break;
  }

  return isBlack;
};

export const isWhite = (mode: ColorMode, code: any): boolean => {
  let isWhite = false;

  switch (mode) {
    case ColorMode.HEX:
      if (code === "#ffffff") isWhite = true;
      break;
    case ColorMode.RGB:
    case ColorMode.RGBA:
      if (code.r === 255 && code.g === 255 && code.b === 255) isWhite = true;
      break;
  }

  return isWhite;
};
/*
https://www.w3.org/TR/WCAG20/
relative brightness of point in colorspace
normalized to 0 for darkest black and 1 for lightest white
contrast:
difference in perceived luminance/brightness between colors
ratio from 1:1 white:white to 21:1 black:white
WCAG standard:
text and interactive elements at least 4.5:1 (20/40 vision)
large-scale text at least 3:1
*/

export const approximateRGBFromRGBA = (
  foregroundColor: RGBA,
  backgroundColor: RGB
): RGB => {
  // source - normalize foreground RGBA channels
  const foreR = foregroundColor.r / 255;
  const foreG = foregroundColor.g / 255;
  const foreB = foregroundColor.b / 255;
  const foreA = foregroundColor.a;

  // matte - normalize background RGB channels
  const backR = backgroundColor.r / 255;
  const backG = backgroundColor.g / 255;
  const backB = backgroundColor.b / 255;

  // convert from transparent color on background to flat RGB
  let transformedR = (1 - foreA) * backR + foreA * foreR;
  let transformedG = (1 - foreA) * backG + foreA * foreG;
  let transformedB = (1 - foreA) * backB + foreA * foreB;
  // cap at 255 if calculation was overexposed
  if (transformedR > 1) transformedR = 255;
  if (transformedG > 1) transformedG = 255;
  if (transformedB > 1) transformedB = 255;

  return { r: transformedR, g: transformedG, b: transformedB };
};

const channelLuminance = (channelValue: number): number => {
  let output = channelValue / 255;
  return output <= 0.03928
    ? output / 12.92
    : Math.pow((output + 0.055) / 1.055, 2.4);
};

export const relativeLuminance = (hexcode: string): number | undefined => {
  if (!isHexcode(hexcode)) return undefined;

  try {
    const rgb = hexcodeToRGB(hexcode);
    if (rgb) {
      const R = channelLuminance(rgb.r);
      const G = channelLuminance(rgb.g);
      const B = channelLuminance(rgb.b);
      // For sRGB colorspace, relative luminance defined as...
      return 0.2126 * R + 0.7152 * G + 0.0722 * B;
    }
  } catch (error) {
    console.error("Could not calculate luminance:", error);
  }

  return undefined;
};

export const contrastText = (hexcode: string): string => {
  if (!isHexcode(hexcode)) return BLACK_HEXCODE;

  try {
    if (hexcode.length == 9) {
      const alpha = hexcode.slice(8);
      // if transparent on light background, use black
      if (parseInt(alpha, 16) <= 0.3) return BLACK_HEXCODE;

      // choose black or white text
      const luminance = relativeLuminance(hexcode);
      if (luminance) return luminance > 150 ? BLACK_HEXCODE : WHITE_HEXCODE;
    }
  } catch (error) {
    console.error("Could not calculate text color:", error);
  }
  return BLACK_HEXCODE;
};

export const cssColorValue = (mode: ColorMode, code: any): string => {
  let value;

  switch (mode) {
    case ColorMode.HEX:
      value = code;
      break;
    case ColorMode.RGB:
      value = `rgb(${Math.round(code.r)}, ${Math.round(code.g)}, ${Math.round(
        code.b
      )})`;
      break;
    case ColorMode.RGBA:
      const alpha = code.a == 1 ? 1 : code.a.toFixed(2);
      value = `rgba(${Math.round(code.r)}, ${Math.round(code.g)}, ${Math.round(
        code.b
      )}, ${alpha})`;
      break;
  }

  return value;
};
