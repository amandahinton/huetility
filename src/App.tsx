import { CSSValues, ColorPicker, Swatch } from "./components";
import { ColorProvider } from "./contexts/ColorContext";
import "./App.css";

function App() {
  return (
    <ColorProvider>
      <h1>Color</h1>
      <ColorPicker />
      <Swatch />
      <CSSValues />
    </ColorProvider>
  );
}

export default App;
