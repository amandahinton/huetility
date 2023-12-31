import {
  ColorPicker,
  Contrast,
  CSSValues,
  Footer,
  Harmonies,
  Scales,
  Vision,
} from "components/index";
import { ColorProvider } from "contexts/ColorContext";
import "@/App.css";
import "components/index.css";

function App() {
  return (
    <ColorProvider>
      <h1 className="huetility-app-title">HUETILITY</h1>
      <div className="huetility-app-wrapper">
        <ColorPicker />
        <Contrast />
        <CSSValues />
        <Harmonies />
        <Scales />
        <Vision />
      </div>
      <Footer />
    </ColorProvider>
  );
}

export default App;
