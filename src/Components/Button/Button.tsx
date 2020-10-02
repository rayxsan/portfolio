import React, { FunctionComponent } from "react";
import { StyledButton, TextButton, OutlinedButton, CircularButton } from "./Button.styled";
import { theme } from "../../shared/Theme";
import { ButtonSizes, ButtonTypes } from "./Button.common";

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
  let color = "";
  color = primary ? theme.primaryColor : "";
  color = secondary ? theme.secondaryColor : "";

  if (text) {
    return (
      <TextButton disabled={disabled} size={size} type={type} color={color} onClick={clicked}>
        {children}
      </TextButton>
    );
  }

  if (outline) {
    return (
      <OutlinedButton disabled={disabled} size={size} type={type} color={color} onClick={clicked}>
        {children}
      </OutlinedButton>
    );
  }

  // BUG circular undefined
  if (circular) {
    return (
      <CircularButton disabled={disabled} size={size} type={type} color={color} onClick={clicked}>
        {children}
      </CircularButton>
    );
  }

  return (
    <StyledButton disabled={disabled} size={size} type={type} color={color} onClick={clicked}>
      {children}
    </StyledButton>
  );
};

export default Button;
