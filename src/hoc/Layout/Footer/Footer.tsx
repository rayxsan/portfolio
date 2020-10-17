import React, { FunctionComponent } from "react";
import styled from "styled-components";

const StyledFooter = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  overflow: hidden;
  text-align: center;
  line-height: ${({ theme }) => theme.footerHeight};
  height: ${({ theme }) => theme.footerHeight};
  background-color: ${({ theme }) => theme.footerBGColor};
  color: ${({ theme }) => theme.footerFontColor};
  /* transition: width 0.8s ease-in-out; */
`;

interface Props {
  style?: React.CSSProperties | undefined;
  className?: string;
}
const Footer: FunctionComponent<Props> = ({ style, className }) => {
  return (
    <StyledFooter className={className} style={style}>
      FOOTER
    </StyledFooter>
  );
};

export default Footer;
