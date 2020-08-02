import React, { FunctionComponent } from "react";
import styled from "styled-components";

const StyledFooter = styled.footer`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 5rem;
  background-color: ${({ theme }) => theme.backgroundColor};
  text-align: center;
  color: ${({ theme }) => theme.primaryColor};
`;

interface Props {
  style: React.CSSProperties | undefined;
}
const Footer: FunctionComponent<Props> = (props) => {
  return <StyledFooter style={props.style}>THIS IS THE FOOTER</StyledFooter>;
};

export default Footer;
