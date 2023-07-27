import {
  hexcodeToRGB,
  hexcodeToRGBA,
  RGBToHexcode,
  RGBToRGBA,
  RGBAToHexcode,
  RGBAToRGB,
} from "./translations.ts";
import { BLACK_HEXCODE, WHITE_HEXCODE } from "./constants";
import { ColorCodes, RGB, RGBA } from "../types/types";
import { ColorMode } from "../types/enums";

export const hexToColor = (hexcode: string): ColorCodes => {
  return {
    HEX: hexcode,
    RGB: hexcodeToRGB(hexcode),
    RGBA: hexcodeToRGBA(hexcode),
  };
};

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

export const isBlack = (color: ColorCodes): boolean => {
  return color.RGB.r === 0 && color.RGB.g === 0 && color.RGB.b === 0;
};

export const isWhite = (color: ColorCodes): boolean => {
  return color.RGB.r === 255 && color.RGB.g === 255 && color.RGB.b === 255;
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

export const channelLuminance = (channelValue: number): number => {
  const output = channelValue / 255;
  return output <= 0.03928
    ? output / 12.92
    : Math.pow((output + 0.055) / 1.055, 2.4);
};

export const relativeLuminance = (color: ColorCodes): number | undefined => {
  try {
    const rgb = color.RGB;
    const R = channelLuminance(rgb.r);
    const G = channelLuminance(rgb.g);
    const B = channelLuminance(rgb.b);
    // For sRGB colorspace, relative luminance defined as...
    return 0.2126 * R + 0.7152 * G + 0.0722 * B;
  } catch (error) {
    console.error("Could not calculate luminance:", error);
  }

  return undefined;
};

// output: black or white hexcode to use for text on color background
export const contrastText = (color: ColorCodes): string => {
  try {
    const rgba = color.RGBA;
    // if transparent on light background, use black
    if (rgba.a <= 0.3) return BLACK_HEXCODE;
    // choose black or white text
    const luminance = relativeLuminance(color);
    if (luminance) return luminance > 150 ? BLACK_HEXCODE : WHITE_HEXCODE;
  } catch (error) {
    console.error("Could not calculate text color:", error);
  }
  return BLACK_HEXCODE;
};

// output: a string with the css color rule for the input mode
export const cssColorValue = (mode: ColorMode, color: ColorCodes): string => {
  let value = "";
  let alpha;

  switch (mode) {
    case ColorMode.HEX:
      value = color.HEX;
      break;
    case ColorMode.RGB:
      value = `rgb(${Math.round(color.RGB.r)}, ${Math.round(
        color.RGB.g
      )}, ${Math.round(color.RGB.b)})`;
      break;
    case ColorMode.RGBA:
      alpha =
        color.RGBA.a == 1 || color.RGBA.a == 0
          ? color.RGBA.a
          : color.RGBA.a.toFixed(2);
      value = `rgba(${Math.round(color.RGBA.r)}, ${Math.round(
        color.RGBA.g
      )}, ${Math.round(color.RGBA.b)}, ${alpha})`;
      break;
  }

  return value;
};
