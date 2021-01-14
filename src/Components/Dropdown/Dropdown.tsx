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
  //onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  onChange?: (value: string | number) => void;
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

// const DropdownClosed: FunctionComponent<Props> = (props) => {
//   return null;
// };

// const DropdownOpen: FunctionComponent<Props> = (props) => {
//   return null;
// };

export const Dropdown: FunctionComponent<Props> = (props) => {
  const { options, onChange } = props;
  const [selection, setSelection] = useState({
    isOpen: false,
    selected: props.placeholder ? -1 : 0,
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

  // const myCustomEvent = (event: React.ChangeEvent<HTMLSelectElement>) => {
  //   event.preventDefault();
  //   const value = event.target.value;
  //   if (onChange !== undefined) onChange(value);
  // };

  let value = 0;
  const maxTextWidth = (text: string) => {
    // if (text.length > value) {
    //   value = text.length;
    // }
    // return value;

    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d");
    let width = Math.ceil(context!.measureText(text).width / 16);
    if (width > value) value = width;
    return value;
  };

  const dropDownValues = options.map((option, idx) => {
    const { text, value } = props.options[idx];
    maxTextWidth(text.toString());
    return (
      <li
        key={option.key}
        onClick={() => {
          setSelection({ isOpen: false, selected: idx });
          if (onChange !== undefined) onChange(value);
        }}
      >
        {option.text}
      </li>
    );
  });

  return (
    <StyledDropdown open={selection.isOpen} textWidth={value} ref={container}>
      {console.log(value)}
      {placeHolder}
      {expandOptions}
      <ul>{dropDownValues}</ul>
    </StyledDropdown>
  );
};

export default Dropdown;
