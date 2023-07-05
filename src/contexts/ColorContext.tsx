import React from "react";
import type { ColorData, RGB, RGBA } from "../types/types";
import { ColorMode } from "../types/enums";
import { hexcodeToRGB, hexcodeToRGBA } from "../utils/translations.ts/fromHEX";

type ColorContextType = {
  color: ColorData;
  setMode: (mode: ColorMode) => void;
  setHEX: (hexcode: string) => void;
  setRGB: (rgb: RGB) => void;
  setRGBA: (rgba: RGBA) => void;
};

//todo make this a random color each refresh
const defaultData = {
  color: {
    colorMode: ColorMode.HEX,
    HEX: "#f20091",
    RGB: { r: 242, g: 0, b: 145 },
    RGBA: { r: 242, g: 0, b: 145, a: 1 },
  },
  setMode: () => {},
  setHEX: () => {},
  setRGB: () => {},
  setRGBA: () => {},
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
      HEX: hexcode,
      RGB: hexcodeToRGB(hexcode),
      RGBA: hexcodeToRGBA(hexcode),
    });
  }

  //todo write the translations
  function setRGB(rgb: RGB) {
    setColor({
      ...color,
      HEX: "#000000",
      RGB: rgb,
      RGBA: { ...rgb, a: 1 },
    });
  }

  //todo write the translations
  function setRGBA(rgba: RGBA) {
    setColor({
      ...color,
      HEX: "#000000",
      RGB: { r: rgba.r, g: rgba.g, b: rgba.b },
      RGBA: rgba,
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
