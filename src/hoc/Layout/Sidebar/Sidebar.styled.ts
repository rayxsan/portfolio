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
  padding: 0.7rem 0.3rem 0.7rem 0.7rem;
  box-sizing: border-box;
  text-align: left;
  z-index: 999;

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

    a {
      margin-bottom: 0.5rem;
    }
  }

  nav div {
    margin-top: 1em;
    width: auto;
  }

  nav div:hover {
    color: ${({ theme }) => theme.primaryColor};
    cursor: pointer;
  }

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.sidebarFontColor};
  }
  a:hover {
    color: ${({ theme }) => theme.primaryColor};
  }
  @media (min-width: 499px) {
    ${(props: StyledProps) =>
      props.show &&
      css`
        transform: translateX(calc(2rem - 100%));
        svg {
          transform: rotate(180deg);
        }
      `}
  }
  @media (max-width: 500px) {
    display: ${(props: StyledProps) => (props.show ? "block" : "none")};
  }
`;
