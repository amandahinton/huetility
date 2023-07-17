import { isHexcode } from "../helpers";
import { BLACK_HEXCODE } from "../constants";
import { RGB, RGBA } from "../../types/types";

export const RGBAToHexcode = (rgba: RGBA): string => {
  const aValue = Math.round(rgba.a * 255);

  const twoCharHex = (hexFragment: string): string => {
    if (hexFragment.length === 1) {
      return "0" + hexFragment;
    } else if (hexFragment.length === 0) {
      return "00";
    } else {
      return hexFragment.slice(0, 2);
    }
  };

  const red = twoCharHex(rgba.r.toString(16));
  const green = twoCharHex(rgba.g.toString(16));
  const blue = twoCharHex(rgba.b.toString(16));
  const alpha = twoCharHex(aValue.toString(16));

  let hexcode = "#" + red + green + blue + alpha;

  if (isHexcode(hexcode)) {
    return hexcode;
  } else {
    console.error(
      `Error: improper rgba ${JSON.stringify(
        rgba
      )}, defaulting to black hexcode`
    );
    return BLACK_HEXCODE;
  }
};

export const RGBAToRGB = (rgba: RGBA): RGB => {
  return { r: rgba.r, g: rgba.g, b: rgba.b };
};
