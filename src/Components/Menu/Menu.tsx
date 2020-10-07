import React, { FunctionComponent, useState } from "react";
import Button from "../Button/Button";
import { StyledMenu } from "./Menu.styled";

interface Props {
  header: string;
  items: string[];
  primary?: boolean;
  secondary?: boolean;
  type?: "simple" | "selected" | any;
}

//TODO:
// Outsource classNames
// REMOVE  conditional rendering style
// Recover <Button /> component style in Menu
const Menu: FunctionComponent<Props> = ({ header, items, type }) => {
  const [openedMenu, setOpenedMenu] = useState(false);
  const [selectedText, setSelectionText] = useState(items[0]);

  const handleOptionClick = function (text?: string): void {
    if (text) setSelectionText(text);
    setOpenedMenu(false);
  };

  let menu = (
    <StyledMenu
      onKeyPress={() => setOpenedMenu(!openedMenu)}
      onClick={() => setOpenedMenu(!openedMenu)}
    >
      <Button disabled={openedMenu} clicked={() => setOpenedMenu(!openedMenu)}>
        {header}
      </Button>
      <ul className={`list ${openedMenu ? "show" : "hide"}`}>
        {items.map((value, index) => (
          <li key={index}>
            <Button clicked={() => handleOptionClick()}>
              <span>{value}</span>
            </Button>
          </li>
        ))}
      </ul>
    </StyledMenu>
  );

  if (type === "selected") {
    menu = (
      <StyledMenu
        onKeyPress={() => setOpenedMenu(!openedMenu)}
        onClick={() => setOpenedMenu(!openedMenu)}
        // onChange={() => handleOnChange(selection)}
      >
        <button
          className={openedMenu ? "hide" : "selected"}
          onClick={() => setOpenedMenu(!openedMenu)}
        >
          <span>{header}</span>
          <span>{selectedText}</span>
        </button>
        <ul className={`list ${openedMenu ? "show" : "hide"}`}>
          {items.map((value, index) => (
            <li key={index}>
              <button onClick={() => handleOptionClick(value)}>
                <span>{value}</span>
              </button>
            </li>
          ))}
        </ul>
      </StyledMenu>
    );
  }

  return menu;
};

export default Menu;
