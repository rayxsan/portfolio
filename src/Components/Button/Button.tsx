import React, { FunctionComponent } from "react";
import { StyledButton } from "./Button.styled";

interface Props {
  size?: string;
  type?: string;
  color?: string;
}

const Button: FunctionComponent<Props> = (props) => (
  <StyledButton size={props.size} color={props.color}>
    {props.children}
  </StyledButton>
);

export default Button;
