import styled from "styled-components";

export const StyledSidebar = styled.div`
  height: 100vh;
  width: 200px;
  background-color: ${({ theme }) => theme.backgroundColor};
  color: ${({ theme }) => theme.primaryColor};
  padding: 10px;
  box-sizing: border-box;
  position: fixed;
  z-index: 5;
  transition: transform 0.3s ease-out;
`;
