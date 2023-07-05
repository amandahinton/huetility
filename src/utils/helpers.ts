import { isHexcode, hexcodeToRGB } from "./translations.ts/fromHEX";
import { BLACK_HEXCODE, WHITE_HEXCODE } from "./constants";

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
