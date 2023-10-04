export const BLACK_HEXCODE = "#000000";
export const BLACK_HSL = { h: 0, s: 0, l: 0 };
export const BLACK_HSLA = { h: 0, s: 0, l: 0, a: 1 };
export const BLACK_RGB = { r: 0, g: 0, b: 0 };
export const BLACK_RGBA = { r: 0, g: 0, b: 0, a: 1 };
export const BLACK_CODES = {
  HEX: BLACK_HEXCODE,
  HSL: BLACK_HSL,
  HSLA: BLACK_HSLA,
  RGB: BLACK_RGB,
  RGBA: BLACK_RGBA,
};

export const WHITE_HEXCODE = "#ffffff";
export const WHITE_HSL = { h: 0, s: 0, l: 100 };
export const WHITE_HSLA = { h: 0, s: 0, l: 100, a: 1 };
export const WHITE_RGB = { r: 255, g: 255, b: 255 };
export const WHITE_RGBA = { r: 255, g: 255, b: 255, a: 1 };

export const WHITE_CODES = {
  HEX: WHITE_HEXCODE,
  HSL: WHITE_HSL,
  HSLA: WHITE_HSLA,
  RGB: WHITE_RGB,
  RGBA: WHITE_RGBA,
};

export const HUES = [
  { id: 0, descriptor: "R - red", degree: 0, cssRGB: "rgb(255, 0, 0)" },
  { id: 1, descriptor: "orange", degree: 30, cssRGB: "rgb(255, 128, 0)" },
  { id: 2, descriptor: "yellow", degree: 60, cssRGB: "rgb(255, 255, 0)" },
  { id: 3, descriptor: "lime", degree: 90, cssRGB: "rgb(128, 255, 0)" },
  { id: 4, descriptor: "G - green", degree: 120, cssRGB: "rgb(0, 255, 0)" },
  { id: 5, descriptor: "mint", degree: 150, cssRGB: "rgb(0, 255, 128)" },
  { id: 6, descriptor: "cyan", degree: 180, cssRGB: "rgb(0, 255, 255)" },
  { id: 7, descriptor: "cornflower", degree: 210, cssRGB: "rgb(0, 128, 255)" },
  { id: 8, descriptor: "B - blue", degree: 240, cssRGB: "rgb(0, 0, 255)" },
  { id: 9, descriptor: "violet", degree: 270, cssRGB: "rgb(128, 0, 255)" },
  { id: 10, descriptor: "magenta", degree: 300, cssRGB: "rgb(255, 0, 255)" },
  { id: 11, descriptor: "pink", degree: 330, cssRGB: "rgb(255, 0, 128)" },
  { id: 12, descriptor: "R - red", degree: 360, cssRGB: "rgb(255, 0, 0)" },
];

// COLOR VISION DEFINCY MATRICES
// https://www.inf.ufrgs.br/~oliveira/pubs_files/CVD_Simulation/CVD_Simulation.html
// //https://ixora.io/projects/colorblindness/color-blindness-simulation-research/
// COLOR VISION DEFICIENCY SPECTRUM SIMS
// http://cvrl.ucl.ac.uk/gallery/Dichromat_spectra.htm
// https://www.myndex.com/CVD/

// protanomaly .5 severity
export const PROTANOMALY_MATRIX = [
  [0.458064, 0.679578, -0.137642],
  [0.092785, 0.846313, 0.060902],
  [-0.007494, -0.016807, 1.024301],
];

//protanomaly 1.0 highest severity dichromacy
export const PROTANOPIA_MATRIX = [
  [0.152286, 1.052583, -0.204868],
  [0.114503, 0.786281, 0.099216],
  [-0.003882, -0.048116, 1.051998],
];

// deuteranomaly .5 severity
export const DEUTERANOMALY_MATRIX = [
  [0.547494, 0.607765, -0.155259],
  [0.181692, 0.781742, 0.036566],
  [-0.01041, 0.027275, 0.983136],
];

//deuteranomaly 1.0 highest severity dichromacy
export const DEUTERANOPIA_MATRIX = [
  [0.367322, 0.860646, -0.227968],
  [0.280085, 0.672501, 0.047413],
  [-0.01182, 0.04294, 0.968881],
];

// tritanomaly .5 severity
export const TRITANOMALY_MATRIX = [
  [1.017277, 0.027029, -0.044306],
  [-0.006113, 0.958479, 0.047634],
  [0.006379, 0.248708, 0.744913],
];

//tritanomaly 1.0 highest severity dichromacy
export const TRITANOPIA_MATRIX = [
  [1.255528, -0.076749, -0.178779],
  [-0.078411, 0.930809, 0.147602],
  [0.004733, 0.691367, 0.3039],
];

// shades of gray
export const ACHROMATOPSIA_MATRIX = [
  [0.212656, 0.715158, 0.072186],
  [0.212656, 0.715158, 0.072186],
  [0.212656, 0.715158, 0.072186],
];

// blue cone monochromacy, incomplete achromatopsia,
// no medium or long cones, photophobia
export const MONOCHROMACY_MATRIX = [
  [0.01775, 0.10945, 0.87262],
  [0.01775, 0.10945, 0.87262],
  [0.01775, 0.10945, 0.87262],
];
