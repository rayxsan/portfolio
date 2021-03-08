import styled, { css } from "styled-components";
import { theme } from "../../../shared/Theme";

export const StyledSettings = styled.div`
  display: flex;

  div {
    margin-left: 1rem;
    text-align: left;
    max-width: 100%;
    h3 {
      border-bottom: 1px solid ${theme.disabledColor};
    }
  }
`;

export const StyledNav = styled.div`
  ul {
    position: relative;
    width: 10rem;
    height: 6.7rem;
    text-align: left;
    padding: 0;
    border: 1px solid grey;
    border-bottom: none;
    border-radius: 0.3rem;
    // margin: auto;

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
      display: block;

      form {
        display: flex;
        flex-direction: column;
        align-items: left;
        margin: 0.2rem;

        label {
          font-size: 80%;
          opacity: 0.7;
        }

        input {
          width: 20rem;
          height: 1.2rem;
          margin-bottom: 0.5rem;
          border: none;
          border-bottom: 1px solid ${theme.disabledColor};
          :focus {
            outline: none;
            ::placeholder {
              opacity: 0;
            }
          }
        }
      }
    `}
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
