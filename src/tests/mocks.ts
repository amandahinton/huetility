import type { ColorContextType } from "contexts/ColorContext";
import { ColorMode } from "types/enums";

// Opaque black in all modes

export const mockBlackHEX: ColorContextType = {
  color: {
    colorMode: ColorMode.HEX,
    HEX: "#000000",
    HSL: { h: 0, s: 0, l: 0 },
    HSLA: { h: 0, s: 0, l: 0, a: 1 },
    RGB: { r: 0, g: 0, b: 0 },
    RGBA: { r: 0, g: 0, b: 0, a: 1 },
  },
  setMode: () => undefined,
  setHEX: () => undefined,
  setRGB: () => undefined,
  setRGBA: () => undefined,
  setHSL: () => undefined,
  setHSLA: () => undefined,
};

export const mockBlackHSL: ColorContextType = {
  color: {
    colorMode: ColorMode.HSL,
    HEX: "#000000",
    HSL: { h: 0, s: 0, l: 0 },
    HSLA: { h: 0, s: 0, l: 0, a: 1 },
    RGB: { r: 0, g: 0, b: 0 },
    RGBA: { r: 0, g: 0, b: 0, a: 1 },
  },
  setMode: () => undefined,
  setHEX: () => undefined,
  setRGB: () => undefined,
  setRGBA: () => undefined,
  setHSL: () => undefined,
  setHSLA: () => undefined,
};

export const mockBlackHSLA: ColorContextType = {
  color: {
    colorMode: ColorMode.HSLA,
    HEX: "#000000",
    HSL: { h: 0, s: 0, l: 0 },
    HSLA: { h: 0, s: 0, l: 0, a: 1 },
    RGB: { r: 0, g: 0, b: 0 },
    RGBA: { r: 0, g: 0, b: 0, a: 1 },
  },
  setMode: () => undefined,
  setHEX: () => undefined,
  setRGB: () => undefined,
  setRGBA: () => undefined,
  setHSL: () => undefined,
  setHSLA: () => undefined,
};

export const mockBlackRGB: ColorContextType = {
  color: {
    colorMode: ColorMode.RGB,
    HEX: "#000000",
    HSL: { h: 0, s: 0, l: 0 },
    HSLA: { h: 0, s: 0, l: 0, a: 1 },
    RGB: { r: 0, g: 0, b: 0 },
    RGBA: { r: 0, g: 0, b: 0, a: 1 },
  },
  setMode: () => undefined,
  setHEX: () => undefined,
  setRGB: () => undefined,
  setRGBA: () => undefined,
  setHSL: () => undefined,
  setHSLA: () => undefined,
};

export const mockBlackRGBA: ColorContextType = {
  color: {
    colorMode: ColorMode.RGBA,
    HEX: "#000000",
    HSL: { h: 0, s: 0, l: 0 },
    HSLA: { h: 0, s: 0, l: 0, a: 1 },
    RGB: { r: 0, g: 0, b: 0 },
    RGBA: { r: 0, g: 0, b: 0, a: 1 },
  },
  setMode: () => undefined,
  setHEX: () => undefined,
  setRGB: () => undefined,
  setRGBA: () => undefined,
  setHSL: () => undefined,
  setHSLA: () => undefined,
};

// Transparent 25% black in all modes

export const mock25BlackHEX: ColorContextType = {
  color: {
    colorMode: ColorMode.HEX,
    HEX: "#00000040",
    HSL: { h: 0, s: 0, l: 0 },
    HSLA: { h: 0, s: 0, l: 0, a: 0.5 },
    RGB: { r: 0, g: 0, b: 0 },
    RGBA: { r: 0, g: 0, b: 0, a: 0.5 },
  },
  setMode: () => undefined,
  setHEX: () => undefined,
  setRGB: () => undefined,
  setRGBA: () => undefined,
  setHSL: () => undefined,
  setHSLA: () => undefined,
};

