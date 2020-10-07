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

//TODO: Outsource classNames

const Menu: FunctionComponent<Props> = ({ header, items, type }) => {
  const [openedMenu, setOpenedMenu] = useState(false);
  const [selectedText, setSelectedText] = useState(items[0]);

  const handleOptionClick = function (text?: string): void {
    if (text) setSelectedText(text);
    setOpenedMenu(false);
  };

  const menu =
    type === "selected" ? (
      <button className="selected-menu" onClick={() => setOpenedMenu(!openedMenu)}>
        <div>{header}</div>
        <p>{selectedText}</p>
      </button>
    ) : (
      <Button
        outline
        size="medium"
        disabled={openedMenu}
        clicked={() => setOpenedMenu(!openedMenu)}
      >
        {header}
      </Button>
    );

  return (
    <StyledMenu>
      {menu}
      <ul className={`list ${openedMenu ? "show" : "hide"}`}>
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
