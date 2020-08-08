import styled from "styled-components";
import { ThemeType } from "../../../shared/Theme";

export const StyledSidebar = styled.div`
  position: fixed;
  width: ${({ theme }) => theme.sidebarWidth};
  height: 100%;
  background-color: ${({ theme }) => theme.backgroundColor};
  color: ${({ theme }) => theme.primaryColor};
  padding: 10px;
  box-sizing: border-box;
  border: 2px solid red;
  z-index: 5;
  transition: transform 0.3s ease-in-out;

  ul {
    display: flex;
    flex-direction: column;
  }
`;
