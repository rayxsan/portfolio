import React, { useState, useRef } from "react";
import { StyledDropdown, StyledPlaceHolder } from "./Dropdown.styled";
import { FaChevronDown, FaTimes } from "react-icons/fa";
import {
  convertToRem,
  useClickOutsideListenerRef,
} from "../../../shared/utils";

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
  onChange?: (value: string | number) => void;
}

export const Dropdown: React.FC<Props> = (props) => {
  const { options, onChange, search, multiple, children } = props;

  const [open, setOpen] = useState(false);

  const [selected, setSelected] = useState<number | string | undefined>(
    props.placeholder ? undefined : options[0].key
  );

  const [searchTerm, setSearchTerm] = useState(
    props.placeholder ? "" : options[0].text.toString()
  );

  const [multipleOptions, setMultipleOptions] = useState(
    new Set<DropdownOption>()
  );

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setOpen(true);
    setSearchTerm(event.target.value);
  };

  const keyToNumber = () => {
    if (selected) {
      for (let i = 0; i < options.length; i++) {
        if (options[i].key === selected) return i;
      }
    }
    return -1;
  };

  let placeHolder;
  if (props.placeholder && keyToNumber() === -1) {
    placeHolder = <StyledPlaceHolder>{props.placeholder}</StyledPlaceHolder>;
  }

  let selectedValues: JSX.Element | (JSX.Element | null)[] | undefined;

  if (keyToNumber() !== -1) {
    selectedValues = <div>{options[keyToNumber()].text}</div>;
  }

  const value = options.reduce((acc, curr) => {
    return Math.max(acc, convertToRem(curr.text.toString()));
  }, 0);

  let selectedList = options;
  let dropDownValues: JSX.Element[] | JSX.Element;

  const searchInputRef = useRef(null);

  function handleFocus() {
    (searchInputRef.current as any).focus();
  }

  //Search Dropdown
  if (search) {
    placeHolder = undefined;
    selectedValues = (
      <input
        type="text"
        ref={searchInputRef}
        placeholder={
          props.placeholder && keyToNumber() === -1
            ? props.placeholder
            : options[keyToNumber()].text.toString()
        }
        value={searchTerm}
        onChange={handleSearchChange}
        onClick={(e) => {
          e?.preventDefault();
          if (!open) setSearchTerm("");
        }}
      />
    );
    // let temOptions = options;
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
      if (search) handleFocus();
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

    let setArray = Array.from(multipleOptions);
    let multipleSearchInput: JSX.Element | undefined;
    if (search) {
      multipleSearchInput = (
        <input
          type="text"
          ref={searchInputRef}
          autoComplete="off"
          placeholder={
            props.placeholder && keyToNumber() === -1
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
      );
    }
    selectedValues =
      !search && multipleOptions.size === 0 ? (
        <StyledPlaceHolder>{props.placeholder}</StyledPlaceHolder>
      ) : (
        <>
          {setArray.map((option) => {
            return (
              <div key={option.key} onClick={(e) => clickedOption(e, option)}>
                {option.text}
                <FaTimes onClick={(e) => removeMultipleOption(option, e)} />
              </div>
            );
          })}
          {multipleSearchInput}
        </>
      );
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
    setMultipleOptions(tempSet);
    if (search) {
      setSearchTerm("");
      handleFocus();
    }
  };

  dropDownValues = selectedList.map((option, idx) => {
    const value = props.options[idx].value;
    return (
      <li
        key={option.key}
        onClick={(e) => {
          setSelected(option.key);
          if (onChange !== undefined) onChange(value);
          if (search && !multiple) {
            closeHandler(e);
            setSearchTerm(option.text.toString());
          }
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
    setOpen(false);
    if (search) {
      if (selectedList.length > 0 && selectedList.length < options.length) {
        if (selected !== undefined) setSelected(selectedList[0].key);
        setSearchTerm(selectedList[0].text.toString());
      }
      if (keyToNumber() !== -1) {
        setSearchTerm(options[keyToNumber()].text.toString());
      }
    }
    if (multiple) {
      setSearchTerm("");
    }
  });

  const toggleHandler = () => {
    if (multiple || search) {
      setOpen(true);
      if (selectedList.length < 1) {
        setOpen(false);
      }
    } else setOpen(!open);
  };

  const openHandler = (event: React.MouseEvent) => {
    event.stopPropagation();
    setOpen(true);
    if (search) {
      setSearchTerm("");
      handleFocus();
    }
    if (multiple) if (multipleOptions.size === options.length) setOpen(false);
  };

  const closeHandler = (event: React.MouseEvent) => {
    event.stopPropagation();
    if (search && !multiple) {
      if (selectedList.length > 0 && selectedList.length < options.length) {
        setSelected(selectedList[0].key);
        setSearchTerm(selectedList[0].text.toString());
      } else {
        setSearchTerm("");
      }
      if (selected) {
        setSearchTerm(options[keyToNumber()].text.toString());
      }
    }
    if (search && multiple) {
      setSearchTerm("");
    }
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
        selectedOption={keyToNumber() + 1}
        search={search}
        multiple={multiple}
        onClick={(e) => {
          if (search || multiple) {
            openHandler(e);
          } else toggleHandler();
        }}
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
