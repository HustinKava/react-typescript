import React from "react";

type InputProps = {
  // Value is being passed as a string from "EventProps"
  value: string;
  // We are passing the "handleChange" event from "EventProps" and declaring what the event is
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const Input = (props: InputProps) => {
  const { value, handleChange } = props;
  return <input type="text" onChange={handleChange} value={value} />;
};

export default Input;
