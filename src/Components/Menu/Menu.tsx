import React, { FunctionComponent, useState } from "react";

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
  type?: "simple" | "selected" | "dotted";
}

const Menu: FunctionComponent<Props> = ({
  header,
  items,
  type,
  primary,
  secondary,
}) => {
  const [openedMenu, setOpenedMenu] = useState(false);
  const [selectedText, setSelectedText] = useState(items[0]);

  const handleOptionClick = function (text?: string): void {
    if (text) setSelectedText(text);
    setOpenedMenu(false);
  };

  return (
    <StyledMenuWrapper>
      <StyledMainButton
        primary={primary}
        secondary={secondary}
        styledType={type}
        selectedText={selectedText}
        show={!openedMenu}
        onClick={() => setOpenedMenu(!openedMenu)}
      >
        <span>{type === "dotted" ? "" : header}</span>
      </StyledMainButton>
      <StyledMenuList
        primary={primary}
        secondary={secondary}
        styledType={type}
        show={openedMenu}
      >
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
