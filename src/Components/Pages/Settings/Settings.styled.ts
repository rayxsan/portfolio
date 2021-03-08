import styled, { css } from "styled-components";

export const StyledSettings = styled.div`
  display: inline-block;

  ul {
    position: relative;
    max-width: 10rem;
    text-align: left;
    padding: 0;
    border: 1px solid grey;
    border-bottom: none;
    border-radius: 0.3rem;
    margin: auto;

    li {
      border-bottom: 1px solid grey;
      padding: 0.5rem 1rem;
      :last-child {
        border-bottom-left-radius: 0.3rem;
        border-bottom-right-radius: 0.3rem;
      }
      :hover {
        background-color: lightgrey;
        cursor: pointer;
      }
    }
  }
`;

interface StyledProfileProps {
  show: boolean;
}

export const StyledProfile = styled.div<StyledProfileProps>`
  display: none;
  ${(props: StyledProfileProps) =>
    props.show &&
    css`
      display: inline-block;
    `}
`;

export const StyledSecurity = styled.div`
  display: none;
`;

export const StyledAppearance = styled.div`
  display: none;
`;
