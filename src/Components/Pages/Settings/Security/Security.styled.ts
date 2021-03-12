import styled from "styled-components";
import { theme } from "../../../../shared/Theme";

interface StyledSecurityProps {
  show: boolean;
}

export const StyledSecurity = styled.div<StyledSecurityProps>`
  display: ${(props: StyledSecurityProps) => (props.show ? "block" : "none")};

  form {
    display: flex;
    flex-direction: column;
    align-items: left;
    margin: 0.2rem;
    min-width: 15rem;

    input {
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
  }
`;
