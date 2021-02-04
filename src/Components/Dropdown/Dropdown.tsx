import React, {
  useState,
  //useRef,
  // useRef /*, useEffect, SyntheticEvent*/,
} from "react";
// import DropdownCard from "./DropdownCard";
import { StyledDropdown } from "./Dropdown.styled";
import { FaChevronDown, FaTimes } from "react-icons/fa";
import { convertToRem, useClickOutsideListenerRef } from "../../shared/utils";

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
  multiple?: boolean;
  //onClose: () => void;
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

export const Dropdown: React.FC<Props> = (props) => {
  const { options, onChange, search, multiple, children } = props;

  const [open, setOpen] = useState(false);

  const [selected, setSelected] = useState(props.placeholder ? -1 : 0);

  const [searchTerm, setSearchTerm] = useState(
    props.placeholder ? props.placeholder : options[selected].text.toString()
  );

  const [multipleOptions, setMultipleOptions] = useState<DropdownOption[]>([]);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const ref = useClickOutsideListenerRef(() => {
    if (!multiple) setOpen(false);
  });

  const openHandler = () => {
    setOpen(!open);
    if (multiple) {
      setOpen(true);
      if (selectedList.length < 1) {
        setOpen(false);
      }
    }
  };

  const closehandler = (event: any) => {
    event.stopPropagation();
    setOpen(false);
  };

  let placeHolder;
  placeHolder =
    props.placeholder && selected === -1 ? (
      <div>{props.placeholder}</div>
    ) : (
      <div>{options[selected].text}</div>
    );

  const value = options.reduce((acc, curr) => {
    return Math.max(acc, convertToRem(curr.text.toString()));
  }, 0);

  let selectedList = options;
  let dropDownValues: JSX.Element[] | JSX.Element;

  //Search Dropdown
  if (search) {
    placeHolder = (
      <input
        type="text"
        placeholder={
          props.placeholder && selected === -1
            ? props.placeholder
            : options[selected].text.toString()
        }
        value={searchTerm}
        onChange={handleSearchChange}
        onClick={() => {
          setSearchTerm("");
        }}
      />
    );
    selectedList = options.filter((option) => {
      return option.text.toString().toLowerCase().includes(searchTerm);
    });
  }

  //Multiple Search Dropdown

  if (multiple) {
    selectedList = options.filter((option) => {
      for (let i = 0; i < options.length; i++) {
        if (multipleOptions[i])
          if (multipleOptions[i].key === option.key) return null;
      }
      return option;
    });

    const removeMultipleOption = (event: any) => {
      event.stopPropagation();
      console.log("TODO: Return to list");
    };

    placeHolder =
      props.placeholder && selected === -1 ? (
        <div>{props.placeholder}</div>
      ) : (
        multipleOptions.map((option, idx) => {
          return (
            <div key={idx}>
              {option.text}
              <FaTimes onClick={(e) => removeMultipleOption(e)} />
            </div>
          );
        })
      );
  }
  //Dropdown list renderer

  dropDownValues = selectedList.map((option, idx) => {
    const value = props.options[idx].value;
    return (
      <li
        key={option.key}
        onClick={() => {
          setSelected(idx);
          if (onChange !== undefined) onChange(value);
          if (search) setSearchTerm(option.text.toString());
          if (multiple) setMultipleOptions([...multipleOptions, option]);
        }}
      >
        {option.text}
      </li>
    );
  });

  if (search && selectedList.length === 0) {
    dropDownValues = <li>No results founds.</li>;
  }

  const expandOptions = open ? (
    <FaTimes onClick={(e) => closehandler(e)} />
  ) : (
    <FaChevronDown />
  );

  return (
    <>
      <StyledDropdown
        ref={ref}
        open={open}
        textWidth={value}
        selectedList={selectedList.length}
        selectedOption={selected + 1}
        search={search}
        multiple={multiple}
        onClick={openHandler}
      >
        {expandOptions}
        {placeHolder}
        <ul>{dropDownValues}</ul>
        {children}
      </StyledDropdown>
    </>
  );
};

export default Dropdown;
