import { ColorCodes, HSL, HSLA, RGB, RGBA } from "types/types";
import { RGBToHexcode } from "utils/translations";
import { BLACK_CODES, WHITE_CODES } from "utils/constants";

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
  const RGB = HSLToRGB(hsl);
  return RGBToHexcode(RGB);
};

export const HSLToHSLA = (hsl: HSL): HSLA => {
  return { ...hsl, a: 1 };
};

export const HSLToRGB = (hsl: HSL): RGB => {
  const decimalS = hsl.s / 100.0;
  const decimalL = hsl.l / 100.0;

  if (decimalL == 0) return BLACK_CODES.RGB;
  if (decimalL == 1) return WHITE_CODES.RGB;
  if (decimalS == 0) {
    const grayValue = Math.round(decimalL * 255.0);
    return { r: grayValue, g: grayValue, b: grayValue };
  }

  function limitZeroToOne(value: number): number {
    if (value < 0) {
      return value + 1.0;
    } else if (value > 1) {
      return value - 1.0;
    } else {
      return value;
    }
  }

  const hue = hsl.h / 360.0;
  const limitedR = limitZeroToOne(hue + 1.0 / 3.0);
  const limitedG = limitZeroToOne(hue);
  const limitedB = limitZeroToOne(hue - 1.0 / 3.0);

  function translateValues(channelValue: number): number {
    const temp1 =
      decimalL < 0.5
        ? decimalL * (1.0 + decimalS)
        : decimalL + decimalS - decimalL * decimalS;

    const temp2 = 2.0 * decimalL - temp1;

    if (channelValue <= 1.0 / 6.0)
      return temp2 + (temp1 - temp2) * 6.0 * channelValue;
    if (channelValue <= 1.0 / 2.0) return temp1;
    if (channelValue <= 2.0 / 3.0)
      return temp2 + (temp1 - temp2) * (2.0 / 3.0 - channelValue) * 6.0;
    return temp2;
  }

  return {
    r: Math.min(Math.floor(translateValues(limitedR) * 256), 255),
    g: Math.min(Math.floor(translateValues(limitedG) * 256), 255),
    b: Math.min(Math.floor(translateValues(limitedB) * 256), 255),
  };
};

export const HSLToRGBA = (hsl: HSL): RGBA => {
  const RGB = HSLToRGB(hsl);
  return { ...RGB, a: 1 };
};
