import { ColorPicker, CSSValues, ScaleShades, ScaleTints, Testing } from "./components";
import { ColorProvider } from "./contexts/ColorContext";
import "./App.css";
import "../src/components/index.css";

function App() {
  return (
    <ColorProvider>
      <h1>HUETILITY</h1>
      <ColorPicker />
      <CSSValues />
      <ScaleTints />
      <ScaleShades />
      <hr />
      <Testing />
    </ColorProvider>
  );
}

export default App;
