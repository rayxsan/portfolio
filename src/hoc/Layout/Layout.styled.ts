import styled, { css } from "styled-components";
import { theme } from "../../shared/Theme";

interface Props {
  expand: boolean;
}

export const Wrapper = styled.div`
  .breadcrumb {
    // display: inline-block;
    padding: 1rem;
  }

  background-color: ${theme.layoutColor};
  @media (min-width: 500px) {
    margin-left: 2rem;

    ${(props: Props) =>
      props.expand &&
      css`
        transform: translateX(${theme.sidebarWidth});
        width: calc(100% - ${theme.sidebarWidth});
        margin-left: 0;
      `}
  }
`;

export const MainContent = styled.div`
  min-height: calc(100vh - ${theme.mainContentMinHeight});
  width: 100%;
`;