export const mock25BlackHSL: ColorContextType = {
  color: {
    colorMode: ColorMode.HSL,
    HEX: "#00000040",
    HSL: { h: 0, s: 0, l: 0 },
    HSLA: { h: 0, s: 0, l: 0, a: 0.5 },
    RGB: { r: 0, g: 0, b: 0 },
    RGBA: { r: 0, g: 0, b: 0, a: 0.5 },
  },
  setMode: () => undefined,
  setHEX: () => undefined,
  setRGB: () => undefined,
  setRGBA: () => undefined,
  setHSL: () => undefined,
  setHSLA: () => undefined,
};

export const mock25BlackHSLA: ColorContextType = {
  color: {
    colorMode: ColorMode.HSLA,
    HEX: "#00000040",
    HSL: { h: 0, s: 0, l: 0 },
    HSLA: { h: 0, s: 0, l: 0, a: 0.5 },
    RGB: { r: 0, g: 0, b: 0 },
    RGBA: { r: 0, g: 0, b: 0, a: 0.5 },
  },
  setMode: () => undefined,
  setHEX: () => undefined,
  setRGB: () => undefined,
  setRGBA: () => undefined,
  setHSL: () => undefined,
  setHSLA: () => undefined,
};

export const mock25BlackRGB: ColorContextType = {
  color: {
    colorMode: ColorMode.RGB,
    HEX: "#00000040",
    HSL: { h: 0, s: 0, l: 0 },
    HSLA: { h: 0, s: 0, l: 0, a: 0.5 },
    RGB: { r: 0, g: 0, b: 0 },
    RGBA: { r: 0, g: 0, b: 0, a: 0.5 },
  },
  setMode: () => undefined,
  setHEX: () => undefined,
  setRGB: () => undefined,
  setRGBA: () => undefined,
  setHSL: () => undefined,
  setHSLA: () => undefined,
};

export const mock25BlackRGBA: ColorContextType = {
  color: {
    colorMode: ColorMode.RGBA,
    HEX: "#00000040",
    HSL: { h: 0, s: 0, l: 0 },
    HSLA: { h: 0, s: 0, l: 0, a: 0.5 },
    RGB: { r: 0, g: 0, b: 0 },
    RGBA: { r: 0, g: 0, b: 0, a: 0.5 },
  },
  setMode: () => undefined,
  setHEX: () => undefined,
  setRGB: () => undefined,
  setRGBA: () => undefined,
  setHSL: () => undefined,
  setHSLA: () => undefined,
};

// Opaque white in all modes

export const mockWhiteHEX: ColorContextType = {
  color: {
    colorMode: ColorMode.HEX,
    HEX: "#ffffff",
    HSL: { h: 0, s: 0, l: 100 },
    HSLA: { h: 0, s: 0, l: 100, a: 1 },
    RGB: { r: 255, g: 255, b: 255 },
    RGBA: { r: 255, g: 255, b: 255, a: 1 },
  },
  setMode: () => undefined,
  setHEX: () => undefined,
  setRGB: () => undefined,
  setRGBA: () => undefined,
  setHSL: () => undefined,
  setHSLA: () => undefined,
};

export const mockWhiteHSL: ColorContextType = {
  color: {
    colorMode: ColorMode.HSL,
    HEX: "#ffffff",
    HSL: { h: 0, s: 0, l: 100 },
    HSLA: { h: 0, s: 0, l: 100, a: 1 },
    RGB: { r: 255, g: 255, b: 255 },
    RGBA: { r: 255, g: 255, b: 255, a: 1 },
  },
  setMode: () => undefined,
  setHEX: () => undefined,
  setRGB: () => undefined,
  setRGBA: () => undefined,
  setHSL: () => undefined,
  setHSLA: () => undefined,
};

export const mockWhiteHSLA: ColorContextType = {
  color: {
    colorMode: ColorMode.HSLA,
    HEX: "#ffffff",
    HSL: { h: 0, s: 0, l: 100 },
    HSLA: { h: 0, s: 0, l: 100, a: 1 },
    RGB: { r: 255, g: 255, b: 255 },
    RGBA: { r: 255, g: 255, b: 255, a: 1 },
  },
  setMode: () => undefined,
  setHEX: () => undefined,
  setRGB: () => undefined,
  setRGBA: () => undefined,
  setHSL: () => undefined,
  setHSLA: () => undefined,
};

