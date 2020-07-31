import React, { FunctionComponent } from "react";
import { StyledSidebar } from "./Sidebar.styled";

interface Props {
  show: boolean;
  //closed: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

const Sidebar: FunctionComponent<Props> = (props) => {
  return (
    <StyledSidebar
      style={{ transform: props.show ? "translateX(0)" : "translateX(-100%)" }}
    >
      <ul>
        <li>Component1</li>
        <li>Component2</li>
        <li>Component3</li>
      </ul>
    </StyledSidebar>
  );
};

export default Sidebar;
