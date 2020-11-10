import React, { FunctionComponent } from "react";
import { StyledDropdown } from "./Dropdown.styled";

interface Props {
  options: string[];
  defaultOption?: string;
  inputVal?: boolean;
  label?: string;
  placeholder?: string;
}

// TODO styling
// Make the input clearable
const Dropdown: FunctionComponent<Props> = ({
  options,
  placeholder,
  inputVal,
  label,
}) => {
  return (
    <StyledDropdown>
      <label htmlFor="choice">{label}</label>
      {/* input's list has to be equal to list's id */}
      {inputVal && <input list="input-list" placeholder={placeholder} />}
      <datalist id="input-list">
        {options.map((option) => {
          return <option value={option}>{option}</option>;
        })}
      </datalist>
    </StyledDropdown>
  );
};

export default Dropdown;
