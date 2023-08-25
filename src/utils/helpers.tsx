import { ColorMode, HarmonyCategory, VisionCategory } from "types/enums";
import {
  ColorCodes,
  HSL,
  HSLA,
  Palette,
  PerceivedColor,
  RGB,
  RGBA,
} from "types/types";
import {
  ACHROMATOPSIA_MATRIX,
  BLACK_CODES,
  BLACK_HEXCODE,
  MONOCHROMACY_MATRIX,
  DEUTERANOMALY_MATRIX,
  DEUTERANOPIA_MATRIX,
  PROTANOMALY_MATRIX,
  PROTANOPIA_MATRIX,
  TRITANOMALY_MATRIX,
  TRITANOPIA_MATRIX,
  WHITE_CODES,
  WHITE_HEXCODE,
} from "utils/constants";
import { hslaToColor, rgbToColor, rgbaToColor } from "@/utils/translations";

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

// FUNCTIONS FOR USING COLOR IN UI

// output: a string with the css color rule for the input mode
export const cssColorValue = (mode: ColorMode, color: ColorCodes): string => {
  let value = "";
  let alpha;

  switch (mode) {
    case ColorMode.HEX:
      value = color.HEX;
      break;

    case ColorMode.HSL:
    case ColorMode.HSLA:
      alpha =
        color.HSLA.a == 1 || color.HSLA.a == 0
          ? color.HSLA.a
          : color.HSLA.a.toFixed(2);
      value = `hsl(${Math.round(color.HSL.h)}deg ${Math.round(
        color.HSL.s
      )}% ${Math.round(color.HSL.l)}% / ${alpha})`;
      break;

    case ColorMode.RGB:
    case ColorMode.RGBA:
      alpha =
        color.RGBA.a == 1 || color.RGBA.a == 0
          ? color.RGBA.a
          : color.RGBA.a.toFixed(2);
      value = `rgb(${Math.round(color.RGBA.r)} ${Math.round(
        color.RGBA.g
      )} ${Math.round(color.RGBA.b)} / ${alpha})`;
      break;
  }

  return value;
};

export const colorLabel = (color: ColorCodes): string => {
  return isWhite(color) ? "white" : isBlack(color) ? "black" : color.HEX;
};

// FUNCTIONS FOR PROCESSING COLORS

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

// process colors in linear space (but display in sRGB)
export const channelLinear = (channelNonlinearValue: number): number => {
  const nonlinear = channelNonlinearValue / 255;
  return nonlinear <= 0.04045
    ? nonlinear / 12.92
    : Math.pow((nonlinear + 0.055) / 1.055, 2.4);
};

//sRGB curve has more darks than lights as sensitivity is better at low intensities than high
export const channelNonlinear = (channelLinearValue: number): number => {
  const linear =
    channelLinearValue <= 0.0031308
      ? channelLinearValue * 12.92
      : 1.055 * Math.pow(channelLinearValue, 1.0 / 2.4) - 0.055;
  const value = Math.round(linear * 255);
  return value > 255 ? 255 : value;
};

// mix two colors
export function colorMixer(
  colorOne: ColorCodes,
  colorTwo: ColorCodes
): ColorCodes {
  const linearROne = channelLinear(colorOne.RGB.r);
  const linearGOne = channelLinear(colorOne.RGB.g);
  const linearBOne = channelLinear(colorOne.RGB.b);

  const linearRTwo = channelLinear(colorTwo.RGB.r);
  const linearGTwo = channelLinear(colorTwo.RGB.g);
  const linearBTwo = channelLinear(colorTwo.RGB.b);

  const averageR = (linearROne + linearRTwo) / 2;
  const averageG = (linearGOne + linearGTwo) / 2;
  const averageB = (linearBOne + linearBTwo) / 2;
  const averageAlpha = (colorOne.RGBA.a + colorOne.RGBA.a) / 2;

  return rgbaToColor({
    r: channelNonlinear(averageR),
    g: channelNonlinear(averageG),
    b: channelNonlinear(averageB),
    a: averageAlpha,
  });
}

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

// FUNCTIONS RELATED TO COLOR VISION DEFICIENCY

export function colorToRGBMatrix(color: ColorCodes): number[] {
  const { RGB } = color;
  return [channelLinear(RGB.r), channelLinear(RGB.g), channelLinear(RGB.b)];
}

