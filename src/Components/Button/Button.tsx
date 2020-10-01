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

const Button: FunctionComponent<Props> = props => {
  let color = "";

  if (props.primary) {
    color = theme.primaryColor;
  }
  if (props.secondary) {
    color = theme.secondaryColor;
  }

  if (props.text) {
    return (
      <TextButton
        disabled={props.disabled}
        size={props.size}
        type={props.type}
        color={color}
        onClick={props.clicked}
      >
        {props.children}
      </TextButton>
    );
  }

  if (props.outline) {
    return (
      <OutlinedButton
        disabled={props.disabled}
        size={props.size}
        type={props.type}
        color={color}
        onClick={props.clicked}
      >
        {props.children}
      </OutlinedButton>
    );
  }

  // BUG circular undefined
  if (props.circular) {
    return (
      <CircularButton
        disabled={props.disabled}
        size={props.size}
        type={props.type}
        color={color}
        onClick={props.clicked}
      >
        {props.children}
      </CircularButton>
    );
  }

  return (
    <StyledButton
      disabled={props.disabled}
      size={props.size}
      type={props.type}
      color={color}
      onClick={props.clicked}
    >
      {props.children}
    </StyledButton>
  );
};

export default Button;
