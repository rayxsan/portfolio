import styled, { css } from "styled-components";

interface StyledProps {
  show: boolean;
}

export const StyledSidebar = styled.div`
  position: fixed;
  width: ${({ theme }) => theme.sidebarWidth};
  top: 0;
  margin: 0;
  height: 100%;
  background-color: ${({ theme }) => theme.sidebarBGColor};
  color: ${({ theme }) => theme.sidebarFontColor};
  padding: 10px;
  box-sizing: border-box;
  z-index: 5;

  ${(props: StyledProps) =>
    props.show &&
    css`
      transition: transform 0.5s ease-in-out;
      transform: translateX(-82%);
      svg {
        transform: rotate(180deg);
      }
    `}

  svg {
    font-size: 1.2rem;
    float: right;
  }
  svg:hover {
    color: red;
  }

  span {
    display: inline-flex;
    p {
      margin: 0;
    }
    padding: 0;

    svg {
      margin-left: 4rem;
    }
  }
  ul {
    display: flex;
    flex-direction: column;
    color: ${({ theme }) => theme.sidebarFontColor};
  }

  div {
    padding-right: 6em;
    cursor: default;
  }

  .NavSection {
    margin-top: 1em;
    width: auto;
  }

  .NavSection:hover {
    color: ${({ theme }) => theme.primaryColor};
  }
  a {
    text-decoration: none;
    color: ${({ theme }) => theme.sidebarFontColor};
    text-align: left;
    padding: 0.2em 0 0.2em 1.2em;
  }
  a:hover {
    color: ${({ theme }) => theme.primaryColor};
  }
`;
