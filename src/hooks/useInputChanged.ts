import { useState } from "react";
import { useValidation } from "./useValidation";

type InputChangeProp = {
  initialValue: string;
  validations?: {
    isEmpty: boolean;
    numberLength?: boolean;
    minNumberLength?: boolean;
    minCodeLength?: boolean;
  };
};

export const useInputChange = ({
  initialValue,
  validations,
}: InputChangeProp) => {
  const [value, setValue] = useState(initialValue);
  // console.log("value", value);
  const [isDirty, setIsDirty] = useState(false);
  const [error, setError] = useState("");
  const valid = useValidation({ value: value, validations });

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value ?? "");
    setIsDirty(false);
    setError("");
  };

  const onBlur = (
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    if (!value.trim()) {
      setIsDirty(true);
      setError("Необходимо заполнить все поля");
    } else {
      setIsDirty(false);
      setError("");
    }
  };

  return {
    value,
    onChange,
    onBlur,
    isDirty,
    error,
    ...valid,
  };
};
