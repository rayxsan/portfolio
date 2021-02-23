import styled from "styled-components";

interface StyledSinginProps {}

export const StyledSingin = styled.div<StyledSinginProps>`
  display: block;
  margin: auto;
  width: 20rem;
  //height: 30rem;
  background-color: white;
  padding: 1rem;
  overflow: hidden;

  form {
    display: flex;
    flex-direction: column;
    align-items: left;
    margin: 0.2rem;
    //width: 30rem;
    label {
      width: 20rem;
      text-align: left;
      opacity: 0.7;
      font-weight: lighter;
      font-size: 70%;
    }
    .errorClass {
      color: red;
    }

    input {
      width: 20rem;
      height: 1.2rem;
      margin-bottom: 0.5rem;
      border: none;
      border-bottom: 1px solid ${({ theme }) => theme.DisabledColor};
      :focus {
        outline: none;
        ::placeholder {
          opacity: 0;
        }
      }
    }

    button {
      width: 20rem;
      margin-top: 0.5rem;
      margin-bottom: 0.5rem;
    }

    a {
      color: ${({ theme }) => theme.primaryColor};
      text-decoration: none;
      opacity: 0.8;
      :hover {
        opacity: 1;
      }
    }
  }
`;
