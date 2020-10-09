import React, { FunctionComponent } from "react";

interface Props {
  type?: string;
  name?: string | "";
}

const Input: FunctionComponent<Props> = ({ type, name }) => {
  return <input type={type} name={name} />;
};

export default Input;