export function colorMatrixMultiplication(
  colorMatrix: number[],
  deficiencyMatrix: number[][]
): number[] {
  const deficientR =
    deficiencyMatrix[0][0] * colorMatrix[0] +
    deficiencyMatrix[0][1] * colorMatrix[1] +
    deficiencyMatrix[0][2] * colorMatrix[2];
  const deficientG =
    deficiencyMatrix[1][0] * colorMatrix[0] +
    deficiencyMatrix[1][1] * colorMatrix[1] +
    deficiencyMatrix[1][2] * colorMatrix[2];
  const deficientB =
    deficiencyMatrix[2][0] * colorMatrix[0] +
    deficiencyMatrix[2][1] * colorMatrix[1] +
    deficiencyMatrix[2][2] * colorMatrix[2];
  return [Math.abs(deficientR), Math.abs(deficientG), Math.abs(deficientB)];
}

export function rgbMatrixToColor(matrix: number[], alpha: number): ColorCodes {
  const rgba: RGBA = {
    r: channelNonlinear(matrix[0]),
    g: channelNonlinear(matrix[1]),
    b: channelNonlinear(matrix[2]),
    a: alpha,
  };
  return rgbaToColor(rgba);
}

export function deficientColor(
  color: ColorCodes,
  deficiencyMatrix: number[][]
): ColorCodes {
  const colorMatrix = colorToRGBMatrix(color);
  const dichromacyMatrix = colorMatrixMultiplication(
    colorMatrix,
    deficiencyMatrix
  );
  const translatedMatrix = rgbMatrixToColor(dichromacyMatrix, color.RGBA.a);
  return translatedMatrix;
}

// https://www.colour-blindness.com/general/prevalence/
export const perceivedColors = (color: ColorCodes): PerceivedColor[] => {
  const colors: PerceivedColor[] = [];

  const categories = Object.keys(VisionCategory);

  for (const category of categories) {
    const cat = VisionCategory[category as keyof typeof VisionCategory];
    const perceivedColor: PerceivedColor = {
      name: cat,
      description: "",
      color: color,
      prevalence: "",
    };

    switch (cat) {
      case VisionCategory.TRICHROMATIC:
        perceivedColor.description =
          "Regular color vision with all three of the eye's cone cell types functioning correctly.";
        break;
      case VisionCategory.PROTOANOMALY:
        perceivedColor.color = deficientColor(color, PROTANOMALY_MATRIX);
        perceivedColor.description =
          "Defective L-cones. Reduced ability to perceive long (red) wavelengths of light.";
        perceivedColor.prevalence =
          "Affects an estimated 1.3% of the population.";
        break;
      case VisionCategory.PROTANOPIA:
        perceivedColor.color = deficientColor(color, PROTANOPIA_MATRIX);
        perceivedColor.description =
          "Missing or non-functioning L-cones. Cannot perceive long (red) wavelengths of light at all.";
        perceivedColor.prevalence =
          "Affects an estimated 1.3% of the population.";
        break;
      case VisionCategory.DEUTERANOMALY:
        perceivedColor.color = deficientColor(color, DEUTERANOMALY_MATRIX);
        perceivedColor.description =
          "Defective M-cones. Reduced ability to perceive medium (green) wavelengths of light.";
        perceivedColor.prevalence =
          "Affects an estimated 5.4% of the population.";
        break;
      case VisionCategory.DEUTERANOPIA:
        perceivedColor.color = deficientColor(color, DEUTERANOPIA_MATRIX);
        perceivedColor.description =
          "Missing or non-functioning M-cones. Cannot perceive medium (green) wavelengths of light at all.";
        perceivedColor.prevalence =
          "Affects an estimated 1.2% of the population.";
        break;
      case VisionCategory.TRITANOMALY:
        perceivedColor.color = deficientColor(color, TRITANOMALY_MATRIX);
        perceivedColor.description =
          "Defective S-cones. Reduced ability to perceive short (blue) wavelengths of light.";
        perceivedColor.prevalence =
          "Affects an estimated .02% of the population.";
        break;
      case VisionCategory.TRITANOPIA:
        perceivedColor.color = deficientColor(color, TRITANOPIA_MATRIX);
        perceivedColor.description =
          "Missing or non-functioning S-cones. Cannot perceive short (blue) wavelengths of light at all.";
        perceivedColor.prevalence =
          "Affects an estimated .03% of the population.";
        break;
      case VisionCategory.ACHROMATOPSIA:
        perceivedColor.color = deficientColor(color, ACHROMATOPSIA_MATRIX);
        perceivedColor.description =
          "Complete color blindness. Cannot perceive any colors, seeing only black, white, and grays.";
        perceivedColor.prevalence =
          "Affects an estimated .00003% of the population.";
        break;
      case VisionCategory.MONOCHROMACY:
        perceivedColor.color = deficientColor(color, MONOCHROMACY_MATRIX);
        perceivedColor.description =
          "Missing or non-functioning M-cones and L-cones. Blue cone monochromacy is incomplete achromatopsia, often accompanied by photophobia.";
        perceivedColor.prevalence =
          "Affects an estimated .00001% of the population.";
        break;
      case VisionCategory.DIMINISHED:
        perceivedColor.description = "Blurred vision.";
        perceivedColor.prevalence =
          "Over 25% of the global population has a near or distance vision impairment.";
        break;
    }

    colors.push(perceivedColor);
  }
  return colors;
};

