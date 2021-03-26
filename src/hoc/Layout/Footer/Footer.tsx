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
    opacity: 0.6;
    padding: 0.3rem;
    label {
      cursor: pointer;
      padding: 0.3rem;
    }
    :hover {
      opacity: 0.8;
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
        <label>2021</label>
        <FaGithub />
      </a>
    </StyledFooter>
  );
};

export default Footer;
