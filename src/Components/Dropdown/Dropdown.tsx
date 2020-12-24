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

  // const dropdownOptions = options.map((option, idx) => {
  //   return (
  //     <option
  //       key={idx}
  //       value={option}
  //       onClick={() => setSelection({ open: false, choosen: option })}
  //     >
  //       {option}
  //     </option>
  //   );
  // });

  const dropdownDivs = options.map((option, idx) => {
    return (
      <div key={idx} onClick={() => setSelection({ open: false, choosen: option })}>
        {option}
      </div>
    );
  });

  const onChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelection({ ...selection, choosen: event.target.value });
  };

  return (
    <StyledDropdown>
      {/* <div ref={divRef} className="divRef"> */}
      {/* <select onChange={onChange} value={selection.choosen}>
        <option>{placeholder}</option>
        {dropdownOptions}
      </select> */}

      <div onClick={() => setSelection({ ...selection, open: true })}>{selection.choosen}</div>
      {selection.open && <div>{dropdownDivs}</div>}
      {/* </div> */}
    </StyledDropdown>
  );
};

export default Dropdown;
