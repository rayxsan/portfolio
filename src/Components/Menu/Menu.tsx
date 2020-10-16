import React, { FunctionComponent, useState } from "react";
import Button from "../Button/Button";
import {
  StyledMenuWrapper,
  StyledMainButton,
  StyledMenuList,
} from "./Menu.styled";

export interface Props {
  header?: string;
  items: string[];
  primary?: boolean;
  secondary?: boolean;
  type?: "simple" | "selected" | "dotted" | any;
}

//TODO: Outsource classNames

const Menu: FunctionComponent<Props> = ({ header, items, type }) => {
  const [openedMenu, setOpenedMenu] = useState(false);
  const [selectedText, setSelectedText] = useState(items[0]);

  const handleOptionClick = function (text?: string): void {
    if (text) setSelectedText(text);
    setOpenedMenu(false);
  };

  let menu = (
    <StyledMainButton
      styledType="selected"
      selectedText={selectedText}
      show={!openedMenu}
      onClick={() => setOpenedMenu(!openedMenu)}
    >
      {header}
    </StyledMainButton>
  );

  // if (type === "selected") {
  //   menu = (
  //     <StyledMainButton
  //       selectedText={selectedText}
  //       show={!openedMenu}
  //       onClick={() => setOpenedMenu(!openedMenu)}
  //     >
  //       <span>{header}</span>
  //     </StyledMainButton>
  //   );
  // }

  if (type === "dotted") {
    menu = (
      <Button circular clicked={() => setOpenedMenu(!openedMenu)}>
        <span className="dotted">...</span>
      </Button>
    );
  }

  return (
    <StyledMenuWrapper>
      {menu}
      <StyledMenuList show={openedMenu}>
        {items.map((value, index) => (
          <li key={index}>
            <button onClick={() => handleOptionClick(value)}>{value}</button>
          </li>
        ))}
      </StyledMenuList>
    </StyledMenuWrapper>
  );
};

export default Menu;
