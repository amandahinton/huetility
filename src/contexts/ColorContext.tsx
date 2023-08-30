import React from "react";
import { ColorMode } from "types/enums";
import type { ColorData, HSL, HSLA, RGB, RGBA } from "types/types";
import { randomHue } from "@/utils/helpers";
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

const randomColor = randomHue();
const defaultData = {
  color: {
    colorMode: ColorMode.RGBA,
    HEX: randomColor.HEX,
    HSL: randomColor.HSL,
    HSLA: randomColor.HSLA,
    RGB: randomColor.RGB,
    RGBA: randomColor.RGBA,
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
