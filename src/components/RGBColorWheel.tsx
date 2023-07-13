import React from "react";
import { Canvas } from ".";
import "./ColorSpace.css";

export function RGBColorWheel() {
  const [pixelValue, setPixelValue] = React.useState<string>("Select a color");

  const canvasWidth = 300;
  const canvasHeight = 300;

  const canvasDraw = (canvasContext: CanvasRenderingContext2D) => {
    const hues = [
      { color: "lime - 90", wedge: 30, hue: "#80ff00ff" },
      { color: "green - 120", wedge: 30, hue: "#00ff00ff" },
      { color: "mint - 150", wedge: 30, hue: "#00ff80ff" },
      { color: "cyan - 180", wedge: 30, hue: "#00ffffff" },
      { color: "cornflower - 210", wedge: 30, hue: "#0080ffff" },
      { color: "blue - 240", wedge: 30, hue: "#0000ffff" },
      { color: "violet - 270", wedge: 30, hue: "#8000ffff" },
      { color: "magenta - 300", wedge: 30, hue: "#ff00ffff" },
      { color: "pink - 330", wedge: 30, hue: "#ff0080ff" },
      { color: "red - 0", wedge: 30, hue: "#ff0000ff" },
      { color: "orange - 30", wedge: 30, hue: "#ff8000ff" },
      { color: "yellow - 60", wedge: 30, hue: "#ffff00ff" },
    ];

    let currentAngle = 0;
    for (let colorValue of hues) {
      // determine slice size
      let portionAngle = (colorValue.wedge / 360) * 2 * Math.PI;
      // draw the pie slice
      canvasContext.beginPath();
      canvasContext.arc(
        canvasHeight / 2,
        canvasWidth / 2,
        canvasHeight / 2,
        currentAngle,
        currentAngle + portionAngle
      );
      currentAngle += portionAngle;
      canvasContext.lineTo(canvasHeight / 2, canvasHeight / 2);
      // color the slices
      canvasContext.fillStyle = colorValue.hue;
      canvasContext.fill();
    }
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
      <div className="huetility-colorspace-container">
        <Canvas
          draw={canvasDraw}
          onClick={handleClick}
          height={canvasHeight}
          width={canvasWidth}
          classNames=""
        />
        <h3 className="huetility-clicked-pixel">{pixelValue}</h3>
      </div>
    </div>
  );
}
