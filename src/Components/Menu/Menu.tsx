import React, { FunctionComponent, useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { useClickOutsideListenerRef } from "../../shared/utils";

import {
  StyledMenuWrapper,
  StyledMainButton,
  StyledMenuList,
} from "./Menu.styled";

export interface Props {
  header?: string | JSX.Element;
  items: string[];
  primary?: boolean;
  secondary?: boolean;
  type?: "simple" | "selected" | "dotted";
  onClick?: (value: string) => void;
}

const Menu: FunctionComponent<Props> = ({
  header,
  items,
  type,
  primary,
  secondary,
  onClick,
}) => {
  const [openedMenu, setOpenedMenu] = useState(false);
  const [selectedText, setSelectedText] = useState(items[0]);

  const ref = useClickOutsideListenerRef(() => {
    setOpenedMenu(false);
  });

  const handleOptionClick = function (text?: string): void {
    if (text) setSelectedText(text);
    setOpenedMenu(false);
  };

  if (type === "dotted") {
    header = <BsThreeDotsVertical />;
  }

  return (
    <StyledMenuWrapper ref={ref}>
      <StyledMainButton
        primary={primary}
        secondary={secondary}
        styledType={type}
        selectedText={selectedText}
        show={!openedMenu}
        onClick={() => setOpenedMenu(!openedMenu)}
      >
        {header}
      </StyledMainButton>
      <StyledMenuList
        primary={primary}
        secondary={secondary}
        styledType={type}
        show={openedMenu}
      >
        {items.map((value, index) => (
          <li key={index}>
            <button
              onClick={() => {
                handleOptionClick(value);
                if (onClick) onClick(value);
              }}
            >
              {value}
            </button>
          </li>
        ))}
      </StyledMenuList>
    </StyledMenuWrapper>
  );
};

export default Menu;
