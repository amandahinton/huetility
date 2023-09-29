import "components/Swatch.css";
import "components/index.css";

type Props = {
  backgroundColor: string;
  bordered: boolean;
  children?: React.ReactNode;
  classes?: string;
};

export function Swatch({ backgroundColor, bordered = false, children, classes }: Props) {
  return (
    <div
      className={`${classes} huetility-swatch ${bordered ? "huetility-bordered" : ""}`}
      style={{ backgroundColor }}
    >
      {children}
    </div>
  );
}
