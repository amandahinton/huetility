import { CSSValues, ColorPicker, Shades, Swatch, Tints } from "./components";
import { ColorProvider } from "./contexts/ColorContext";
import "./App.css";

function App() {
  return (
    <ColorProvider>
      <ColorPicker />
      <Swatch />
      <CSSValues />
      <Tints />
      <Shades />
    </ColorProvider>
  );
}

export default App;
