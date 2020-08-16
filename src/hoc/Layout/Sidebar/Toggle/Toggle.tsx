import React, { FunctionComponent } from "react";
import { ToggleStyle } from "./Toggle.styled";
import { FaBars, FaTimes } from "react-icons/fa";

interface Props {
  //open: boolean;
  clicked: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

const Toggle: FunctionComponent<Props> = (props) => {
  let tg = <FaBars />;
  if (false) {
    tg = <FaTimes />;
  }
  return <ToggleStyle onClick={props.clicked}>{tg}</ToggleStyle>;
};

export default Toggle;
