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
  padding: 0;
  box-sizing: border-box;
  text-align: left;
  z-index: 999;
  user-select: none;
  font-weight: lighter;

  p {
    margin: 0;
    padding: 0.7rem 0.3rem 0.7rem 0.7rem;
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  }

  nav {
    padding: 0.7rem 0.3rem 0.7rem 0.7rem;
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
      svg {
        padding-left: 1rem;
        :hover {
          color: ${({ theme }) => theme.primaryColor};
          cursor: pointer;
        }
      }
    }
  }

  .sidebarHome {
    :hover {
      background-color: rgba(255, 255, 255, 0.1);
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

    a {
      padding-bottom: 0.5rem;
    }
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
  .active {
    color: ${({ theme }) => theme.primaryColor};
  }

  ${(props: StyledProps) =>
    props.show &&
    css`
      p,
      nav {
        border: none;
      }
    `}

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
