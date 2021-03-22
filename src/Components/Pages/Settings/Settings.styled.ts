import styled, { css } from "styled-components";
import { theme } from "../../../shared/Theme";

export const StyledSettings = styled.div`
  display: flex;

  div {
    text-align: left;
    max-width: 100%;
    h3 {
      font-weight: bold;
      border-bottom: 1px solid ${theme.disabledColor};
    }
  }

  span.errorClass {
    color: red;
  }

  @media (max-width: 760px) {
    display: flex;
    flex-direction: column;
  }
`;

export const StyledNav = styled.div`
  ul {
    position: relative;
    width: 10rem;
    //height: 6.7rem;
    margin-right: 1rem;
    text-align: left;
    font-weight: bold;
    padding: 0;
    border: 1px solid ${theme.disabledColor};
    border-radius: 0.3rem;

    li {
      border-bottom: 1px solid ${theme.disabledColor};
      padding: 0.5rem;
      :last-child {
        border: none;
      }
      :hover {
        background-color: ${theme.disabledColor};
        cursor: pointer;
      }
    }
  }
`;

interface StyledSecurityProps {
  show: boolean;
}

export const StyledSecurity = styled.div<StyledSecurityProps>`
  display: none;

  ${(props: StyledSecurityProps) =>
    props.show &&
    css`
      display: block;
    `}
`;

interface StyledThemeProps {
  show: boolean;
}

export const StyledTheme = styled.div<StyledThemeProps>`
  display: none;

  ${(props: StyledThemeProps) =>
    props.show &&
    css`
      display: block;
    `}
`;
