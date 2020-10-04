import React, { FunctionComponent, useState } from "react";
import { StyledMenu } from "./Menu.styled";

interface Props {
  header: string;
  items: { value: string }[];
  primary?: boolean;
  secondary?: boolean;
  type?: "simple" | "selected" | any;
}

//TODO:
// Outsource classNames

const Menu: FunctionComponent<Props> = ({ header, items, type }) => {
  const [openedMenu, setOpenedMenu] = useState(false);
  const [selection, setSelection] = useState("");

  const handleOptionClick = function (): void {
    setOpenedMenu(false);
  };

  const handleOnChange = () => {
    setSelection("items[1].value");
  };

  let menu = (
    <StyledMenu
      onKeyPress={() => setOpenedMenu(!openedMenu)}
      onClick={() => setOpenedMenu(!openedMenu)}
    >
      <button
        className={openedMenu ? "hide" : "header"}
        onClick={() => setOpenedMenu(!openedMenu)}
      >
        {header}
      </button>
      <ul className={`list ${openedMenu ? "show" : "hide"}`}>
        {items.map(({ value }, index) => (
          <li key={index}>
            <button onClick={() => handleOptionClick()}>
              <span>{value}</span>
            </button>
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
      >
        <button
          className={openedMenu ? "hide" : "selected"}
          onClick={() => setOpenedMenu(!openedMenu)}
        >
          <span>{header}</span>
          <span>{selection}</span>
        </button>
        <ul className={`list ${openedMenu ? "show" : "hide"}`}>
          {items.map(({ value }, index) => (
            <li key={index}>
              <button
                onClick={() => handleOptionClick()}
                onChange={() => handleOnChange()}
              >
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
