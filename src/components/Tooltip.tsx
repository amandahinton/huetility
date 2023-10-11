import "components/Tooltip.css";

type Props = {
  classes?: string;
  message: React.ReactNode;
  text?: React.ReactNode;
  trigger: React.ReactNode;
};

export function Tooltip({ classes = "", message, text, trigger }: Props) {
  return (
    <div className={`huetility-tooltip ${classes}`}>
      {text && text}
      <div className="huetility-tooltip-hover">
        {trigger}
        {message}
      </div>
    </div>
  );
}
