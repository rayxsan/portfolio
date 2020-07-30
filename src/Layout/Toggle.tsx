import React, { FunctionComponent } from "react";
import { ToggleStyle } from "./Toggle.styled";

interface Props {
  open: boolean;
  setOpen: (open: boolean) => boolean;
}

const Toggle: FunctionComponent = () => {
  return (
    <ToggleStyle>
      <div />
      <div />
      <div />
    </ToggleStyle>
  );
};

export default Toggle;
