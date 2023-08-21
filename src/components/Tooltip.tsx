import "components/Tooltip.css";

// set true to one or both of hoverChildren and hasIcon
type Props = {
  children?: React.ReactNode;
  hoverChildren?: boolean;
  hasIcon?: boolean;
  message: React.ReactNode;
};

export function Tooltip({
  children,
  hoverChildren = false,
  hasIcon = false,
  message,
}: Props) {
  if (hoverChildren && hasIcon) {
    return (
      <div className="huetility-tooltip-hover">
        <div className="huetility-tooltip-container">
          <span>{children}</span>
          <span> &#9432; </span>
        </div>
        <span className="huetility-tooltip-message">{message}</span>
      </div>
    );
  }

  if (hoverChildren && !hasIcon) {
    return (
      <div className="huetility-tooltip-container">
        <div className="huetility-tooltip-hover">
          <span>{children}</span>
          <span className="huetility-tooltip-message">{message}</span>
        </div>
      </div>
    );
  }

  if (!hoverChildren && hasIcon) {
    return (
      <div className="huetility-tooltip-container">
        {children}
        <div className="huetility-tooltip-hover">
          <span> &#9432; </span>
          <span className="huetility-tooltip-message">{message}</span>
        </div>
      </div>
    );
  }

  if (!hoverChildren && !hasIcon) {
    return <>{children}</>;
  }
}
