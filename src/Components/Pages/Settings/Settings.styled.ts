import styled, { css } from "styled-components";
import { theme } from "../../../shared/Theme";

export const StyledSettings = styled.div`
  display: flex;

  div {
    margin-left: 1rem;
    text-align: left;
    max-width: 100%;
    h3 {
      font-weight: bold;
      border-bottom: 1px solid ${theme.disabledColor};
    }
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

interface StyledProfileProps {
  show: boolean;
}

export const StyledProfile = styled.div<StyledProfileProps>`
  display: none;
  ${(props: StyledProfileProps) =>
    props.show &&
    css`
      display: block;
      box-sizing: border-box;
      //width: 100%;

      form {
        align-items: left;
        margin: 0.2rem;
        min-width: 15rem;

        div:first-child {
          position: relative;
          float: right;
          img {
            width: 15rem;
            height: 15rem;
            font-weight: lighter;
            border-radius: 50%;
          }
          label {
            position: absolute;
            left: 0;
            bottom: 2rem;
            z-index: 1;
            width: 3rem;
            border: 1px solid ${theme.secondaryColor};
            border-radius: 0.3rem;
            padding: 0.2rem;
            text-align: center;
            color: #fff;
            background-color: ${theme.secondaryColor};
            cursor: pointer;
            opacity: 0.85;
            :hover {
              opacity: 1;
            }
            input {
              display: none;
            }
          }
        }

        div {
          display: flex;
          flex-direction: column;
          label {
            font-size: 80%;
            opacity: 0.7;
          }

          input,
          textarea {
            min-width: 20rem;
            height: 1.2rem;
            padding: 0.2rem;
            margin: 0.5rem;
            border: 1px solid ${theme.disabledColor};
            border-radius: 0.3rem;
            //border-bottom: 1px solid ${theme.disabledColor};
            :focus {
              outline: none;
              ::placeholder {
                opacity: 0;
              }
            }
          }

          textarea {
            height: 3rem;
          }
        }
      }

      @media (max-width: 1080px) {
        form {
          div:first-child {
            float: none;
          }
          div {
            input,
            textarea {
              min-width: auto;
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
