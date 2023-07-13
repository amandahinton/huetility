import React from "react";

type Props = {
  draw: (canvasContext: CanvasRenderingContext2D) => void;
  height: number;
  width: number;
  classNames?: string;
  id?: string;
  onClick?: (canvasContext: CanvasRenderingContext2D) => void;
};

export function Canvas({
  draw,
  height = 200,
  width = 200,
  classNames = "huetility-default-canvas",
  id = "huetility-canvas",
  onClick,
}: Props) {
  const canvasRef = React.useRef(null);

  React.useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas == null) return;

    const canvasContext: CanvasRenderingContext2D = canvas.getContext("2d");
    if (canvasContext == null) return;

    if (onClick) {
      draw(canvasContext);

      canvas.addEventListener("click", () => onClick(canvasContext));

      return () => canvas.removeEventListener("click", onClick);
    }
  }, []);

  return (
    <canvas
      ref={canvasRef}
      id={id}
      width={width}
      height={height}
      className={classNames}
    ></canvas>
  );
}
