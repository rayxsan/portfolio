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

  p {
    visibility: ${(props: StyledHeaderProps) =>
      !props.expand ? "visible" : "hidden"};
    float: left;
    font-size: 85%;
    margin: 0;
    padding-left: 0.2em;
    padding-right: 0.2em;
    border-right: 1px solid #ccc;
    border-left: 1px solid #ccc;
  }
  div {
    float: right;
    margin-right: 0.5rem;
    margin-top: 0.2rem;
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
