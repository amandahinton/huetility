import {
  ColorPicker,
  ScaleShades,
  ColorSpace,
  CSSValues,
  ScaleTints,
} from "./components";
import { ColorProvider } from "./contexts/ColorContext";
import "./App.css";
import "../src/components/index.css";

function App() {
  return (
    <ColorProvider>
      <h1>HUETILITY</h1>
      <ColorSpace />
      <ColorPicker />
      <CSSValues />
      <ScaleTints />
      <ScaleShades />
    </ColorProvider>
  );
}

export default App;
