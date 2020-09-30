import styled from "styled-components";

interface StyledProps {
  show: boolean;
}

export const StyledSidebar = styled.div`
  position: fixed;
  width: ${({ theme }) => theme.sidebarWidth};
  height: 100%;
  background-color: ${({ theme }) => theme.backgroundColor};
  color: ${({ theme }) => theme.fontColor};
  padding: 10px;
  box-sizing: border-box;
  z-index: 5;
  transition: transform 0.3s ease-in-out;
  transform: ${(props: StyledProps) => (props.show ? "translateX(0)" : "translateX(-100%)")};

  ul {
    display: flex;
    flex-direction: column;
  }

  div {
    padding-right: 6em;
    cursor: default;
  }
  a {
    text-decoration: none;
    color: ${({ theme }) => theme.fontColor};
    text-align: left;
    padding: 0.2em 0 0.2em 1.2em;
  }
  a:hover {
    color: ${({ theme }) => theme.primaryColor};
  }
`;
