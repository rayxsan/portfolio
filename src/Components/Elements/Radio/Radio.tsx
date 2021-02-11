import React, { FunctionComponent } from "react";
import { StyledRadio } from "./Radio.styled";

interface Props {
  primary?: boolean;
  secondary?: boolean;
  label?: string;
  name?: string;
  checked?: boolean;
  disabled?: boolean;
  value?: string | number;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

interface State {
  checked: boolean;
}

const Radio: FunctionComponent<Props> = (props) => {
  const {
    primary,
    secondary,
    label,
    name,
    checked,
    disabled,
    value,
    onChange,
  } = props;

  return (
    <StyledRadio primary={primary} secondary={secondary} disabled={disabled}>
      <input
        type="radio"
        disabled={disabled}
        value={value}
        name={name}
        onChange={onChange}
        checked={checked}
      />
      <span />
      <label>{label}</label>
    </StyledRadio>
  );
};

export default Radio;
