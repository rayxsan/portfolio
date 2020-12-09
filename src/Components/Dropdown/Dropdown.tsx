import React, { FunctionComponent, useState, useRef /*, useEffect, SyntheticEvent*/ } from "react";
// import DropdownCard from "./DropdownCard";
import { StyledDropdown } from "./Dropdown.styled";

interface Props {
  options: string[];
  defaultOption?: string;
  label?: string;
  placeholder?: string;
}

// TODO styling
// Make the input clearable
const Dropdown: FunctionComponent<Props> = ({ options, placeholder }) => {
  const [selection, setSelection] = useState({ open: false, choosen: placeholder });

  // <div> reference type
  const divRef = useRef<HTMLInputElement>(null);

  const dropdownOptions = options.map((option, idx) => {
    return (
      <option key={idx} onClick={() => setSelection({ open: false, choosen: option })}>
        {option}
      </option>
    );
  });

  console.log(selection, "sel");

  return (
    <StyledDropdown>
      <div ref={divRef} className="divRef">
        <select>
          <option>{placeholder}</option>
          {dropdownOptions}
        </select>
        <i></i>
        <input
          placeholder={placeholder}
          onFocus={() => setSelection({ ...selection, open: true })}
          value={selection.choosen}
        ></input>
        {selection.open && <div>{dropdownOptions}</div>}
      </div>
    </StyledDropdown>
  );
};

export default Dropdown;
