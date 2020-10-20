import styled, { css } from "styled-components";

interface Props {
  expand: boolean;
}

export const Wrapper = styled.div`
  @media (min-width: 500px) {
    margin-left: 2rem;
    ${(props: Props) =>
      props.expand &&
      css`
        transform: translateX(${({ theme }) => theme.sidebarWidth});
        width: calc(100% - ${({ theme }) => theme.sidebarWidth});
        margin-left: 0;
      `}
  }
`;

export const MainContent = styled.div`
  min-height: calc(100vh - ${({ theme }) => theme.mainContentMinHeight});
  width: 100%;
  overflow: hidden;
`;
