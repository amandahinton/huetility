import {
  ColorPicker,
  Contrast,
  CSSValues,
  Harmonies,
  ScaleShades,
  ScaleTints,
  Testing,
  Vision,
} from "components/index";
import { ColorProvider } from "contexts/ColorContext";
import "@/App.css";
import "components/index.css";

function App() {
  return (
    <ColorProvider>
      <h1>HUETILITY</h1>
      <ColorPicker />
      <Contrast />
      <CSSValues />
      <Harmonies />
      <ScaleTints />
      <ScaleShades />
      <Vision />
      <hr />
      <Testing />
    </ColorProvider>
  );
}

export default App;
