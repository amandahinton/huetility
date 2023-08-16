import type { ColorCodes, HSL, HSLA, RGB, RGBA } from "types/types";
import { BLACK_CODES } from "utils/constants";
import { isHexcode } from "utils/helpers";
import { RGBToHSL, RGBAToHSLA } from "@/utils/translations";

export const hexToColor = (hexcode: string): ColorCodes => {
  return {
    HEX: hexcode,
    RGB: hexcodeToRGB(hexcode),
    RGBA: hexcodeToRGBA(hexcode),
    HSL: hexcodeToHSL(hexcode),
    HSLA: hexcodeToHSLA(hexcode),
  };
};

export const hexcodeToRGB = (hexcode: string): RGB => {
  if (!isHexcode(hexcode)) {
    console.error("Error: improper hexcode input, defaulting to black RGB");
    return BLACK_CODES.RGB;
  }

  try {
    let red;
    let green;
    let blue;

    if (hexcode.length === 7) {
      red = hexcode.slice(1, 3);
      green = hexcode.slice(3, 5);
      blue = hexcode.slice(5, 7);
    } else if (hexcode.length === 9) {
      red = hexcode.slice(1, 3);
      green = hexcode.slice(3, 5);
      blue = hexcode.slice(5, 7);
    } else {
      red = hexcode.slice(1, 2) + hexcode.slice(1, 2);
      green = hexcode.slice(2, 3) + hexcode.slice(2, 3);
      blue = hexcode.slice(3, 4) + hexcode.slice(3, 4);
    }

    return {
      r: parseInt(red, 16),
      g: parseInt(green, 16),
      b: parseInt(blue, 16),
    };
  } catch (error) {
    console.error("Could not convert to RGB, defaulting to black:", error);
  }

  return BLACK_CODES.RGB;
};

export const hexcodeToRGBA = (hexcode: string): RGBA => {
  if (!isHexcode(hexcode)) {
    console.error("Error: improper hexcode input, defaulting to black RGBA");
    return BLACK_CODES.RGBA;
  }

  try {
    let red;
    let green;
    let blue;
    let alpha;

    if (hexcode.length === 7) {
      red = hexcode.slice(1, 3);
      green = hexcode.slice(3, 5);
      blue = hexcode.slice(5, 7);
    } else if (hexcode.length === 9) {
      red = hexcode.slice(1, 3);
      green = hexcode.slice(3, 5);
      blue = hexcode.slice(5, 7);
      alpha = hexcode.slice(7, 9);
    } else {
      red = hexcode.slice(1, 2) + hexcode.slice(1, 2);
      green = hexcode.slice(2, 3) + hexcode.slice(2, 3);
      blue = hexcode.slice(3, 4) + hexcode.slice(3, 4);
    }

    return {
      r: parseInt(red, 16),
      g: parseInt(green, 16),
      b: parseInt(blue, 16),
      a: alpha ? Number((parseInt(alpha, 16) / 256).toFixed(2)) : 1,
    };
  } catch (error) {
    console.error("Could not convert to RGBA, defaulting to black:", error);
  }
  return BLACK_CODES.RGBA;
};

export const hexcodeToHSL = (hexcode: string): HSL => {
  if (!isHexcode(hexcode)) {
    console.error("Error: improper hexcode input, defaulting to black RGB");
    return BLACK_CODES.HSL;
  }

  const RGB = hexcodeToRGB(hexcode);
  const HSL = RGBToHSL(RGB);
  return HSL;
};

export const hexcodeToHSLA = (hexcode: string): HSLA => {
  if (!isHexcode(hexcode)) {
    console.error("Error: improper hexcode input, defaulting to black RGB");
    return BLACK_CODES.HSLA;
  }

  const RGBA = hexcodeToRGBA(hexcode);
  const HSLA = RGBAToHSLA(RGBA);
  return HSLA;
};
