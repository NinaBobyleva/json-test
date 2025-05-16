import "./button.scss";

type ButtonProp = {
  title: string;
  disabled?: boolean;
  onClick?: (e: React.MouseEvent) => void;
};

export const Button = ({ title, disabled, onClick }: ButtonProp) => {
  return (
    <button onClick={onClick} disabled={disabled} className={disabled ? "buttonDisabled" : "button"}>
      {title}
    </button>
  );
};
