import React from "react";
import { ColorMode } from "types/enums";
import type { ColorData, HSL, HSLA, RGB, RGBA } from "types/types";
import {
  hexToColor,
  hslToColor,
  hslaToColor,
  rgbToColor,
  rgbaToColor,
} from "@/utils/translations";

type ColorContextType = {
  color: ColorData;
  setMode: (mode: ColorMode) => void;
  setHEX: (hexcode: string) => void;
  setRGB: (rgb: RGB) => void;
  setRGBA: (rgba: RGBA) => void;
  setHSL: (hsl: HSL) => void;
  setHSLA: (hsla: HSLA) => void;
};

// todo make this a random color
const defaultData = {
  color: {
    colorMode: ColorMode.RGBA,
    HEX: "#f20091",
    RGB: { r: 242, g: 0, b: 145 },
    RGBA: { r: 242, g: 0, b: 145, a: 1 },
    HSL: { h: 324, s: 100, l: 47 },
    HSLA: { h: 324, s: 100, l: 47, a: 1 },
  },
  setMode: () => undefined,
  setHEX: () => undefined,
  setRGB: () => undefined,
  setRGBA: () => undefined,
  setHSL: () => undefined,
  setHSLA: () => undefined,
};

export const ColorContext = React.createContext<ColorContextType>(defaultData);

export function ColorProvider({ children }: { children: React.ReactNode }) {
  const [color, setColor] = React.useState<ColorData>(defaultData.color);

  function setMode(mode: ColorMode) {
    setColor({
      ...color,
      colorMode: mode,
    });
  }

  function setHEX(hexcode: string) {
    setColor({
      ...color,
      ...hexToColor(hexcode),
    });
  }

  function setRGB(rgb: RGB) {
    setColor({
      ...color,
      ...rgbToColor(rgb),
    });
  }

  function setRGBA(rgba: RGBA) {
    setColor({
      ...color,
      ...rgbaToColor(rgba),
    });
  }

  function setHSL(hsl: HSL) {
    setColor({
      ...color,
      ...hslToColor(hsl),
    });
  }

  function setHSLA(hsla: HSLA) {
    setColor({
      ...color,
      ...hslaToColor(hsla),
    });
  }

  const value = { color, setMode, setHEX, setHSL, setHSLA, setRGB, setRGBA };

  return (
    <ColorContext.Provider value={value}>{children}</ColorContext.Provider>
  );
}

export function useColor() {
  const context = React.useContext(ColorContext);
  if (context === undefined) {
    throw new Error("call useColor within ColorProvider");
  }
  return context;
}
