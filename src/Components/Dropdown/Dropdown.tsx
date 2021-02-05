import React, {
  useState,
  //useRef,
  // useRef /*, useEffect, SyntheticEvent*/,
} from "react";
// import DropdownCard from "./DropdownCard";
import { StyledDropdown, StyledPlaceHolder } from "./Dropdown.styled";
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

  const [multipleOptions, setMultipleOptions] = useState(
    new Set<DropdownOption>()
  );

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const ref = useClickOutsideListenerRef(() => {
    setOpen(false);
  });

  const toggleHandler = () => {
    setOpen(!open);
    if (multiple) {
      setOpen(true);
      if (selectedList.length < 1) {
        setOpen(false);
      }
    }
  };

  const openHandler = (event: any) => {
    event.stopPropagation();
    if (search) setSearchTerm("");
    setOpen(true);
  };

  const closeHandler = (event: any) => {
    event.stopPropagation();
    setOpen(false);
  };

  let placeHolder;
  if (props.placeholder && selected === -1) {
    placeHolder = <div>{props.placeholder}</div>;
  }

  let selectedValues: JSX.Element | JSX.Element[] | undefined | any;

  if (selected !== -1) {
    selectedValues = <div>{options[selected].text}</div>;
  }

  //let placeHolder;
  // placeHolder =
  //   props.placeholder && selected === -1 ? (
  //     <div>{props.placeholder}</div>
  //   ) : (
  //     <div>{options[selected].text}</div>
  //   );

  const value = options.reduce((acc, curr) => {
    return Math.max(acc, convertToRem(curr.text.toString()));
  }, 0);

  let selectedList = options;
  let dropDownValues: JSX.Element[] | JSX.Element;

  //Search Dropdown
  if (search) {
    placeHolder = undefined;
    selectedValues = (
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
    const removeMultipleOption = (option: DropdownOption, event: any) => {
      event.stopPropagation();
      const tempSet = new Set(multipleOptions);
      tempSet.delete(option);
      if (tempSet.size < 1) setOpen(open);
      setMultipleOptions(tempSet);
    };

    selectedList = options.filter((option) => {
      if (multipleOptions.has(option)) return null;
      return option;
    });

    selectedValues =
      multipleOptions.size === 0 ? (
        <div>{props.placeholder}</div>
      ) : (
        options.map((option) => {
          if (multipleOptions.has(option)) {
            return (
              <div
                key={option.key}
                onClick={() => console.log("selected: " + option.key)}
              >
                {option.text}
                <FaTimes onClick={(e) => removeMultipleOption(option, e)} />
              </div>
            );
          }

          return null;
        })
      );
  }
  //Dropdown list renderer
  const addMultipleOption = (option: DropdownOption, event: any) => {
    event.stopPropagation();
    const tempSet = new Set(multipleOptions);
    tempSet.add(option);
    if (tempSet.size === options.length) setOpen(false);
    setMultipleOptions(tempSet);
  };

  dropDownValues = selectedList.map((option, idx) => {
    const value = props.options[idx].value;
    return (
      <li
        key={option.key}
        onClick={(e) => {
          setSelected(idx);
          if (onChange !== undefined) onChange(value);
          if (search) setSearchTerm(option.text.toString());
          if (multiple) addMultipleOption(option, e);
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
    <FaTimes onClick={(e) => closeHandler(e)} />
  ) : (
    <FaChevronDown onClick={(e) => openHandler(e)} />
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
        placeHolder={props.placeholder !== undefined}
        onClick={toggleHandler}
      >
        {expandOptions}
        {placeHolder || selectedValues}
        <ul>{dropDownValues}</ul>
        {children}
      </StyledDropdown>
    </>
  );
};

export default Dropdown;
