import React, {
  FunctionComponent,
  useState,
  useEffect,
  useRef,
  // useRef /*, useEffect, SyntheticEvent*/,
} from "react";
// import DropdownCard from "./DropdownCard";
import { StyledDropdown } from "./Dropdown.styled";
import { FaChevronDown, FaTimes } from "react-icons/fa";

export interface DropdownOption {
  key?: string | number;
  value: string | number;
  text: string | number;
}

interface Props {
  options: DropdownOption[];
  defaultOption?: string | number;
  label?: string;
  placeholder?: string | number;
  // changed?: (event: React.ChangeEvent<HTMLDivElement>) => void;
  changed?: (value: string | number) => void;
  // value?: string | number | readonly string[];
}

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
// const selectedSet = new Set();
// selectedSet.add("dog");
// selectedSet.add("cat");
// selectedSet.add("dog");
// selectedSet.has("cat");

// TODO styling
// Make the input clearable

const DropdownClosed: FunctionComponent<Props> = (props) => {
  return null;
};

const DropdownOpen: FunctionComponent<Props> = (props) => {
  return null;
};

export const Dropdown: FunctionComponent<Props> = (props) => {
  const { options, changed } = props;
  const [selection, setSelection] = useState({
    isOpen: false,
    selected: -1,
  });

  const container = React.createRef<any>();

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (container.current && !container.current.contains(event.target)) {
        setSelection({ ...selection, isOpen: false });
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  });

  const openlistHandler = () => {
    setSelection({ ...selection, isOpen: !selection.isOpen });
  };

  const placeHolder =
    props.placeholder && selection.selected === -1 ? (
      <div>{props.placeholder}</div>
    ) : (
      <div>{options[selection.selected].text}</div>
    );

  const expandOptions = selection.isOpen ? (
    <FaTimes onClick={openlistHandler} />
  ) : (
    <FaChevronDown onClick={openlistHandler} />
  );

  const dropDownValues = options.map((option, idx) => {
    return (
      <li
        key={option.key}
        onClick={() => {
          const { text, value } = props.options[idx];
          setSelection({ isOpen: false, selected: idx });
          if (changed !== undefined) changed(value);
        }}
      >
        {option.text}
      </li>
    );
  });

  return (
    <StyledDropdown open={selection.isOpen} ref={container}>
      {placeHolder}
      {expandOptions}
      <ul>{dropDownValues}</ul>
    </StyledDropdown>
  );
};

export default Dropdown;
