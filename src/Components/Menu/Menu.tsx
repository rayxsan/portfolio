import React, { FunctionComponent, useState } from "react";
import Button from "../Button/Button";
import { StyledMenu } from "./Menu.styled";

interface Props {
  label: string;
  items: { key: number; value: string }[];
}

//TODO:
// Auto-generate ids for each item?

const Menu: FunctionComponent<Props> = ({ label, items }) => {
  const [menuOpened, setMenuOpened] = useState(false);

  const handleOptionClick = function (): void {
    setMenuOpened(false);
  };

  return (
    <StyledMenu>
      <Button clicked={() => setMenuOpened(!menuOpened)} outline secondary>
        {label}
      </Button>
      {menuOpened && (
        <ul>
          {items.map((item) => (
            <Button key={item.key} clicked={() => handleOptionClick()}>
              <span>{item.value}</span>
            </Button>
          ))}
        </ul>
      )}
    </StyledMenu>
  );
};

export default Menu;
