import "./input.scss";

type InputProp = {
  type: string;
  placeholder: string;
  value?: string;
  name?: string;
  error?: boolean;
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
  error,
}: InputProp) => {
  return (
    <input
      className={error ? "inputError" : "input"}
      onChange={onChange}
      onBlur={onBlur}
      value={value}
      name={name}
      type={type}
      placeholder={placeholder}
    />
  );
};
