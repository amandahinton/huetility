export enum ColorMode {
  HEX = "HEX",
  // HSL = "HSL",
  // HWB = "HWB",
  // LAB = "LAB",
  // LCH = "LCH",
  RGB = "RGB",
  RGBA = "RGBA",
}

export enum VisionCategory {
  TRICHROMATIC = "trichromatic",
  PROTANOPIA = "protanopia",
  PROTOANOMALY = "protanomaly",
  DEUTERANOPIA = "deuteranopia",
  DEUTERANOMALY = "deuteranomaly",
  TRITANOPIA = "tritanopia",
  TRITANOMALY = "tritanomaly",
  ACHROMATOPSIA = "achromatopsia",
  ACHROMATOMALY = "achromatomaly",
  DIMINISHED = "diminished",
}

export enum VisionDescription {
  trichromatic = "regular vision",
  protanopia = "no long (red) waves",
  protanomaly = "reduced long waves",
  deuteranopia = "no medium (green) waves",
  deuteranomaly = "reduced medium waves",
  tritanopia = "no short (blue) waves ",
  tritanomaly = "reduced short waves",
  achromatopsia = "complete color blindness",
  achromatomaly = "partial color blindness",
  diminished = "blurred vision",
}
