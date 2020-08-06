import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  min-height: 100vh;
`;

export const MainContent = styled.main`
  position: relative;
  padding-bottom: ${({ theme }) => theme.footerHeight};
  width: 100%;
  transition: transform 0.3s ease-in-out;
`;
