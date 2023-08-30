import { ColorCodes } from "types/types";
import {
  BLACK_CODES,
  BLACK_HEXCODE,
  WHITE_CODES,
  WHITE_HEXCODE,
} from "utils/constants";
import { channelLinear } from "utils/helpers";

// FUNCTIONS RELATED TO COLOR CONTRAST

/*
https://www.w3.org/TR/WCAG20/
luminance is relative brightness (0 for black 1, for white)
contrast is difference in perceived luminance/brightness (1:1 white:white, 21:1 black:white)
WCAG standard: text and interactive elements at least 4.5:1, large text at least 3:1
*/

export const relativeLuminance = (color: ColorCodes): number | undefined => {
  try {
    const rgb = color.RGB;
    const R = channelLinear(rgb.r);
    const G = channelLinear(rgb.g);
    const B = channelLinear(rgb.b);
    // For sRGB colorspace, relative luminance defined as...
    return 0.2126 * R + 0.7152 * G + 0.0722 * B;
  } catch (error) {
    console.error("Could not calculate luminance:", error);
  }

  return undefined;
};

export const contrast = (
  colorOne: ColorCodes,
  colorTwo: ColorCodes
): number | undefined => {
  try {
    const luminanceOne = relativeLuminance(colorOne);
    const luminanceTwo = relativeLuminance(colorTwo);
    if (luminanceOne !== undefined && luminanceTwo !== undefined) {
      const sortedLuminance = [luminanceOne, luminanceTwo].sort();
      const [L2, L1] = sortedLuminance;
      return Number(((L1 + 0.05) / (L2 + 0.05)).toFixed(2));
    }
  } catch (error) {
    console.error("Could not calculate luminance:", error);
  }

  return undefined;
};

// blend out transparency before calculating text, uses RGB only
// output: black or white hexcode to use for text on color background
export const contrastTextHex = (color: ColorCodes): string => {
  try {
    const whiteContrast = contrast(color, WHITE_CODES) || 0;
    const blackContrast = contrast(color, BLACK_CODES) || 0;
    return blackContrast > whiteContrast ? BLACK_HEXCODE : WHITE_HEXCODE;
  } catch (error) {
    console.error("Could not calculate contrast color for text:", error);
  }
  return BLACK_HEXCODE;
};
