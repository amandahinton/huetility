import React from "react";
import { ColorPicker, SwatchPreview } from "./components";
import type { ColorData } from "./types/types";
import { ColorMode } from "./types/enums";
import "./App.css";

const defaultData = {
  colorMode: ColorMode.HEX,
  HEX: "#f20091",
};

export const ColorContext = React.createContext<ColorData>(defaultData);

function App() {
  const [color, setColor] = React.useState<ColorData>(defaultData);

  return (
    <ColorContext.Provider value={color}>
      <h1>Color</h1>
      <ColorPicker />
      <SwatchPreview />
    </ColorContext.Provider>
  );
}

export default App;
