import styled from "styled-components";

interface StyledSinginProps {}

export const StyledSingin = styled.div<StyledSinginProps>`
  margin: auto;
  width: 30rem;
  height: 30rem;
  background-color: white;

  form {
    div {
      display: flex;
      flex-direction: column;
      text-align: left;
      margin: 0.2rem;
      label {
        opacity: 0.7;
        font-weight: lighter;
        font-size: 70%;
      }

      input {
        height: 1.2rem;
        border: none;
        border-bottom: 1px solid ${({ theme }) => theme.DisabledColor};
        :focus {
          outline: none;
          ::placeholder {
            opacity: 0;
          }
        }
      }
    }
  }

  button {
    float: left;
  }

  a {
    float: left;
  }
`;
