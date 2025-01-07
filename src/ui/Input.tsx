import React, { HTMLInputTypeAttribute, InputHTMLAttributes } from "react";

import "./input.css"

interface Props {
  placeholder?: HTMLInputTypeAttribute;
  type: HTMLInputTypeAttribute;
  name?: HTMLInputTypeAttribute;
  border?: string,
  isDisabled?:boolean,
  isRequired?:boolean
}

const Input = (props: Props) => {
  return (
    <input
      style={{border:`${props.border}`}}
      className={"input__ui"}
      placeholder={props.placeholder}
      type={props.type}
      name={props.name}
      disabled={props.isDisabled}
    />
  );
};

export default Input;
