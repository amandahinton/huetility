import { ColorMode, HarmonyCategory, VisionCategory } from "types/enums";

// sRGB color space: hsl(), hwb(), rgb();
// CIELAB color space: lab(), lch();
// Oklab color space: oklab(), oklch();
// also RGB but not in css: hsb/hsv

export type ColorData = {
  colorMode: ColorMode;
  HEX: string;
  HSL: HSL;
  HSLA: HSLA;
  HWB? = HWB;
  LAB? = LAB;
  OKLAB? = LAB;
  LCH? = LCH;
  OKLCH? = LCH;
  RGB: RGB;
  RGBA: RGBA;
};

export type ColorCodes = {
  HEX: string;
  RGB: RGB;
  RGBA: RGBA;
  HSL: HSL;
  HSLA: HSLA;
};

// HEX: # + 3 or 6 characters for rgb or 8 chars for for rgba

// hue: 0-360
// saturation: 0-100 (gray to full color)
// lightness (black or white added to hue): 0-100 (black to white)
export type HSL = {
  h: number;
  s: number;
  l: number;
};

// hue: 0-360
// saturation: 0-100 (gray to full color)
// lightness (black or white added to hue): 0-100 (black to white)
// alpha/transparency: 0-1 decimal
export type HSLA = {
  h: number;
  s: number;
  l: number;
  a: number;
};

// hue: 0-360
// whiteness: 0-100 (full color to white)
// blackness: 0-100 (full color to black)
export type HWB = {
  h: number;
  w: number;
  b: number;
};

// lightness
// red/green
// blue/yellow
export type LAB = {
  l: number;
  a: number;
  b: number;
};

// lightness (brightness vs illuminated white)
// chroma: 0-131
// hue
export type LCH = {
  l: number;
  c: number;
  h: number;
};

// red: 0-255 (none to full color)
// green: 0-255 (none to full color)
// blue: 0-255 (none to full color)
export type RGB = {
  r: number;
  g: number;
  b: number;
};

// red: 0-255 (none to full color)
// green: 0-255 (none to full color)
// blue: 0-255 (none to full color)
// alpha/transparency: 0-1 decimal
export type RGBA = {
  r: number;
  g: number;
  b: number;
  a: number;
};

type PerceivedColor = {
  name: VisionCategory;
  description: string;
  color: ColorCodes;
  prevalence?: string;
};

type Palette = {
  name: HarmonyCategory | string;
  paletteColors: ColorCodes[];
};
