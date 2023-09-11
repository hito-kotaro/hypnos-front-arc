import { ChangeEvent, useState } from "react";

export const useInputText = () => {
  const [value, setValue] = useState("");

  const handleChange = (
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
  ) => {
    setValue(event.target.value);
  };

  const clearValue = () => {
    setValue("");
  };
  return { value, handleChange, clearValue };
};

export type useInputTextType = {
  value: string;
  handleChange: (
    event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
  ) => void;
  clearValue: () => void;
};
