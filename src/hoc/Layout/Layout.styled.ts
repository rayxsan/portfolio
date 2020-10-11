import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  min-height: 100vh;

  .footer {transition: transform 0.8s ease-in-out}
`;

export const MainContent = styled.div`
position: relative;
  padding-bottom ${({ theme }) => theme.footerHeight};
  transition: transform 0.8s ease-in-out;
  overflow: scroll;

  p { padding: 0 1rem}

  ::-webkit-scrollbar {
    width: 0px;
    background: transparent; /* make scrollbar transparent */
  }
`;
