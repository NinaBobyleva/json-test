import "./input.scss";

type InputProp = {
  type: string;
  placeholder: string;
  value?: string;
  name?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
};

export const Input = ({
  type,
  placeholder,
  name,
  onChange,
  onBlur,
  value,
}: InputProp) => {
  return (
    <input
    className="input"
      onChange={onChange}
      onBlur={onBlur}
      value={value}
      name={name}
      type={type}
      placeholder={placeholder}
    />
  );
};
