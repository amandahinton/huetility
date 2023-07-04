import React from "react";
import { ColorPicker, Swatch } from "./components";
import type { ColorData } from "./types/types";
import { ColorMode } from "./types/enums";
import "./App.css";

type ColorContextType = {
  color: ColorData;
  setColor: (color: ColorData) => void;
};

const defaultData = {
  color: {
    colorMode: ColorMode.HEX,
    HEX: "#f20091",
  },
  setColor: () => {},
};

export const ColorContext = React.createContext<ColorContextType>(defaultData);

function App() {
  const [color, setColor] = React.useState<ColorData>(defaultData.color);

  return (
    <ColorContext.Provider value={{ color, setColor }}>
      <h1>Color</h1>
      <ColorPicker />
      <Swatch />
    </ColorContext.Provider>
  );
}

export default App;
