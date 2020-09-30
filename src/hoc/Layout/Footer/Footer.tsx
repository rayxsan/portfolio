import React, { FunctionComponent } from "react";
import styled from "styled-components";

const StyledFooter = styled.footer`
  position: absolute;
  bottom: 0;
  width: 100%;
  text-align: center;
  line-height: ${({ theme }) => theme.footerHeight};
  margin-top: 3rem;
  height: ${({ theme }) => theme.footerHeight};
  background-color: ${({ theme }) => theme.backgroundColor};
  color: ${({ theme }) => theme.fontColor};
  transition: transform 0.3s ease-in-out;
`;

interface Props {
  style?: React.CSSProperties | undefined;
}
const Footer: FunctionComponent<Props> = props => {
  return <StyledFooter style={props.style}>FOOTER</StyledFooter>;
};

export default Footer;
