import { useEffect, useState } from "react";

type ValidationProp = {
  value: string;
  validations?: {
    isEmpty: boolean;
    minLength?: boolean;
  };
};

export const useValidation = ({ value, validations }: ValidationProp) => {
  const [isEmpty, setIsEmpty] = useState(true);
  //   const [minNumberLengthError, setMinNumberLengthError] = useState(false);
  const [isInputValid, setIsInputValid] = useState(false);

  useEffect(() => {
    for (const validation in validations) {
      switch (validation) {
        case "isEmpty":
          setIsEmpty(!value.trim());
          break;
        // case "minLength":
        //   break;
      }
    }
  }, [value]);

  useEffect(() => {
    if (isEmpty) {
      setIsInputValid(false);
    } else {
      setIsInputValid(true);
    }
  }, [isEmpty]);

  return {
    isEmpty,
    isInputValid,
    // minNumberLengthError,
  };
};
