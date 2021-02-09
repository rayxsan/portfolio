import React, { FunctionComponent } from "react";
import styled from "styled-components";
import { FaGithub } from "react-icons/fa";

const StyledFooter = styled.div`
  width: 100%;
  text-align: right;

  line-height: ${({ theme }) => theme.footerHeight};
  height: ${({ theme }) => theme.footerHeight};
  background-color: ${(props) => props.theme.footerBGColor};
  color: ${({ theme }) => theme.footerFontColor};
  z-index: 10;
  a {
    margin-right: 5rem;
    text-decoration: none;
    color: white;
    :hover {
      color: #ccc;
    }
  }
`;

interface Props {}
const Footer: FunctionComponent<Props> = () => {
  return (
    <StyledFooter>
      <a
        href="https://github.com/rayxsan/portfolio"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub />
      </a>
    </StyledFooter>
  );
};

export default Footer;
