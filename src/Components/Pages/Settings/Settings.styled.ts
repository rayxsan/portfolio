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
  showProfileEditImg: boolean;
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
            object-fit: cover;
            border-radius: 50%;
          }

          button {
            position: absolute;
            left: 0;
            bottom: 3.5rem;
            width: 3rem;
          }

          ul {
            display: ${(props: StyledProfileProps) =>
              props.showProfileEditImg ? "block" : "none"};
            position: absolute;
            left: 0;
            bottom: 0;
            border: 1px solid ${theme.disabledColor};
            border-radius: 0.3rem;
            margin: 0;
            padding: 0;
            background-color: #fff;
            li {
              padding: 0.2rem 0.5rem 0.2rem 0.5rem;

              :hover {
                background-color: ${theme.secondaryColor};
                cursor: pointer;
                opacity: 1;
                color: #fff;
              }

              label {
                font-weight: normal;
                cursor: pointer;
                input {
                  display: none;
                }
              }
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
