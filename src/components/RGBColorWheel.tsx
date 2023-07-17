import React from "react";
import { Canvas } from "../components";
import { HUES } from "../utils/constants";
import "./ColorSpace.css";

export function RGBColorWheel() {
  const [pixelValue, setPixelValue] = React.useState<string>("");

  const canvasWidth = 300; // use square canvas, height set to same

  const canvasDraw = (canvasContext: CanvasRenderingContext2D) => {
    // create a sweeping gradient
    const gradient = canvasContext.createConicGradient(
      0,
      canvasWidth / 2,
      canvasWidth / 2
    );

    for (let colorValue of HUES) {
      gradient.addColorStop((30 / 360) * colorValue.id, colorValue.cssRGB);
    }

    canvasContext.fillStyle = gradient;
    canvasContext.fillRect(0, 0, canvasWidth, canvasWidth);

    // crop canvas to make circular
    canvasContext.globalCompositeOperation = "destination-in";
    canvasContext.beginPath();
    canvasContext.arc(
      canvasWidth / 2,
      canvasWidth / 2,
      canvasWidth / 2,
      0,
      Math.PI * 2
    );
    canvasContext.closePath();
    canvasContext.fill();

    // /*
    // radial gradient from white to transparent
    const radialGradient = canvasContext.createRadialGradient(
      canvasWidth / 2,
      canvasWidth / 2,
      0,
      canvasWidth / 2,
      canvasWidth / 2,
      canvasWidth / 2 - 20
    );
    radialGradient.addColorStop(0, "#ffffff00");
    radialGradient.addColorStop(1, "#ffffffff");
    canvasContext.fillStyle = radialGradient;
    canvasContext.fillRect(0, 0, 300, 300);
    // */
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

    const alpha = data[3] / 255 === 1 ? 1 : (data[3] / 255).toFixed(2);
    const rgba = [data[0], data[1], data[2], alpha];
    setPixelValue(`rgba(${rgba.join(", ")})`);
  };

  return (
    <div className="huetility-component-container">
      <div className="huetility-colorspace-container">
        <Canvas
          draw={canvasDraw}
          onClick={handleClick}
          height={canvasWidth}
          width={canvasWidth}
          classNames=""
        />
        <h3 className="huetility-clicked-pixel">{pixelValue}</h3>
      </div>
    </div>
  );
}
