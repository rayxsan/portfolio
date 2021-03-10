import React, { FunctionComponent } from "react";
import { StyledButton } from "./Button.styled";
import { ButtonSizes, ButtonTypes } from "./Button.common";

//TODO: center svg in circular buttons

interface Props {
  disabled?: boolean;
  primary?: boolean;
  size?: ButtonSizes;
  type?: ButtonTypes;
  secondary?: boolean;
  text?: boolean;
  outline?: boolean;
  circular?: boolean;
  icon?: string; // TODO: use this as the name of the icon to be rendered. See semantic UI for example. https://react.semantic-ui.com/elements/button/#types-icon
  clicked?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  className?: string;
  id?: string;
}

const Button: FunctionComponent<Props> = ({
  primary,
  secondary,
  text,
  disabled,
  size,
  type,
  clicked,
  children,
  outline,
  circular,
}) => {
  return (
    <StyledButton
      disabled={disabled}
      size={size}
      type={type}
      onClick={clicked}
      text={text}
      outline={outline}
      circular={circular}
      primary={primary}
      secondary={secondary}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
