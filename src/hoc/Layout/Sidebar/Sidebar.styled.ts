import styled from "styled-components";

export const StyledSidebar = styled.div`
  position: fixed;
  width: 12rem;
  min-height: 100vh;
  height: 100%;
  margin-bottom: 5rem;
  background-color: ${({ theme }) => theme.backgroundColor};
  color: ${({ theme }) => theme.primaryColor};
  padding: 10px;
  box-sizing: border-box;
  z-index: 5;
  transition: transform 0.3s ease-out;

  ul {
    display: flex;
    flex-direction: column;
  }
`;
