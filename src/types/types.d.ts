import { ColorMode } from "./enums";

export type ColorData = {
  colorMode?: ColorMode;
  HEX?: string;
  HSL?: HSL;
  HWB? = HWB;
  LAB? = LAB;
  LCH? = LCH;
  RGB?: RGB;
  RGBA?: RGBA;
};
 
// HEX: # + 3 or 6 characters for rgb, # + 8 chars for for rgba

// hue: 0-360
// saturation: 0-100 (gray to full color)
// lightness (black or white added to hue): 0-100 (black to white)
export type HSL = {
  h: string;
  s: string;
  l: string;
};

// hue: 0-360
// whiteness: 0-100 (full color to white)
// blackness: 0-100 (full color to black)
export type HWB = {
  h: string;
  w: string;
  b: string;
};

// lightness, red/green, blue/yellow
export type LAB = {
  l: string;
  a: string;
  b: string;
};

// lightness (brightness vs illuminated white)
// chroma: 0-131
// hue
export type LCH = {
  l: string;
  c: string;
  h: string;
};

// red: 0-255 (none to full color)
// green: 0-255 (none to full color)
// blue: 0-255 (none to full color)
export type RGB = {
  r: string;
  g: string;
  b: string;
};

// red: 0-255 (none to full color)
// green: 0-255 (none to full color)
// blue: 0-255 (none to full color)
// alpha/transparency: 0-1 decimal
export type RGBA = {
  r: string;
  g: string;
  b: string;
  a: string;
};
