import React, { FunctionComponent, useEffect, useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";

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
}

const Menu: FunctionComponent<Props> = ({
  header,
  items,
  type,
  primary,
  secondary,
}) => {
  //TODO: Find type for createRef<any>
  const container = React.createRef<any>();

  const [openedMenu, setOpenedMenu] = useState(false);
  const [selectedText, setSelectedText] = useState(items[0]);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (container.current && !container.current.contains(event.target)) {
        setOpenedMenu(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  });

  const handleOptionClick = function (text?: string): void {
    if (text) setSelectedText(text);
    setOpenedMenu(false);
  };

  if (type === "dotted") {
    header = <BsThreeDotsVertical />;
  }

  return (
    <StyledMenuWrapper ref={container}>
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
            <button onClick={() => handleOptionClick(value)}>{value}</button>
          </li>
        ))}
      </StyledMenuList>
    </StyledMenuWrapper>
  );
};

export default Menu;
