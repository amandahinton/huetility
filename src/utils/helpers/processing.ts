import { ColorCodes } from "types/types";

import { rgbToColor, rgbaToColor } from "utils/translations";

// FUNCTIONS FOR PROCESSING AND MIXING COLORS

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
