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
  TRICHROMATIC = "Trichromatic",
  PROTOANOMALY = "Protanomaly",
  PROTANOPIA = "Protanopia",
  DEUTERANOMALY = "Deuteranomaly",
  DEUTERANOPIA = "Deuteranopia",
  TRITANOMALY = "Tritanomaly",
  TRITANOPIA = "Tritanopia",
  ACHROMATOMALY = "Achromatomaly",
  ACHROMATOPSIA = "Achromatopsia",
  DIMINISHED = "Diminished",
}

export enum VisionDescription {
  Trichromatic = "regular vision",
  Protanomaly = "reduced red",
  Protanopia = "no red",
  Deuteranomaly = "reduced green",
  Deuteranopia = "no green",
  Tritanomaly = "reduced blue-yellow",
  Tritanopia = "no blue-yellow",
  Achromatomaly = "partial color blindness",
  Achromatopsia = "complete color blindness",
  Diminished = "blurred vision",
}
