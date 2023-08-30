import "components/Swatch.css";
import "components/index.css";

type Props = {
  backgroundColor: string;
  children?: React.ReactNode;
  height: string;
  width: string;
};

export function Swatch({ backgroundColor, children, height, width }: Props) {
  return (
    <div
      className="huetility-swatch huetility-bordered"
      style={{ backgroundColor, height, width }}
    >
      {children}
    </div>
  );
}
