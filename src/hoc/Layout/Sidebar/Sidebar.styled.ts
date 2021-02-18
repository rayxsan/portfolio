import styled, { css } from "styled-components";

interface StyledSidebarProps {
  show: boolean;
}

export const StyledSidebar = styled.div<StyledSidebarProps>`
  position: fixed;
  width: ${({ theme }) => theme.sidebarWidth};
  top: 0;
  margin: 0;
  height: 100%;
  background-color: ${({ theme }) => theme.sidebarBGColor};
  color: ${({ theme }) => theme.sidebarFontColor};
  padding: 0;
  box-sizing: border-box;
  text-align: left;
  z-index: 999;
  user-select: none;
  font-weight: lighter;
  white-space: nowrap;

  p {
    margin: 0;
    padding: 0.7rem 0.3rem 0.7rem 0.7rem;
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  }

  nav {
    padding: 0.7rem 0.3rem 0rem 0.7rem;
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
    :first-child:hover {
      background-color: rgba(255, 255, 255, 0.2);
    }
    p {
      display: inline-block;
      margin: 0;
      padding: 0;
      padding-bottom: 0.5rem;
      border: none;
    }
  }

  .sidebarHome {
    :hover {
      background-color: ${(props: StyledSidebarProps) =>
        props.show ? "none" : "rgba(255, 255, 255, 0.1)"};
    }
  }

  svg {
    font-size: 1.2rem;
    float: right;
  }
  svg:hover {
    color: ${({ theme }) => theme.secondaryColor};
    cursor: pointer;
  }

  ul {
    display: flex;
    flex-direction: column;
    color: ${({ theme }) => theme.sidebarFontColor};
    margin-top: 0.2rem;
    margin-bottom: 0;

    a {
      padding-bottom: 0.5rem;
    }
  }

  nav div:hover {
    color: ${({ theme }) => theme.sidebarFontActiveColor};
    cursor: pointer;
  }

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.sidebarFontColor};
  }

  a:hover {
    color: ${({ theme }) => theme.sidebarFontActiveColor};
  }
  .active {
    color: ${({ theme }) => theme.sidebarFontActiveColor};
  }

  ${(props: StyledSidebarProps) =>
    props.show &&
    css`
      p,
      nav {
        border: none;
      }
      nav {
        padding-top: 0;
        padding-left: 0.2rem;
      }
    `}

  @media (min-width: 499px) {
    ${(props: StyledSidebarProps) =>
      props.show &&
      css`
        transform: translateX(calc(2rem - 100%));
      `}
  }
  @media (max-width: 500px) {
    display: ${(props: StyledSidebarProps) => (props.show ? "none" : "block")};
  }
`;
