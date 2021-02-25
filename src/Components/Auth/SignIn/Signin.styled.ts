import styled from "styled-components";

interface StyledSigninProps {}

export const StyledSignin = styled.div<StyledSigninProps>`
  display: block;
  margin: auto;
  max-width: 20rem;
  //min-height: 20rem;
  background-color: white;
  padding: 1rem;
  overflow: hidden;
  border-radius: 0.2rem;
  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);

  form {
    display: flex;
    flex-direction: column;
    align-items: left;
    margin: 0.2rem;
    //width: 30rem;

    p {
      color: red;
    }
    span:first-child {
      padding: 0.5rem;
      font-size: 80%;
      font-weight: lighter;
      margin-bottom: 0.5rem;
      background-color: lightblue;
      border: 1px solid lightblue;
      border-radius: 0.2rem;
    }
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
