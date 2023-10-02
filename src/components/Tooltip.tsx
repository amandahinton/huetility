import "components/Tooltip.css";

type Props = {
  children?: React.ReactNode;
  message: React.ReactNode;
};

export function Tooltip({ children, message }: Props) {
  return (
    <div className="huetility-tooltip-container">
      <div className="huetility-tooltip-hover">
        <span>{children}</span>
        <span className="huetility-tooltip-message">{message}</span>
      </div>
    </div>
  );
}
