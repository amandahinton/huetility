import { isHexcode } from "../helpers";
import { BLACK_RGB, BLACK_RGBA } from "../constants";
import type { RGB, RGBA } from "../../types/types";

export const hexcodeToRGB = (hexcode: string): RGB => {
  if (!isHexcode(hexcode)) {
    console.error("Error: improper hexcode input, defaulting to black RGB");
    return BLACK_RGB;
  }

  try {
    let red;
    let green;
    let blue;

    if (hexcode.length === 7) {
      red = hexcode.slice(1, 3);
      green = hexcode.slice(3, 5);
      blue = hexcode.slice(5, 7);
    } else if (hexcode.length === 9) {
      red = hexcode.slice(1, 3);
      green = hexcode.slice(3, 5);
      blue = hexcode.slice(5, 7);
    } else {
      red = hexcode.slice(1, 2) + hexcode.slice(1, 2);
      green = hexcode.slice(2, 3) + hexcode.slice(2, 3);
      blue = hexcode.slice(3, 4) + hexcode.slice(3, 4);
    }

    return {
      r: parseInt(red, 16),
      g: parseInt(green, 16),
      b: parseInt(blue, 16),
    };
  } catch (error) {
    console.error("Could not convert to RGB, defaulting to black:", error);
  }

  return BLACK_RGB;
};

export const hexcodeToRGBA = (hexcode: string): RGBA => {
  if (!isHexcode(hexcode)) {
    console.error("Error: improper hexcode input, defaulting to black RGBA");
    return BLACK_RGBA;
  }

  try {
    let red;
    let green;
    let blue;
    let alpha;

    if (hexcode.length === 7) {
      red = hexcode.slice(1, 3);
      green = hexcode.slice(3, 5);
      blue = hexcode.slice(5, 7);
    } else if (hexcode.length === 9) {
      red = hexcode.slice(1, 3);
      green = hexcode.slice(3, 5);
      blue = hexcode.slice(5, 7);
      alpha = hexcode.slice(7, 9);
    } else {
      red = hexcode.slice(1, 2) + hexcode.slice(1, 2);
      green = hexcode.slice(2, 3) + hexcode.slice(2, 3);
      blue = hexcode.slice(3, 4) + hexcode.slice(3, 4);
    }

    return {
      r: parseInt(red, 16),
      g: parseInt(green, 16),
      b: parseInt(blue, 16),
      a: alpha ? Number((parseInt(alpha, 16) / 256).toFixed(2)) : 1,
    };
  } catch (error) {
    console.error("Could not convert to RGBA, defaulting to black:", error);
  }
  return BLACK_RGBA;
};
