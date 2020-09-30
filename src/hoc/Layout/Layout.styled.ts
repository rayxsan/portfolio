import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  min-height: 100vh;
`;

export const MainContent = styled.main`
  position: absolute;
  top: 4rem;
  right: 0;
  bottom: 0;
  left: 0;
  padding-bottom: ${({ theme }) => theme.footerHeight};
  transition: transform 0.3s ease-in-out;
  padding-top: 2rem;
  margin-bottom: 2rem;
  overflow: scroll;

  ::-webkit-scrollbar {
    width: 0px;
    background: transparent; /* make scrollbar transparent */
  }
`;
