import { VisionCategory } from "types/enums";
import { ColorCodes, PerceivedColor, RGBA } from "types/types";
import {
  ACHROMATOPSIA_MATRIX,
  MONOCHROMACY_MATRIX,
  DEUTERANOMALY_MATRIX,
  DEUTERANOPIA_MATRIX,
  PROTANOMALY_MATRIX,
  PROTANOPIA_MATRIX,
  TRITANOMALY_MATRIX,
  TRITANOPIA_MATRIX,
} from "utils/constants";
import { channelLinear, channelNonlinear } from "utils/helpers";
import { rgbaToColor } from "utils/translations";

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
