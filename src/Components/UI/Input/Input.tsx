import React, { FunctionComponent } from "react";

interface Props {
  type?: string;
  name?: string | "";
  placeholder?: string;
  value?: string;
}

const Input: FunctionComponent<Props> = ({ type, name, placeholder, value }) => {
  return <input type={type} name={name} placeholder={placeholder} value={value} />;
};

export default Input;
