import styled, { css } from "styled-components";

interface Props {
  move: boolean;
}

export const Wrapper = styled.div``;

export const MainContent = styled.div`
  min-height: calc(100vh - ${({ theme }) => theme.mainContentMinHeight});
  width: calc(100% - 2rem);
  margin-left: 2rem;
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
