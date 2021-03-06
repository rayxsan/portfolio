import styled from "styled-components";

interface StyledHeaderProps {
  expand: boolean;
}
export const StyledHeader = styled.div<StyledHeaderProps>`
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
  }

  li {
    bottom: 0.5rem;
  }

  div {
    float: right;
    span {
      margin: auto;
      padding: 0.5em;
      font-size: 90%;
      vertical-align: center;
    }
    button {
      margin-right: 0.5rem;
      margin-top: 0.5rem;
    }
  }
  @media (min-width: 500px) {
    svg {
      display: none;
    }
  }
  @media (max-width: 500px) {
    p {
      visibility: visible;
    }
  }
`;
