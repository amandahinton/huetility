import {
  hexcodeToRGB,
  hexcodeToRGBA,
  RGBToHexcode,
  RGBToRGBA,
  RGBAToHexcode,
  RGBAToRGB,
} from "./translations.ts";
import {
  BLACK_CODES,
  BLACK_HEXCODE,
  WHITE_CODES,
  WHITE_HEXCODE,
} from "./constants";
import { ColorCodes, PerceivedColor, RGB, RGBA } from "../types/types";
import { ColorMode, VisionCategory, VisionDescription } from "../types/enums";

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

export const isOpaque = (color: ColorCodes): boolean => {
  return color.RGBA.a == 1;
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

export const colorLabel = (color: ColorCodes): string => {
  return isWhite(color) ? "white" : isBlack(color) ? "black" : color.HEX;
};

// background color will use opaque RGB only
// pre-blend background if it was transparent
export const blendForegroundToBackground = (
  foregroundColor: ColorCodes,
  backgroundColor: ColorCodes
): ColorCodes => {
  const foreRGBA = foregroundColor.RGBA;
  if (foreRGBA.a == 1) return foregroundColor;

  const backRGB = backgroundColor.RGB;

  // source - normalize foreground RGBA channels
  const foreR = foreRGBA.r / 255;
  const foreG = foreRGBA.g / 255;
  const foreB = foreRGBA.b / 255;
  const foreA = foreRGBA.a;

  // matte - normalize background RGB channels
  const backR = backRGB.r / 255;
  const backG = backRGB.g / 255;
  const backB = backRGB.b / 255;

  // convert from transparent color on background to flat RGB
  const flatR = (1 - foreA) * backR + foreA * foreR;
  const flatG = (1 - foreA) * backG + foreA * foreG;
  const flatB = (1 - foreA) * backB + foreA * foreB;

  let transformedR = Math.round(flatR * 255);
  let transformedG = Math.round(flatG * 255);
  let transformedB = Math.round(flatB * 255);

  // cap at 255 if calculation was overexposed
  if (transformedR > 255) transformedR = 255;
  if (transformedG > 255) transformedG = 255;
  if (transformedB > 255) transformedB = 255;

  return rgbToColor({ r: transformedR, g: transformedG, b: transformedB });
};

/*
https://www.w3.org/TR/WCAG20/
luminance is relative brightness of point in colorspace
normalized to 0 for black and 1 for white

contrast is difference in perceived luminance/brightness between colors
ratio from 1:1 white:white to 21:1 black:white

WCAG standard:
text and interactive elements at least 4.5:1
large text at least 3:1
*/

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

export function trichromatic(color: ColorCodes): ColorCodes {
  return color;
}

//TODO
export function protanomaly(color: ColorCodes): ColorCodes {
  return color;
}

//TODO
export function protanopia(color: ColorCodes): ColorCodes {
  return color;
}

//TODO
export function deuteranomaly(color: ColorCodes): ColorCodes {
  return color;
}

//TODO
export function deuteranopia(color: ColorCodes): ColorCodes {
  return color;
}

//TODO
export function tritanomaly(color: ColorCodes): ColorCodes {
  return color;
}

//TODO
export function tritanopia(color: ColorCodes): ColorCodes {
  return color;
}

//TODO
export function achromatomaly(color: ColorCodes): ColorCodes {
  return color;
}

//TODO
export function achromatopsia(color: ColorCodes): ColorCodes {
  return color;
}

export function diminished(color: ColorCodes): ColorCodes {
  return color;
}

function visionSimulator(
  category: VisionCategory,
  color: ColorCodes
): PerceivedColor {
  const perceivedColor = {
    name: category,
    description: VisionDescription[category],
    color: color,
  };

  switch (category) {
    case VisionCategory.TRICHROMATIC:
      perceivedColor.color = trichromatic(color);
      break;
    case VisionCategory.PROTOANOMALY:
      perceivedColor.color = protanomaly(color);
      break;
    case VisionCategory.PROTANOPIA:
      perceivedColor.color = protanopia(color);
      break;
    case VisionCategory.DEUTERANOMALY:
      perceivedColor.color = deuteranomaly(color);
      break;
    case VisionCategory.DEUTERANOPIA:
      perceivedColor.color = deuteranopia(color);
      break;
    case VisionCategory.TRITANOMALY:
      perceivedColor.color = tritanomaly(color);
      break;
    case VisionCategory.TRITANOPIA:
      perceivedColor.color = tritanopia(color);
      break;
    case VisionCategory.ACHROMATOMALY:
      perceivedColor.color = achromatomaly(color);
      break;
    case VisionCategory.ACHROMATOPSIA:
      perceivedColor.color = achromatopsia(color);
      break;
    case VisionCategory.DIMINISHED:
      perceivedColor.color = diminished(color);
      break;
  }
  return perceivedColor;
}

export const perceivedColors = (color: ColorCodes): PerceivedColor[] => {
  const colors: PerceivedColor[] = [];
  const categories = Object.keys(VisionCategory);
  for (const category of categories) {
    const cat = VisionCategory[category as keyof typeof VisionCategory];
    colors.push(visionSimulator(cat, color));
  }
  return colors;
};
