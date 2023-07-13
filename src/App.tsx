import {
  ColorPicker,
  ScaleShades,
  // ColorSpace,
  ColorWheel,
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
      {/* <ColorSpace /> */}
      <ColorWheel />
      <div
        style={{
          marginTop: 100,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h3>REFERENCE PHOTOS</h3>
        <div>
          <img src="/hue-wheel.png" width="200" height="200" />
          <img src="/rgb-colorspace.png" width="200" height="200" />
        </div>
      </div>
      <ColorPicker />
      <CSSValues />
      <ScaleTints />
      <ScaleShades />
    </ColorProvider>
  );
}

export default App;
