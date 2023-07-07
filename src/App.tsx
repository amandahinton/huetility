import { CSSValues, ColorPicker, Shades, Swatch, Tints } from "./components";
import { ColorProvider } from "./contexts/ColorContext";
import "./App.css";

function App() {
  return (
    <ColorProvider>
      <h1>HUETILITY</h1>
      <ColorPicker />
      <Swatch />
      <CSSValues />
      <Tints />
      <Shades />
    </ColorProvider>
  );
}

export default App;
