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
  onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  value?: string | number | readonly string[];
}

// TODO styling
// Make the input clearable
const Dropdown: FunctionComponent<Props> = ({
  options,
  placeholder,
  onChange,
  value,
}) => {
  const [selection, setSelection] = useState({
    open: false,
    choosen: placeholder,
  });

  // <div> reference type
  // const divRef = useRef<HTMLInputElement>(null);
  // const onChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
  //   setSelection({ ...selection, choosen: event.target.value });
  // };

  const defaultDropdown = (
    <select onChange={onChange} value={value}>
      {options.map((option, idx) => {
        return (
          <option
            key={idx}
            value={option}
            onClick={() => setSelection({ open: false, choosen: option })}
          >
            {option}
          </option>
        );
      })}
    </select>
  );

  // const dropdownDivs = options.map((option, idx) => {
  //   return (
  //     <div key={idx} onClick={() => setSelection({ open: false, choosen: option })}>
  //       {option}
  //     </div>
  //   );
  // });

  return (
    <StyledDropdown>
      {/* <div ref={divRef} className="divRef"> */}
      {defaultDropdown}
      {/* <div onClick={() => setSelection({ ...selection, open: true })}>{selection.choosen}</div>
      {selection.open && <div>{dropdownDivs}</div>} */}
      {/* </div> */}
    </StyledDropdown>
  );
};

export default Dropdown;
