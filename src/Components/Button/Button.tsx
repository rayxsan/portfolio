import React, { FunctionComponent } from "react";
import {
  StyledButton,
  TextButton,
  OutlinedButton,
  CircularButton,
} from "./Button.styled";
import { theme } from "../../shared/Theme";
import { ButtonSizes, ButtonTypes } from "./Button.common";
import { FiPlus } from "react-icons/fi";

interface Props {
  disabled?: boolean;
  primary?: boolean;
  size?: ButtonSizes;
  type?: ButtonTypes;
  secondary?: boolean;
  text?: boolean;
  outline?: boolean;
  circular?: boolean;
  icon?: string;
  clicked?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const Button: FunctionComponent<Props> = (props) => {
  let color = "";

  if (props.primary) {
    color = theme.primaryColor;
  }
  if (props.secondary) {
    color = theme.secondaryColor;
  }

  let radius = "0.28rem";
  if (props.circular) {
    radius = "50%";
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

  if (props.circular) {
    return (
      <CircularButton
        disabled={props.disabled}
        size={props.size}
        type={props.type}
        color={color}
        onClick={props.clicked}
      >
        <FiPlus />
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
