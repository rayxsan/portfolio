import React, { FunctionComponent, useState } from "react";
import { StyledMenu } from "./Menu.styled";

interface Props {
  title: string;
  items: { key: number; value: string }[];
}

//TODO: Add click Handler for each item
// Missing all CSS
// Auto-generate ids for each item?

const Menu: FunctionComponent<Props> = (props) => {
  const [open, setOpen] = useState(false);

  return (
    <StyledMenu>
      <div onClick={() => setOpen(!open)}>{props.title}</div>
      {open && (
        <ul>
          {props.items.map((item: { key: number; value: string }) => (
            <li key={item.key}>{item.value}</li>
          ))}
        </ul>
      )}
    </StyledMenu>
  );
};

export default Menu;
