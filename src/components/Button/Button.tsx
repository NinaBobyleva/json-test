import "./button.scss";

type ButtonProp = {
    title: string;
    onClick?: (e: React.MouseEvent) => void;
}

export const Button = ({title, onClick}: ButtonProp) => {
  return (
    <button onClick={onClick} className="btn">
      {title}
    </button>
  );
};
