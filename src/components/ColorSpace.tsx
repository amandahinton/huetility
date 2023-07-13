import React from "react";
import { Canvas } from "../components";
import "./ColorSpace.css";

export function ColorSpace() {
  const [pixelValue, setPixelValue] = React.useState<string>("GOOOOO");

  const canvasWidth = 300;
  const canvasHeight = 300;

  const canvasDraw = (canvasContext: CanvasRenderingContext2D) => {
    canvasContext.fillStyle = "red";
    canvasContext.fillRect(0, 0, 50, 200);
    canvasContext.fillStyle = "blue";
    canvasContext.fillRect(50, 0, 50, 200);
    canvasContext.fillStyle = "green";
    canvasContext.fillRect(100, 0, 50, 200);
    canvasContext.fillStyle = "yellow";
    canvasContext.fillRect(150, 0, 50, 200);
  };

  const handleClick = (canvasContext: CanvasRenderingContext2D) => {
    canvasContext.fillStyle = "black";
    canvasContext.fillRect(0, 0, canvasWidth, canvasHeight);

    setTimeout(() => {
      canvasDraw(canvasContext);
    }, 500);
  };

  return (
    <div className="huetility-component-container">
      <h2 className="huetility-component-title">Pixel Clicker</h2>
      <div className="huetility-colorspace-container">
        <Canvas draw={canvasDraw} onClick={handleClick} />
        <h3 className="huetility-clicked-pixel">{pixelValue}</h3>
      </div>
    </div>
  );
}
