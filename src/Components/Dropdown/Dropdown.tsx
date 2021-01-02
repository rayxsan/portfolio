import React, {
  FunctionComponent,
  useState,
  // useRef /*, useEffect, SyntheticEvent*/,
} from "react";
// import DropdownCard from "./DropdownCard";
import { StyledDropdown } from "./Dropdown.styled";

interface Props {
  options: Array<string>;
  defaultOption?: string;
  label?: string;
  placeholder?: string;
  changed?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  value?: string | number | readonly string[];
}

// TODO styling
// Make the input clearable
const Dropdown: FunctionComponent<Props> = ({ options, placeholder }) => {
  const [selection, setSelection] = useState({
    open: false,
    choosen: options[0],
  });

  const onChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelection({ ...selection, choosen: event.target.value });
  };

  const defaultDropdown = (
    <select onChange={onChange} value={selection.choosen}>
      {options.map((option, idx) => {
        return (
          <option key={idx} value={option}>
            {option}
          </option>
        );
      })}
    </select>
  );

  const dropdownDivs = options.map((option, idx) => {
    return (
      <div
        key={idx}
        onClick={() => setSelection({ open: false, choosen: option })}
      >
        {option}
      </div>
    );
  });

  return (
    <StyledDropdown>
      {defaultDropdown}
      <p>{selection.choosen}</p>
      {dropdownDivs}
      {console.log(selection.choosen)}
    </StyledDropdown>
  );
};

export default Dropdown;
