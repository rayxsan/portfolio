import React, { FunctionComponent, useState } from "react";
import Button from "../Button/Button";
import { StyledMenu } from "./Menu.styled";

interface Props {
  header: string;
  items: { value: string }[];
  primary?: boolean;
  secondary?: boolean;
}

//TODO:
// Outsource classNames

const Menu: FunctionComponent<Props> = ({ header, items }) => {
  const [openedMenu, setOpenedMenu] = useState(false);

  const handleOptionClick = function (): void {
    setOpenedMenu(false);
  };

  // TODO remove classNames
  return (
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
};

export default Menu;
