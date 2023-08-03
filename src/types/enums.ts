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
  PROTOANOMALY = "protanomaly",
  PROTANOPIA = "protanopia",
  DEUTERANOMALY = "deuteranomaly",
  DEUTERANOPIA = "deuteranopia",
  TRITANOMALY = "tritanomaly",
  TRITANOPIA = "tritanopia",
  ACHROMATOMALY = "achromatomaly",
  ACHROMATOPSIA = "achromatopsia",
  DIMINISHED = "diminished",
}

export enum VisionDescription {
  trichromatic = "regular vision",
  protanomaly = "reduced long waves (red)",
  protanopia = "no long waves (red)",
  deuteranomaly = "reduced medium waves (green)",
  deuteranopia = "no medium waves (green)",
  tritanomaly = "reduced short waves (blue)",
  tritanopia = "no short waves (blue)",
  achromatomaly = "partial color blindness",
  achromatopsia = "complete color blindness",
  diminished = "blurred vision",
}
