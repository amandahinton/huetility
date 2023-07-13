import { hexcodeToRGB } from "./translations.ts/fromHEX";
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

export const contrastText = (hexcode: string): string => {
  if (!isHexcode(hexcode)) return BLACK_HEXCODE;

  try {
    const rgb = hexcodeToRGB(hexcode);
    if (rgb) {
      const luminance = rgb.r * 0.299 + rgb.g * 0.587 + rgb.b * 0.114;
      return luminance > 150 ? BLACK_HEXCODE : WHITE_HEXCODE;
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
      value = `rgba(${Math.round(code.r)}, ${Math.round(code.g)}, ${Math.round(
        code.b
      )}, ${code.a})`;
      break;
  }

  return value;
};
