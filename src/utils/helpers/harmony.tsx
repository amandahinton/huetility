import { HarmonyCategory } from "types/enums";
import { ColorCodes, Palette } from "types/types";
import { BLACK_CODES, WHITE_CODES } from "utils/constants";
import { colorMixer } from "utils/helpers";
import { hslaToColor } from "utils/translations";

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
      description:
        "Two colors that are directly opposite each other on the color wheel.",
    },
    {
      name: HarmonyCategory.TRIADIC,
      paletteColors: harmonyTriadic(color),
      description:
        "Three colors that are equally distant from each other on the color wheel, forming an equilateral triangle.",
    },
    {
      name: HarmonyCategory.TETRADIC,
      paletteColors: harmonyTetradic(color),
      description:
        "Four colors that are equally distant from each other on the color wheel, forming a square.",
    },
    {
      name: HarmonyCategory.SPLIT,
      paletteColors: harmonySplitComplementary(color),
      description:
        "Color scheme with colors equally close to the complement of the selected color. Here, two colors are 30 degrees to each side of the selected color's complement.",
    },
    {
      name: HarmonyCategory.MONOCHROMATIC,
      paletteColors: harmonyMonochromatic(color),
      description:
        "Color scheme with light and/or dark versions of a hue. Here, the selected color is blended with white to make a tint and with black to make a shade.",
    },
    {
      name: HarmonyCategory.ANALOGOUS,
      paletteColors: harmonyAnalogous(color),
      description:
        "Color scheme with colors equally close to the selected color. Here, two colors are 30 degrees to each side of the selected color.",
    },
  ];
};