export const mockWhiteRGB: ColorContextType = {
  color: {
    colorMode: ColorMode.RGB,
    HEX: "#ffffff",
    HSL: { h: 0, s: 0, l: 100 },
    HSLA: { h: 0, s: 0, l: 100, a: 1 },
    RGB: { r: 255, g: 255, b: 255 },
    RGBA: { r: 255, g: 255, b: 255, a: 1 },
  },
  setMode: () => undefined,
  setHEX: () => undefined,
  setRGB: () => undefined,
  setRGBA: () => undefined,
  setHSL: () => undefined,
  setHSLA: () => undefined,
};

export const mockWhiteRGBA: ColorContextType = {
  color: {
    colorMode: ColorMode.RGBA,
    HEX: "#ffffff",
    HSL: { h: 0, s: 0, l: 100 },
    HSLA: { h: 0, s: 0, l: 100, a: 1 },
    RGB: { r: 255, g: 255, b: 255 },
    RGBA: { r: 255, g: 255, b: 255, a: 1 },
  },
  setMode: () => undefined,
  setHEX: () => undefined,
  setRGB: () => undefined,
  setRGBA: () => undefined,
  setHSL: () => undefined,
  setHSLA: () => undefined,
};

// Transparent 75% white in all modes

export const mock75WhiteHEX: ColorContextType = {
  color: {
    colorMode: ColorMode.HEX,
    HEX: "#ffffffbf",
    HSL: { h: 0, s: 0, l: 100 },
    HSLA: { h: 0, s: 0, l: 100, a: 0.75 },
    RGB: { r: 255, g: 255, b: 255 },
    RGBA: { r: 255, g: 255, b: 255, a: 0.75 },
  },
  setMode: () => undefined,
  setHEX: () => undefined,
  setRGB: () => undefined,
  setRGBA: () => undefined,
  setHSL: () => undefined,
  setHSLA: () => undefined,
};

export const mock75WhiteHSL: ColorContextType = {
  color: {
    colorMode: ColorMode.HSL,
    HEX: "#ffffffbf",
    HSL: { h: 0, s: 0, l: 100 },
    HSLA: { h: 0, s: 0, l: 100, a: 0.75 },
    RGB: { r: 255, g: 255, b: 255 },
    RGBA: { r: 255, g: 255, b: 255, a: 0.75 },
  },
  setMode: () => undefined,
  setHEX: () => undefined,
  setRGB: () => undefined,
  setRGBA: () => undefined,
  setHSL: () => undefined,
  setHSLA: () => undefined,
};

export const mock75WhiteHSLA: ColorContextType = {
  color: {
    colorMode: ColorMode.HSLA,
    HEX: "#ffffffbf",
    HSL: { h: 0, s: 0, l: 100 },
    HSLA: { h: 0, s: 0, l: 100, a: 0.75 },
    RGB: { r: 255, g: 255, b: 255 },
    RGBA: { r: 255, g: 255, b: 255, a: 0.75 },
  },
  setMode: () => undefined,
  setHEX: () => undefined,
  setRGB: () => undefined,
  setRGBA: () => undefined,
  setHSL: () => undefined,
  setHSLA: () => undefined,
};

export const mock75WhiteRGB: ColorContextType = {
  color: {
    colorMode: ColorMode.RGB,
    HEX: "#ffffffbf",
    HSL: { h: 0, s: 0, l: 100 },
    HSLA: { h: 0, s: 0, l: 100, a: 0.75 },
    RGB: { r: 255, g: 255, b: 255 },
    RGBA: { r: 255, g: 255, b: 255, a: 0.75 },
  },
  setMode: () => undefined,
  setHEX: () => undefined,
  setRGB: () => undefined,
  setRGBA: () => undefined,
  setHSL: () => undefined,
  setHSLA: () => undefined,
};

export const mock75WhiteRGBA: ColorContextType = {
  color: {
    colorMode: ColorMode.RGBA,
    HEX: "#ffffffbf",
    HSL: { h: 0, s: 0, l: 100 },
    HSLA: { h: 0, s: 0, l: 100, a: 0.75 },
    RGB: { r: 255, g: 255, b: 255 },
    RGBA: { r: 255, g: 255, b: 255, a: 0.75 },
  },
  setMode: () => undefined,
  setHEX: () => undefined,
  setRGB: () => undefined,
  setRGBA: () => undefined,
  setHSL: () => undefined,
  setHSLA: () => undefined,
};

