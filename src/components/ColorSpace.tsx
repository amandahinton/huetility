import React from "react";
import { Canvas } from "../components";
import "./ColorSpace.css";

export function ColorSpace() {
  const [pixelValue, setPixelValue] = React.useState<string>("Select a color");

  const canvasWidth = 300;
  const canvasHeight = 300;

  const canvasDraw = (canvasContext: CanvasRenderingContext2D) => {
    canvasContext.fillStyle = "red";
    canvasContext.fillRect(0, 0, 75, canvasHeight);
    canvasContext.fillStyle = "lime";
    canvasContext.fillRect(75, 0, 75, canvasHeight);
    canvasContext.fillStyle = "blue";
    canvasContext.fillRect(150, 0, 75, canvasHeight);
    canvasContext.fillStyle = "yellow";
    canvasContext.fillRect(225, 0, 75, canvasHeight);
  };

  const handleClick = (
    canvasContext: CanvasRenderingContext2D,
    event: React.MouseEvent<HTMLElement>
  ) => {
    const coordinates = [event.offsetX, event.offsetY];

    const data = canvasContext.getImageData(
      coordinates[0],
      coordinates[1],
      1,
      1
    ).data;

    const rgba = [data[0], data[1], data[2], data[3] / 255];
    setPixelValue(`rgba(${rgba.join(", ")})`);
  };

  return (
    <div className="huetility-component-container">
      <h2 className="huetility-component-title">Pixel Clicker</h2>
      <div className="huetility-colorspace-container">
        <Canvas
          draw={canvasDraw}
          onClick={handleClick}
          height={canvasHeight}
          width={canvasWidth}
        />
        <h3 className="huetility-clicked-pixel">{pixelValue}</h3>
      </div>
    </div>
  );
}
