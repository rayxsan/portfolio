import React, { FunctionComponent } from "react";
import { ToggleStyle } from "./Toggle.styled";

interface Props {
  clicked: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

const Toggle: FunctionComponent<Props> = (props) => {
  return (
    <ToggleStyle onClick={props.clicked}>
      <div />
      <div />
      <div />
    </ToggleStyle>
  );
};

export default Toggle;
