import styled from "styled-components";

interface StyledSecurityProps {
  show: boolean;
}

export const StyledSecurity = styled.div<StyledSecurityProps>`
  display: ${(props: StyledSecurityProps) => (props.show ? "block" : "none")};
`;
