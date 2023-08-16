import React from "react";
import { Canvas } from "components/index";
import { useColor } from "contexts/ColorContext";
import { HUES } from "utils/constants";
import { isRGB } from "utils/helpers";
import "components/ColorSpace.css";

export function RGBColorWheel() {
  const { setRGB } = useColor();

  const canvasWidth = 300; // use square canvas, height set to same

  const canvasDraw = (canvasContext: CanvasRenderingContext2D) => {
    // make a round clipping mask to draw inside
    canvasContext.beginPath();
    canvasContext.arc(
      canvasWidth / 2,
      canvasWidth / 2,
      canvasWidth / 2,
      0,
      Math.PI * 2
    );
    canvasContext.closePath();
    canvasContext.clip();

    // create a sweeping gradient with red at top
    // start one radian counterclockwise, x,y center of canvas
    const gradient = canvasContext.createConicGradient(
      -Math.PI / 2,
      canvasWidth / 2,
      canvasWidth / 2
    );

    // hue every 30 degrees
    for (const colorValue of HUES) {
      gradient.addColorStop((30 / 360) * colorValue.id, colorValue.cssRGB);
    }
    canvasContext.fillStyle = gradient;
    canvasContext.fillRect(0, 0, canvasWidth, canvasWidth);

    // add outer black gradient for shades
    const radialGradientW = canvasContext.createRadialGradient(
      canvasWidth / 2,
      canvasWidth / 2,
      155, // go past edge a bit to decrease darkness at perimeter
      canvasWidth / 2,
      canvasWidth / 2,
      100
    );
    radialGradientW.addColorStop(0, "#000000ff");
    radialGradientW.addColorStop(1, "#00000000");
    canvasContext.fillStyle = radialGradientW;
    canvasContext.fillRect(0, 0, canvasWidth, canvasWidth);

    // add inner white gradient for tints
    const radialGradientB = canvasContext.createRadialGradient(
      canvasWidth / 2,
      canvasWidth / 2,
      0,
      canvasWidth / 2,
      canvasWidth / 2,
      60
    );
    radialGradientB.addColorStop(0, "#ffffffff");
    radialGradientB.addColorStop(1, "#ffffff00");
    canvasContext.fillStyle = radialGradientB;
    canvasContext.fillRect(0, 0, canvasWidth, canvasWidth);
  };

  const handleClick = (
    canvasContext: CanvasRenderingContext2D,
    event: React.MouseEvent<HTMLElement>
  ) => {
    event.preventDefault();

    const data = canvasContext.getImageData(
      event.nativeEvent.offsetX,
      event.nativeEvent.offsetY,
      1,
      1
    ).data;

    const newRGB = { r: data[0], g: data[1], b: data[2] };
    if (isRGB(newRGB)) setRGB(newRGB);
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
      </div>
    </div>
  );
}
