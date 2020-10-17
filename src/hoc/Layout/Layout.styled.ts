import styled, { css } from "styled-components";

interface Props {
  move: boolean;
}

export const Wrapper = styled.div`
  min-height: 100vh;
  flex-direction: column;
`;

export const MainContent = styled.div`
  position: absolute;
  width: calc(100% - 2rem);
  margin-left: 2rem;
  padding-bottom: ${({ theme }) => theme.footerHeight};
  /* transition: width 0.8s ease-in-out; */
  overflow: scroll;

  p {
    padding: 0 1rem;
  }

  ::-webkit-scrollbar {
    width: 0px;
    background: transparent; /* make scrollbar transparent */
  }

  ${(props: Props) =>
    props.move &&
    css`
      transform: translateX(12rem);
      width: calc(100% - 12rem);
      margin-left: 0;
      transition: width 0.5s ease-out;
      overflow: hidden;
    `}
`;

export const StyledFooter = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  text-align: center;
  line-height: ${({ theme }) => theme.footerHeight};
  height: ${({ theme }) => theme.footerHeight};
  background-color: ${({ theme }) => theme.footerBGColor};
  color: ${({ theme }) => theme.footerFontColor};
  /* transition: width 0.8s ease-in-out; */
`;