// Opaque pink in all modes

export const mockPinkHEX: ColorContextType = {
  color: {
    colorMode: ColorMode.HEX,
    HEX: "#f20091",
    HSL: { h: 324, s: 100, l: 47 },
    HSLA: { h: 324, s: 100, l: 47, a: 1 },
    RGB: { r: 242, g: 0, b: 145 },
    RGBA: { r: 242, g: 0, b: 145, a: 1 },
  },
  setMode: () => undefined,
  setHEX: () => undefined,
  setRGB: () => undefined,
  setRGBA: () => undefined,
  setHSL: () => undefined,
  setHSLA: () => undefined,
};

export const mockPinkHSL: ColorContextType = {
  color: {
    colorMode: ColorMode.HSL,
    HEX: "#f20091",
    HSL: { h: 324, s: 100, l: 47 },
    HSLA: { h: 324, s: 100, l: 47, a: 1 },
    RGB: { r: 242, g: 0, b: 145 },
    RGBA: { r: 242, g: 0, b: 145, a: 1 },
  },
  setMode: () => undefined,
  setHEX: () => undefined,
  setRGB: () => undefined,
  setRGBA: () => undefined,
  setHSL: () => undefined,
  setHSLA: () => undefined,
};

export const mockPinkHSLA: ColorContextType = {
  color: {
    colorMode: ColorMode.HSLA,
    HEX: "#f20091",
    HSL: { h: 324, s: 100, l: 47 },
    HSLA: { h: 324, s: 100, l: 47, a: 1 },
    RGB: { r: 242, g: 0, b: 145 },
    RGBA: { r: 242, g: 0, b: 145, a: 1 },
  },
  setMode: () => undefined,
  setHEX: () => undefined,
  setRGB: () => undefined,
  setRGBA: () => undefined,
  setHSL: () => undefined,
  setHSLA: () => undefined,
};

export const mockPinkRGB: ColorContextType = {
  color: {
    colorMode: ColorMode.RGB,
    HEX: "#f20091",
    HSL: { h: 324, s: 100, l: 47 },
    HSLA: { h: 324, s: 100, l: 47, a: 1 },
    RGB: { r: 242, g: 0, b: 145 },
    RGBA: { r: 242, g: 0, b: 145, a: 1 },
  },
  setMode: () => undefined,
  setHEX: () => undefined,
  setRGB: () => undefined,
  setRGBA: () => undefined,
  setHSL: () => undefined,
  setHSLA: () => undefined,
};

export const mockPinkRGBA: ColorContextType = {
  color: {
    colorMode: ColorMode.RGBA,
    HEX: "#f20091",
    HSL: { h: 324, s: 100, l: 47 },
    HSLA: { h: 324, s: 100, l: 47, a: 1 },
    RGB: { r: 242, g: 0, b: 145 },
    RGBA: { r: 242, g: 0, b: 145, a: 1 },
  },
  setMode: () => undefined,
  setHEX: () => undefined,
  setRGB: () => undefined,
  setRGBA: () => undefined,
  setHSL: () => undefined,
  setHSLA: () => undefined,
};

// Transparent 50% pink in all modes

export const mock50PinkHEX: ColorContextType = {
  color: {
    colorMode: ColorMode.HEX,
    HEX: "#f2009180",
    HSL: { h: 324, s: 100, l: 47 },
    HSLA: { h: 324, s: 100, l: 47, a: 0.5 },
    RGB: { r: 242, g: 0, b: 145 },
    RGBA: { r: 242, g: 0, b: 145, a: 0.5 },
  },
  setMode: () => undefined,
  setHEX: () => undefined,
  setRGB: () => undefined,
  setRGBA: () => undefined,
  setHSL: () => undefined,
  setHSLA: () => undefined,
};

export const mock50PinkHSL: ColorContextType = {
  color: {
    colorMode: ColorMode.HSL,
    HEX: "#f2009180",
    HSL: { h: 324, s: 100, l: 47 },
    HSLA: { h: 324, s: 100, l: 47, a: 0.5 },
    RGB: { r: 242, g: 0, b: 145 },
    RGBA: { r: 242, g: 0, b: 145, a: 0.5 },
  },
  setMode: () => undefined,
  setHEX: () => undefined,
  setRGB: () => undefined,
  setRGBA: () => undefined,
  setHSL: () => undefined,
  setHSLA: () => undefined,
};

