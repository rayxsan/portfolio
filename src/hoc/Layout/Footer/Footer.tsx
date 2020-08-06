import React, { FunctionComponent } from "react";
import styled from "styled-components";

const StyledFooter = styled.footer`
  position: absolute;
  bottom: 0;
  width: 100%;
  text-align: center;
  height: ${({ theme }) => theme.footerHeight};
  background-color: ${({ theme }) => theme.backgroundColor};
  color: ${({ theme }) => theme.primaryColor};
  transition: transform 0.3s ease-in-out;
`;

interface Props {
  style?: React.CSSProperties | undefined;
}
const Footer: FunctionComponent<Props> = (props) => {
  return <StyledFooter style={props.style}>THIS IS THE FOOTER</StyledFooter>;
};

export default Footer;
