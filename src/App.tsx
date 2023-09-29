import {
  ColorPicker,
  Contrast,
  CSSValues,
  Harmonies,
  Scales,
  // Testing,
  Vision,
} from "components/index";
import { ColorProvider } from "contexts/ColorContext";
import "@/App.css";
import "components/index.css";

function App() {
  return (
    <ColorProvider>
      <h1 className="huetility-app-title">HUETILITY</h1>
      <ColorPicker />
      <Contrast />
      <CSSValues />
      <Harmonies />
      <Scales />
      <Vision /> 

      {/* <hr />
      <Testing /> */}
    </ColorProvider>
  );
}

export default App;
