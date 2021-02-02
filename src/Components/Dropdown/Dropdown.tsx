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
  multiple?: boolean;
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
  const { options, onChange, search, multiple } = props;

  const [selection, setSelection] = useState({
    isOpen: false,
    selected: props.placeholder ? -1 : 0,
  });

  const [searchTerm, setSearchTerm] = useState(
    props.placeholder
      ? props.placeholder
      : options[selection.selected].text.toString()
  );

  const [multipleOptions, setMultipleOptions] = useState<DropdownOption[]>([]);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const container = React.createRef<any>();

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (selection.isOpen) {
        if (container.current && !container.current.contains(event.target)) {
          if (search) {
            if (selectionList.length === 0 && selection.selected === -1) {
              setSelection({
                ...selection,
                isOpen: false,
              });
            }
            if (selectionList.length === 0 && selection.selected !== -1) {
              setSearchTerm(options[selection.selected].text.toString());
              setSelection({
                ...selection,
                isOpen: false,
              });
            }
            if (selectionList.length > 0) {
              let value = 0;
              if (selectionList.length === options.length) {
                value = options.length;
              }
              for (let i = 0; i < options.length; i++) {
                if (options[i].key === selectionList[0].key) {
                  value = i;
                }
                setSearchTerm(options[value].text.toString());
                setSelection({
                  selected: value,
                  isOpen: false,
                });
              }
            }
            if (
              selectionList.length === options.length &&
              selection.selected !== -1
            ) {
              setSearchTerm(options[selection.selected].text.toString());
              setSelection({
                ...selection,
                isOpen: false,
              });
            }
          } else {
            setSelection({
              ...selection,
              isOpen: false,
            });
          }
          if (multiple)
            if (
              selectionList.length === options.length &&
              selection.selected !== -1
            ) {
              setMultipleOptions([
                ...multipleOptions,
                options[selection.selected],
              ]);
            }
        }
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

  const value = options.reduce((acc, curr) => {
    return Math.max(acc, convertToRem(curr.text.toString()));
  }, 0);

  let selectionList = options;

  //Search Dropdown
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

  //Multiple Search Dropdown

  const removeMultipleOption = (option: DropdownOption) => {
    selectionList.push(option);
  };

  let placeHolderM =
    props.placeholder && selection.selected === -1 ? (
      <div onClick={openlistHandler}>{props.placeholder}</div>
    ) : (
      multipleOptions.map((option, idx) => {
        return (
          <div
            key={idx}
            onClick={() => {
              setSelection({ ...selection, selected: idx });
              console.log(selection.selected);
            }}
          >
            {option.text}
            <FaTimes onClick={() => removeMultipleOption(option)} />
          </div>
        );
      })
    );
  if (multiple) {
    selectionList = options.filter((option) => {
      for (let i = 0; i < options.length; i++) {
        if (multipleOptions[i])
          if (multipleOptions[i].key === option.key) return null;
      }
      console.log(multipleOptions.length, selectionList.length);
      return option;
    });
  }

  //Dropdown list renderer
  let dropDownValues: JSX.Element[] | JSX.Element;
  dropDownValues = selectionList.map((option, idx) => {
    const value = props.options[idx].value;
    return (
      <li
        key={option.key}
        onClick={() => {
          setSelection({ isOpen: false, selected: idx });
          if (onChange !== undefined) onChange(value);
          if (search) setSearchTerm(option.text.toString());
          if (multiple) setMultipleOptions([...multipleOptions, option]);
        }}
      >
        {option.text}
      </li>
    );
  });

  if (selectionList.length === 0) {
    if (search) {
      dropDownValues = <li>No results founds.</li>;
    }
    if (multiple) {
      //TODO: if I try to change isOpen with setSelection it gives an error.
      selection.isOpen = false;
    }
  }

  return (
    <StyledDropdown
      open={selection.isOpen}
      ref={container}
      textWidth={value}
      selectionList={selectionList.length}
      selectedOption={selection.selected + 1}
      search={search}
      multiple={multiple}
    >
      {multiple ? placeHolderM : placeHolder}
      {expandOptions}
      <ul>{dropDownValues}</ul>
    </StyledDropdown>
  );
};

export default Dropdown;
