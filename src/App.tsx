import { ColorPicker, SwatchPreview } from "./components";

import "./App.css";

function App() {
  return (
    <>
      <h1>Color</h1>
      <ColorPicker />
      <SwatchPreview colorMode={"HEX"} colorCode={"#ff1b40"} />
    </>
  );
}

export default App;
