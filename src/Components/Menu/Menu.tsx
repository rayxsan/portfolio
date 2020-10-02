import React, { FunctionComponent, useState } from "react";
import Button from "../Button/Button";
import { StyledMenu } from "./Menu.styled";

interface Props {
  header: string;
  items: { value: string }[];
}

//TODO:
// Auto-generate ids for each item?
// Handle external click to close
// Outsource classNames

const Menu: FunctionComponent<Props> = ({ header, items }) => {
  const [openedMenu, setOpenedMenu] = useState(false);

  const handleOptionClick = function (): void {
    setOpenedMenu(false);
  };

  return (
    <StyledMenu
      onKeyPress={() => setOpenedMenu(!openedMenu)}
      onClick={() => setOpenedMenu(!openedMenu)}
    >
      <div className="menu-items">
        <div className={openedMenu ? "hide-header" : "header"}>
          <Button clicked={() => setOpenedMenu(!openedMenu)} outline secondary>
            {header}
          </Button>
        </div>
        <ul className={`list ${openedMenu ? "show" : "hide"}`}>
          {items.map(({ value }, index) => (
            <li key={index} className="list-item">
              {/*TODO replace <Button for another component*/}
              <Button text clicked={() => handleOptionClick()}>
                <span>{value}</span>
              </Button>
            </li>
          ))}
        </ul>
      </div>
    </StyledMenu>
  );
};

export default Menu;
