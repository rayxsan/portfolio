import React, { FunctionComponent } from "react";
import { StyledButton } from "./Button.styled";

interface Props {}
const Button: FunctionComponent<Props> = (props) => (
  <StyledButton>{props.children}</StyledButton>
);

export default Button;
