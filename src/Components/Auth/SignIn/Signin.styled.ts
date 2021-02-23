import styled from "styled-components";
import { StyledCheckbox } from "../../Elements/Checkbox/Checkbox.styled";

interface StyledSinginProps {}

export const StyledSingin = styled.div<StyledSinginProps>`
  margin: auto;
  width: 30rem;
  height: 30rem;
  background-color: white;
  padding: 1rem;

  form {
    display: flex;
    flex-direction: column;
    align-items: left;
    margin: 0.2rem;
    //width: 30rem;
    label {
      width: 100%;
      text-align: left;
      opacity: 0.7;
      font-weight: lighter;
      font-size: 70%;
    }

    input {
      width: 100%;
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
      width: 100%;
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
