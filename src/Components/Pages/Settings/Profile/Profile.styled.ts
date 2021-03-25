import styled from "styled-components";
import { theme } from "../../../../shared/Theme";

interface StyledProfileProps {
  show: boolean;
  showProfileEditImg: boolean;
}

export const StyledProfile = styled.div<StyledProfileProps>`
  display: ${(props: StyledProfileProps) => (props.show ? "block" : "none")};

  box-sizing: border-box;
  //width: 100%;

  form {
    align-items: left;
    margin: 0.2rem;
    min-width: 15rem;

    span,
    button {
      margin-left: 0.5rem;
    }

    div:first-child {
      position: relative;
      float: right;
      height: 20rem;

      img {
        width: 15rem;
        height: 15rem;
        object-fit: cover;
        border-radius: 50%;
      }

      button {
        position: absolute;
        left: 1rem;
        bottom: 5.5rem;
        width: 3rem;
      }

      ul {
        display: ${(props: StyledProfileProps) =>
          props.showProfileEditImg ? "block" : "none"};
        position: absolute;
        left: 1rem;
        bottom: 1.8rem;
        border: 1px solid ${theme.secondaryColor};
        border-radius: 0.3rem;
        margin: 0;
        padding: 0;
        background-color: ${theme.secondaryColor};
        opacity: 1;

        :after {
          content: " ";
          position: absolute;
          left: 0.3rem;
          top: -1rem;
          border: 0.5rem solid transparent;
          border-bottom: 0.5rem solid ${theme.secondaryColor};
        }

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
        ul {
          left: 2rem;
          bottom: 1.4rem;
        }
      }
      div {
        input,
        textarea {
          min-width: auto;
        }
      }
    }
  }
`;