export const mock50PinkHSLA: ColorContextType = {
  color: {
    colorMode: ColorMode.HSLA,
    HEX: "#f2009180",
    HSL: { h: 324, s: 100, l: 47 },
    HSLA: { h: 324, s: 100, l: 47, a: 0.5 },
    RGB: { r: 242, g: 0, b: 145 },
    RGBA: { r: 242, g: 0, b: 145, a: 0.5 },
  },
  setMode: () => undefined,
  setHEX: () => undefined,
  setRGB: () => undefined,
  setRGBA: () => undefined,
  setHSL: () => undefined,
  setHSLA: () => undefined,
};

export const mock50PinkRGB: ColorContextType = {
  color: {
    colorMode: ColorMode.RGBA,
    HEX: "#f2009180",
    HSL: { h: 324, s: 100, l: 47 },
    HSLA: { h: 324, s: 100, l: 47, a: 0.5 },
    RGB: { r: 242, g: 0, b: 145 },
    RGBA: { r: 242, g: 0, b: 145, a: 0.5 },
  },
  setMode: () => undefined,
  setHEX: () => undefined,
  setRGB: () => undefined,
  setRGBA: () => undefined,
  setHSL: () => undefined,
  setHSLA: () => undefined,
};

export const mock50PinkRGBA: ColorContextType = {
  color: {
    colorMode: ColorMode.RGBA,
    HEX: "#f2009180",
    HSL: { h: 324, s: 100, l: 47 },
    HSLA: { h: 324, s: 100, l: 47, a: 0.5 },
    RGB: { r: 242, g: 0, b: 145 },
    RGBA: { r: 242, g: 0, b: 145, a: 0.5 },
  },
  setMode: () => undefined,
  setHEX: () => undefined,
  setRGB: () => undefined,
  setRGBA: () => undefined,
  setHSL: () => undefined,
  setHSLA: () => undefined,
};

// Opaque teal in all modes

export const mockTealHEX: ColorContextType = {
  color: {
    colorMode: ColorMode.HEX,
    HEX: "#186276",
    HSL: { h: 193, s: 66, l: 28 },
    HSLA: { h: 193, s: 66, l: 28, a: 1 },
    RGB: { r: 24, g: 98, b: 118 },
    RGBA: { r: 24, g: 98, b: 118, a: 1 },
  },
  setMode: () => undefined,
  setHEX: () => undefined,
  setRGB: () => undefined,
  setRGBA: () => undefined,
  setHSL: () => undefined,
  setHSLA: () => undefined,
};

export const mockTealHSL: ColorContextType = {
  color: {
    colorMode: ColorMode.HSL,
    HEX: "#186276",
    HSL: { h: 193, s: 66, l: 28 },
    HSLA: { h: 193, s: 66, l: 28, a: 1 },
    RGB: { r: 24, g: 98, b: 118 },
    RGBA: { r: 24, g: 98, b: 118, a: 1 },
  },
  setMode: () => undefined,
  setHEX: () => undefined,
  setRGB: () => undefined,
  setRGBA: () => undefined,
  setHSL: () => undefined,
  setHSLA: () => undefined,
};

export const mockTealHSLA: ColorContextType = {
  color: {
    colorMode: ColorMode.HSLA,
    HEX: "#186276",
    HSL: { h: 193, s: 66, l: 28 },
    HSLA: { h: 193, s: 66, l: 28, a: 1 },
    RGB: { r: 24, g: 98, b: 118 },
    RGBA: { r: 24, g: 98, b: 118, a: 1 },
  },
  setMode: () => undefined,
  setHEX: () => undefined,
  setRGB: () => undefined,
  setRGBA: () => undefined,
  setHSL: () => undefined,
  setHSLA: () => undefined,
};