// FUNCTIONS RELATED TO COLOR HARMONIES

export function harmoniousColorAtAngle(
  color: ColorCodes,
  angle: number
): ColorCodes {
  const harmoniousHSLA = { ...color.HSLA, h: angle };
  return hslaToColor(harmoniousHSLA);
}

export function harmonyComplementary(color: ColorCodes): ColorCodes[] {
  const hue = color.HSL.h;
  const angle = (hue + 180) % 360;
  return [color, harmoniousColorAtAngle(color, angle)];
}

export function harmonyTriadic(color: ColorCodes): ColorCodes[] {
  const hue = color.HSL.h;
  const angle1 = (hue + 120) % 360;
  const angle2 = (hue - 120) % 360;
  return [
    harmoniousColorAtAngle(color, angle1),
    color,
    harmoniousColorAtAngle(color, angle2),
  ];
}

export function harmonyTetradic(color: ColorCodes): ColorCodes[] {
  const hue = color.HSL.h;
  const angle1 = (hue + 90) % 360;
  const angle2 = (hue + 180) % 360;
  const angle3 = (hue + 270) % 360;
  return [
    color,
    harmoniousColorAtAngle(color, angle1),
    harmoniousColorAtAngle(color, angle2),
    harmoniousColorAtAngle(color, angle3),
  ];
}

export function harmonySplitComplementary(color: ColorCodes): ColorCodes[] {
  const hue = color.HSL.h;
  const angle1 = (hue + 210) % 360;
  const angle2 = (hue - 210) % 360;
  return [
    harmoniousColorAtAngle(color, angle1),
    color,
    harmoniousColorAtAngle(color, angle2),
  ];
}

export function harmonyMonochromatic(color: ColorCodes): ColorCodes[] {
  return [
    colorMixer(color, WHITE_CODES),
    color,
    colorMixer(color, BLACK_CODES),
  ];
}

export function harmonyAnalogous(color: ColorCodes): ColorCodes[] {
  const hue = color.HSL.h;
  const angle1 = (hue + 30) % 360;
  const angle2 = (hue - 30) % 360;
  return [
    harmoniousColorAtAngle(color, angle1),
    color,
    harmoniousColorAtAngle(color, angle2),
  ];
}

export const harmonyPalettes = (color: ColorCodes): Palette[] => {
  return [
    {
      name: HarmonyCategory.COMPLEMENTARY,
      paletteColors: harmonyComplementary(color),
      description: (
        <p className="huetility-tooltip-content-left-align">
          Two colors that are directly opposite each other on the color wheel.
        </p>
      ),
    },
    {
      name: HarmonyCategory.TRIADIC,
      paletteColors: harmonyTriadic(color),
      description: (
        <p className="huetility-tooltip-content-left-align">
          Three colors that are equally distant from each other on the color
          wheel, forming an equilateral triangle.
        </p>
      ),
    },
    {
      name: HarmonyCategory.TETRADIC,
      paletteColors: harmonyTetradic(color),
      description: (
        <p className="huetility-tooltip-content-left-align">
          Four colors that are equally distant from each other on the color
          wheel, forming a square.
        </p>
      ),
    },
    {
      name: HarmonyCategory.SPLIT,
      paletteColors: harmonySplitComplementary(color),
      description: (
        <p className="huetility-tooltip-content-left-align">
          Color scheme with colors equally close to the complement of the
          selected color. Here, two colors are 30 degrees to each side of the
          selected color's complement.
        </p>
      ),
    },
    {
      name: HarmonyCategory.MONOCHROMATIC,
      paletteColors: harmonyMonochromatic(color),
      description: (
        <p className="huetility-tooltip-content-left-align">
          Color scheme with light and/or dark versions of a hue. Here, the
          selected color is blended with white to make a tint and with black to
          make a shade.
        </p>
      ),
    },
    {
      name: HarmonyCategory.ANALOGOUS,
      paletteColors: harmonyAnalogous(color),
      description: (
        <p className="huetility-tooltip-content-left-align">
          Color scheme with colors equally close to the selected color. Here,
          two colors are 30 degrees to each side of the selected color.
        </p>
      ),
    },
  ];
};
