import { isHexcode } from "../helpers";
import { BLACK_CODES } from "../constants";
import { ColorCodes, HSL, HSLA, RGB, RGBA } from "../../types/types";

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
    HSL: RGBToHSL(formattedRGB),
    HSLA: RGBToHSLA(formattedRGB),
  };
};

export const RGBToHexcode = (rgb: RGB): string => {
  let red = rgb.r.toString(16);
  let green = rgb.g.toString(16);
  let blue = rgb.b.toString(16);

  if (red.length == 1) red = "0" + red;
  if (green.length == 1) green = "0" + green;
  if (blue.length == 1) blue = "0" + blue;

  const hexcode = "#" + red + green + blue;

  if (isHexcode(hexcode)) {
    return hexcode;
  } else {
    console.error(
      "Error: improper rgb input, defaulting to black hexcode",
      rgb,
      hexcode
    );
    return BLACK_CODES.HEX;
  }
};

export const RGBToRGBA = (rgb: RGB): RGBA => {
  return { ...rgb, a: 1 };
};

export const RGBToHSL = (rgb: RGB): HSL => {
  // normalize RGB channels between 0 and 1
  const RGBr = rgb.r / 255;
  const RGBg = rgb.g / 255;
  const RGBb = rgb.b / 255;

  const formattedRGB: [string, number][] = [
    ["r", RGBr],
    ["g", RGBg],
    ["b", RGBb],
  ];
  const sortedChannels = formattedRGB.sort((a, b) => a[1] - b[1]);
  const [, minValue] = sortedChannels[0];
  const [maxChannel, maxValue] = sortedChannels[2];

  const isGray = minValue == maxValue;

  const luminance = (minValue + maxValue) / 2;
  const luminancePercent = luminance * 100;

  let saturation;
  if (isGray) {
    saturation = 0;
  } else if (luminance <= 0.5) {
    saturation = (maxValue - minValue) / (maxValue + minValue);
  } else {
    saturation = (maxValue - minValue) / (2 - maxValue - minValue);
  }
  const saturationPercent = saturation * 100;

  let hue;
  if (isGray) {
    hue = 0;
  } else if (maxChannel == "r") {
    hue = (RGBg - RGBb) / (maxValue - minValue);
  } else if (maxChannel == "g") {
    hue = 2 + (RGBb - RGBr) / (maxValue - minValue);
  } else if (maxChannel == "b") {
    hue = 4 + (RGBr - RGBg) / (maxValue - minValue);
  } else {
    hue = 0;
  }

  const hueDegrees = hue * 60;
  const positiveHueDegrees = hueDegrees < 0 ? hueDegrees + 360 : hueDegrees;
  return {
    h: Math.round(positiveHueDegrees),
    s: Math.round(saturationPercent),
    l: Math.round(luminancePercent),
  };
};

export const RGBToHSLA = (rgb: RGB): HSLA => {
  const HSL = RGBToHSL(rgb);
  return { ...HSL, a: 1 };
};