export const mockTealRGB: ColorContextType = {
  color: {
    colorMode: ColorMode.RGB,
    HEX: "#186276",
    HSL: { h: 193, s: 66, l: 28 },
    HSLA: { h: 193, s: 66, l: 28, a: 1 },
    RGB: { r: 24, g: 98, b: 118 },
    RGBA: { r: 24, g: 98, b: 118, a: 1 },
  },
  setMode: () => undefined,
  setHEX: () => undefined,
  setRGB: () => undefined,
  setRGBA: () => undefined,
  setHSL: () => undefined,
  setHSLA: () => undefined,
};

export const mockTealRGBA: ColorContextType = {
  color: {
    colorMode: ColorMode.RGBA,
    HEX: "#186276",
    HSL: { h: 193, s: 66, l: 28 },
    HSLA: { h: 193, s: 66, l: 28, a: 1 },
    RGB: { r: 24, g: 98, b: 118 },
    RGBA: { r: 24, g: 98, b: 118, a: 1 },
  },
  setMode: () => undefined,
  setHEX: () => undefined,
  setRGB: () => undefined,
  setRGBA: () => undefined,
  setHSL: () => undefined,
  setHSLA: () => undefined,
};

// Transparent 80% teal in all modes

export const mock80TealHEX: ColorContextType = {
  color: {
    colorMode: ColorMode.HEX,
    HEX: "#186276cc",
    HSL: { h: 193, s: 66, l: 28 },
    HSLA: { h: 193, s: 66, l: 28, a: 0.8 },
    RGB: { r: 24, g: 98, b: 0.818 },
    RGBA: { r: 24, g: 98, b: 118, a: 1 },
  },
  setMode: () => undefined,
  setHEX: () => undefined,
  setRGB: () => undefined,
  setRGBA: () => undefined,
  setHSL: () => undefined,
  setHSLA: () => undefined,
};

export const mock80TealHSL: ColorContextType = {
  color: {
    colorMode: ColorMode.HSL,
    HEX: "#186276cc",
    HSL: { h: 193, s: 66, l: 28 },
    HSLA: { h: 193, s: 66, l: 28, a: 0.8 },
    RGB: { r: 24, g: 98, b: 0.818 },
    RGBA: { r: 24, g: 98, b: 118, a: 1 },
  },
  setMode: () => undefined,
  setHEX: () => undefined,
  setRGB: () => undefined,
  setRGBA: () => undefined,
  setHSL: () => undefined,
  setHSLA: () => undefined,
};

export const mock80TealHSLA: ColorContextType = {
  color: {
    colorMode: ColorMode.HSLA,
    HEX: "#186276cc",
    HSL: { h: 193, s: 66, l: 28 },
    HSLA: { h: 193, s: 66, l: 28, a: 0.8 },
    RGB: { r: 24, g: 98, b: 0.818 },
    RGBA: { r: 24, g: 98, b: 118, a: 1 },
  },
  setMode: () => undefined,
  setHEX: () => undefined,
  setRGB: () => undefined,
  setRGBA: () => undefined,
  setHSL: () => undefined,
  setHSLA: () => undefined,
};

export const mock80TealRGB: ColorContextType = {
  color: {
    colorMode: ColorMode.RGB,
    HEX: "#186276cc",
    HSL: { h: 193, s: 66, l: 28 },
    HSLA: { h: 193, s: 66, l: 28, a: 0.8 },
    RGB: { r: 24, g: 98, b: 0.818 },
    RGBA: { r: 24, g: 98, b: 118, a: 1 },
  },
  setMode: () => undefined,
  setHEX: () => undefined,
  setRGB: () => undefined,
  setRGBA: () => undefined,
  setHSL: () => undefined,
  setHSLA: () => undefined,
};

export const mock80TealRGBA: ColorContextType = {
  color: {
    colorMode: ColorMode.RGBA,
    HEX: "#186276cc",
    HSL: { h: 193, s: 66, l: 28 },
    HSLA: { h: 193, s: 66, l: 28, a: 0.8 },
    RGB: { r: 24, g: 98, b: 0.818 },
    RGBA: { r: 24, g: 98, b: 118, a: 1 },
  },
  setMode: () => undefined,
  setHEX: () => undefined,
  setRGB: () => undefined,
  setRGBA: () => undefined,
  setHSL: () => undefined,
  setHSLA: () => undefined,
};
