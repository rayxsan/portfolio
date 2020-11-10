import React, { FunctionComponent, useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import Backdrop from "../UI/Backdrop/Backdrop";

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
  show: boolean;
  clicked: (
    event: React.MouseEvent<SVGElement | HTMLDivElement, MouseEvent>
  ) => void;
}

const Menu: FunctionComponent<Props> = ({
  header,
  items,
  type,
  primary,
  secondary,
  show,
  clicked,
}) => {
  const [openedMenu, setOpenedMenu] = useState(false);
  const [selectedText, setSelectedText] = useState(items[0]);

  const handleOptionClick = function (text?: string): void {
    if (text) setSelectedText(text);
    setOpenedMenu(false);
  };

  if (type === "dotted") {
    header = <BsThreeDotsVertical />;
  }

  return (
    <>
      <Backdrop show={openedMenu} clicked={() => setOpenedMenu(openedMenu)} />
      <StyledMenuWrapper>
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
    </>
  );
};

export default Menu;
