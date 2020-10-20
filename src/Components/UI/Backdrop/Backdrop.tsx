import React, { FunctionComponent } from "react";

import { StyledBackdrop } from "./Backdrop.styled";

interface Props {
  clicked: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  show: boolean;
}
const Backdrop: FunctionComponent<Props> = ({ show, clicked }) =>
  show ? <StyledBackdrop onClick={clicked}></StyledBackdrop> : null;

export default Backdrop;
