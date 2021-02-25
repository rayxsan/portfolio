import styled from "styled-components";

interface StyledProps {
  submitted: boolean;
}

export const StyledPasswordReset = styled.div<StyledProps>`
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
    h1 {
      font-size: 95%;
    }
    h2 {
      font-size: 95%;
      font-weight: lighter;
    }

    p {
      color: ${(props: StyledProps) =>
        props.submitted ? "lightgreen" : "red"};
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
  }
`;
