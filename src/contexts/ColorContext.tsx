import React from "react";
import type { ColorData, RGB, RGBA } from "../types/types";
import { ColorMode } from "../types/enums";
import { hexToColor, rgbToColor, rgbaToColor } from "../utils/helpers.ts";

type ColorContextType = {
  color: ColorData;
  setMode: (mode: ColorMode) => void;
  setHEX: (hexcode: string) => void;
  setRGB: (rgb: RGB) => void;
  setRGBA: (rgba: RGBA) => void;
};

// todo make this a random color
const defaultData = {
  color: {
    colorMode: ColorMode.HEX,
    HEX: "#f20091",
    RGB: { r: 242, g: 0, b: 145 },
    RGBA: { r: 241, g: 0, b: 145, a: 1 },
  },
  setMode: () => undefined,
  setHEX: () => undefined,
  setRGB: () => undefined,
  setRGBA: () => undefined,
};

export const ColorContext = React.createContext<ColorContextType>(defaultData);

type ColorProviderProps = { children: React.ReactNode };

export function ColorProvider({ children }: ColorProviderProps) {
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

  const value = { color, setMode, setHEX, setRGB, setRGBA };

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
