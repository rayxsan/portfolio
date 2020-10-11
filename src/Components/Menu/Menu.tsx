import React, { FunctionComponent, useState } from "react";
import Button from "../Button/Button";
import { StyledMenu } from "./Menu.styled";

interface Props {
  header?: string;
  items: string[];
  primary?: boolean;
  secondary?: boolean;
  type?: "Simple" | "selected" | "dotted" | string;
}

//TODO: Outsource classNames

const Menu: FunctionComponent<Props> = ({ header, items, type }) => {
  const [openedMenu, setOpenedMenu] = useState(false);
  const [selectedText, setSelectedText] = useState(items[0]);

  const handleOptionClick = function (text?: string): void {
    if (text) setSelectedText(text);
    setOpenedMenu(false);
  };

  let addClass = "";

  let menu = (
    <Button
      outline
      size="medium"
      disabled={openedMenu}
      clicked={() => setOpenedMenu(!openedMenu)}
    >
      {header}
    </Button>
  );

  if (type === "selected") {
    menu = (
      <button
        className={`selected-menu ${!openedMenu ? "show" : "hide"}`}
        onClick={() => setOpenedMenu(!openedMenu)}
      >
        <div>{header}</div>
        <span>{selectedText}</span>
      </button>
    );
  }

  if (type === "dotted") {
    menu = (
      <Button
        className={!openedMenu ? "show" : "hide"}
        circular
        clicked={() => setOpenedMenu(!openedMenu)}
      >
        <span className="dotted">...</span>
      </Button>
    );
    addClass = "dotted-list";
  }

  return (
    <StyledMenu>
      {menu}
      <ul className={`${addClass} ${openedMenu ? "show" : "hide"}`}>
        {items.map((value, index) => (
          <li key={index}>
            <Button size="medium" clicked={() => handleOptionClick(value)}>
              <span>{value}</span>
            </Button>
          </li>
        ))}
      </ul>
    </StyledMenu>
  );
};

export default Menu;
