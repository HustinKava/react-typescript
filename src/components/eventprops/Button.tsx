import React from "react";

type ButtonProps = {
  // Most of the time a click handler does not need a paremeter and does nto return anything
  // For example we could make an API call in the function and it doesn't have to accept a parameter or return a value
  // For such cases we can set the "handleClick" to: "handleClick: () => void;"

  // Another variant of this is when we need an event passed in
  // The type of event for this is "React.MouseEvent" and can get more specific by adding it's a button click "<HTMLButtonElement>"

  // We can also provide an id to the click, we are setting the id to be a number and passing through 1 as the id in the onClick
  handleClick: (event: React.MouseEvent<HTMLButtonElement>, id: number) => void;
};

function Button(props: ButtonProps) {
  const { handleClick } = props;
  return <button onClick={(event) => handleClick(event, 1)}>Click</button>;
}

export default Button;
