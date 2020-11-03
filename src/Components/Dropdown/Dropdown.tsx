import React, { FunctionComponent, useState, useEffect, useRef, SyntheticEvent } from "react";
import DropdownCard from "./DropdownCard";
import { StyledDropdown } from "./Dropdown.styled";

interface Props {
  options: string[];
  defaultOption?: string;
  // inputVal?: boolean;
  label?: string;
  placeholder?: string;
}

// TODO styling
// Make the input clearable
const Dropdown: FunctionComponent<Props> = ({ options, placeholder, label }) => {
  const [open, setOpen] = useState(false);

  // <div> reference type
  const divRef = useRef<HTMLInputElement>(null);

  const useOutsideAlert = (ref: HTMLInputElement): void => {
    console.log("ref", ref);

    // useEffect(() => {
    //   const handleClickOutside = (event: SyntheticEvent) => {
    //     if (ref.current && !ref.current.contains(event.target)) {
    //       setOpen(false);
    //     }
    //   };

    //   document.addEventListener("mousedown", handleClickOutside);
    //   return () => {
    //     // Unbind the event listener on clean up
    //     document.removeEventListener("mousedown", handleClickOutside);
    //   };
    // }, [ref]);
  };

  return (
    <StyledDropdown>
      <div ref={divRef} className="jude">
        <input list="input-list" placeholder={placeholder} onFocus={() => setOpen(true)} />
        {open && <DropdownCard data={options}></DropdownCard>}

        {/* <label htmlFor="choice">{label}</label>
      input's list has to be equal to list's id
      {inputVal && <input list="input-list" placeholder={placeholder} />}
      <datalist id="input-list">
        {options.map(option => {
          return <option value={option}>{option}</option>;
        })}
      </datalist> */}
      </div>
    </StyledDropdown>
  );
};

export default Dropdown;
