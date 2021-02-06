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

export const Dropdown: React.FC<Props> = (props) => {
  const { options, onChange, search, multiple, children } = props;

  const [open, setOpen] = useState(false);

  const [selected, setSelected] = useState(props.placeholder ? -1 : 0);

  const [searchTerm, setSearchTerm] = useState(
    props.placeholder ? "" : options[selected].text.toString()
  );

  const [multipleOptions, setMultipleOptions] = useState(
    new Set<DropdownOption>()
  );

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setOpen(true);
    setSearchTerm(event.target.value);
  };

  let placeHolder;
  if (props.placeholder && selected === -1) {
    placeHolder = <StyledPlaceHolder>{props.placeholder}</StyledPlaceHolder>;
  }

  let selectedValues: JSX.Element | (JSX.Element | null)[] | undefined;

  if (selected !== -1) {
    selectedValues = <div>{options[selected].text}</div>;
  }

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
    const removeMultipleOption = (
      option: DropdownOption,
      event: React.MouseEvent
    ) => {
      event.stopPropagation();
      const tempSet = new Set(multipleOptions);
      tempSet.delete(option);
      if (tempSet.size < 1) setOpen(open);
      setMultipleOptions(tempSet);
    };

    selectedList = options.filter((option) => {
      if (multipleOptions.has(option)) return null;
      if (search) {
        return option.text.toString().toLowerCase().includes(searchTerm);
      }
      return option;
    });

    const clickedOption = (event: React.MouseEvent, option: DropdownOption) => {
      event.stopPropagation();
      console.log("Clicked: " + option.value);
    };
    selectedValues =
      multipleOptions.size === 0 ? (
        <StyledPlaceHolder>{props.placeholder}</StyledPlaceHolder>
      ) : (
        options.map((option) => {
          if (multipleOptions.has(option)) {
            return (
              <div key={option.key} onClick={(e) => clickedOption(e, option)}>
                {option.text}
                <FaTimes onClick={(e) => removeMultipleOption(option, e)} />
              </div>
            );
          }

          return null;
        })
      );
    if (search) {
      selectedValues = (
        <>
          {options.map((option) => {
            if (multipleOptions.has(option)) {
              return (
                <div key={option.key} onClick={(e) => clickedOption(e, option)}>
                  {option.text}
                  <FaTimes onClick={(e) => removeMultipleOption(option, e)} />
                </div>
              );
            }

            return null;
          })}

          <input
            type="text"
            autoComplete="off"
            placeholder={
              props.placeholder && selected === -1
                ? props.placeholder
                : undefined
            }
            value={searchTerm}
            onChange={handleSearchChange}
            onClick={() => {
              setOpen(true);
              setSearchTerm("");
            }}
          />
        </>
      );
    }
  }
  //Dropdown list renderer
  const addMultipleOption = (
    option: DropdownOption,
    event: React.MouseEvent
  ) => {
    event.stopPropagation();
    const tempSet = new Set(multipleOptions);
    tempSet.add(option);
    if (tempSet.size === options.length) setOpen(false);
    if (search) setSearchTerm("");
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
          if (search && !multiple) setSearchTerm(option.text.toString());
          if (multiple) {
            addMultipleOption(option, e);
            if (search) setSearchTerm("");
          }
        }}
      >
        {option.text}
      </li>
    );
  });

  if (search && selectedList.length === 0) {
    dropDownValues = <li>No results founds.</li>;
  }

  //Handlers for open and close.
  const ref = useClickOutsideListenerRef(() => {
    if (search && !multiple)
      if (selected !== -1) setSearchTerm(options[selected].text.toString());
    setOpen(false);
  });

  const toggleHandler = () => {
    setOpen(!open);
    if (search) {
    }
    if (multiple) {
      setOpen(true);
      if (selectedList.length < 1) {
        setOpen(false);
      }
    }
  };

  const openHandler = (event: React.MouseEvent) => {
    event.stopPropagation();
    setOpen(true);
    if (search) setSearchTerm("");
    if (multipleOptions.size === options.length) setOpen(false);
  };

  const closeHandler = (event: React.MouseEvent) => {
    event.stopPropagation();
    if (search && !multiple)
      if (selected !== -1) setSearchTerm(options[selected].text.toString());
    setOpen(false);
  };
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
