import styled from "styled-components";
export const StyledHeader = styled.div`
  position: sticky;
  top: 0;
  width: 100%;
  text-align: center;
  line-height: ${({ theme }) => theme.headerHeight};
  height: ${({ theme }) => theme.headerHeight};
  background-color: ${({ theme }) => theme.headerBGColor};
  color: ${({ theme }) => theme.fontColor};
  z-index: 5;
  box-shadow: 0 2px 2px -2px #ccc;

  svg {
    float: left;
    margin: 1rem;
    cursor: pointer;

    @media (min-width: 500px) {
      display: none;
    }
  }

  li {
    bottom: 0.5rem;
  }

  div {
    float: right;
    margin-right: 0.5rem;
    margin-top: 0.2rem;
  }
`;
