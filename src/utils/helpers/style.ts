import { ColorMode } from "types/enums";
import { ColorCodes } from "types/types";

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
