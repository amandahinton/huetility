import React from "react";

type Props = {
  draw: (canvasContext: CanvasRenderingContext2D) => void;
  height: number;
  width: number;
  classNames?: string;
  id?: string;
  onClick?: (
    canvasContext: CanvasRenderingContext2D,
    event: React.MouseEvent<HTMLElement>
  ) => void;
};

export function Canvas({
  draw,
  height = 200,
  width = 200,
  classNames = "huetility-default-canvas",
  id = "huetility-canvas",
  onClick,
}: Props) {
  const canvasRef = React.useRef<HTMLCanvasElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    const canvas = canvasRef.current;
    if (canvas == null) return;

    const canvasContext: CanvasRenderingContext2D | null = canvas.getContext(
      "2d",
      {
        willReadFrequently: true,
      }
    );
    if (canvasContext == null) return;

    if (onClick) onClick(canvasContext, event);
  };

  React.useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas == null) return;

    const canvasContext: CanvasRenderingContext2D | null = canvas.getContext(
      "2d",
      {
        willReadFrequently: true,
      }
    );
    if (canvasContext == null) return;

    draw(canvasContext);
  }, [draw]);

  return (
    <canvas
      ref={canvasRef}
      id={id}
      width={width}
      height={height}
      className={classNames}
      onClick={handleClick}
    ></canvas>
  );
}
