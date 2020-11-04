import React, { FunctionComponent } from "react";
import styled from "styled-components";

const StyledFooter = styled.div`
  width: 100%;
  text-align: center;
  line-height: ${({ theme }) => theme.footerHeight};
  height: ${({ theme }) => theme.footerHeight};
  background-color: ${(props) => props.theme.footerBGColor};
  color: ${({ theme }) => theme.footerFontColor};
  z-index: 888;
`;

interface Props {}
const Footer: FunctionComponent<Props> = () => {
  return <StyledFooter>FOOTER</StyledFooter>;
};

export default Footer;
