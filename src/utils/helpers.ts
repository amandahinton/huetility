import { hexcodeToRGB } from "./translations.ts/fromHEX";
import { BLACK_HEXCODE, WHITE_HEXCODE } from "./constants";
import { ColorMode } from "../types/enums";

export const isHexcode = (hexcode: string): boolean => {
  const pattern = new RegExp(
    /^#([A-Fa-f0-9]{8}|A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/
  );
  return pattern.test(hexcode) == true ? true : false;
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
      value = `rgb(${code.r}, ${code.g}, ${code.b})`;
      break;
    case ColorMode.RGBA:
      value = `rgba(${code.r}, ${code.g}, ${code.b}, ${code.a})`;
      break;
  }

  return value;
};
