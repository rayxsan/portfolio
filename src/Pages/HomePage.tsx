import React from "react";
import styled from "styled-components";
import Card from "../Components/UI/Card/Card";
import { FaGithub } from "react-icons/fa";

const StyledText = styled.div`
  text-align: left;
  svg {
    padding-right: 0.2em;
  }
  a {
    text-decoration: none;

    color: ${({ theme }) => theme.fontColor};

    :hover {
      color: ${({ theme }) => theme.primaryColor};
      border-bottom: 1px solid ${({ theme }) => theme.primaryColor};
    }
  }
`;

const HomePage = () => (
  <StyledText>
    <Card title="Introduction:">
      <p>Brief description...</p>
    </Card>
    <Card title="Useful links:">
      <a
        href="https://github.com/rayxsan/portfolio"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub />
        Github
      </a>
    </Card>
  </StyledText>
);

export default HomePage;
