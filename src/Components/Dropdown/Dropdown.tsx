import React, {
  FunctionComponent,
  useState,
  useEffect,
  //useRef,
  // useRef /*, useEffect, SyntheticEvent*/,
} from "react";
// import DropdownCard from "./DropdownCard";
import { StyledDropdown } from "./Dropdown.styled";
import { FaChevronDown, FaTimes } from "react-icons/fa";
import { convertToRem } from "../../shared/utils";

export interface DropdownOption {
  key?: string | number;
  value: string | number;
  text: string | number;
}

interface Props {
  options: DropdownOption[];
  defaultOption?: string | number;
  label?: string;
  placeholder?: string;
  search?: boolean;
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

export const Dropdown: FunctionComponent<Props> = (props) => {
  const { options, onChange, search } = props;
  const [selection, setSelection] = useState({
    isOpen: false,
    selected: props.placeholder ? -1 : 0,
  });

  const [searchTerm, setSearchTerm] = useState(
    props.placeholder
      ? props.placeholder
      : options[selection.selected].text.toString()
  );

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const container = React.createRef<any>();

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (container.current && !container.current.contains(event.target)) {
        setSelection({
          ...selection,
          isOpen: false,
        });
        //if (selectionList) setSearchTerm(selectionList[0].text.toString());
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  });

  const openlistHandler = () => {
    setSelection({ ...selection, isOpen: !selection.isOpen });
    if (search) setSearchTerm("");
  };

  let placeHolder =
    props.placeholder && selection.selected === -1 ? (
      <div onClick={openlistHandler}>{props.placeholder}</div>
    ) : (
      <div onClick={openlistHandler}>{options[selection.selected].text}</div>
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

  const value = options.reduce((acc, curr) => {
    return Math.max(acc, convertToRem(curr.text.toString()));
  }, 0);

  let selectionList = options;
  if (search) {
    placeHolder = (
      <input
        type="text"
        placeholder={
          props.placeholder && selection.selected === -1
            ? props.placeholder
            : options[selection.selected].text.toString()
        }
        value={searchTerm}
        onChange={handleSearchChange}
        onClick={openlistHandler}
      />
    );
    selectionList = options.filter((option) => {
      return option.text.toString().toLowerCase().includes(searchTerm);
    });
  }

  let dropDownValues = selectionList.map((option, idx) => {
    const { text, value } = props.options[idx];
    return (
      <li
        key={option.key}
        onClick={() => {
          setSelection({ isOpen: false, selected: idx });
          if (onChange !== undefined) onChange(value);
          if (search) setSearchTerm(option.text.toString());
        }}
      >
        {option.text}
      </li>
    );
  });

  return (
    <StyledDropdown
      open={selection.isOpen}
      ref={container}
      textWidth={value}
      selectionList={selectionList.length}
      search={search}
    >
      {placeHolder}
      {expandOptions}
      <ul>{dropDownValues}</ul>
    </StyledDropdown>
  );
};

export default Dropdown;
