import styled from "styled-components";

interface StyledUseThemeProps {
  show: boolean;
}

export const StyledUseTheme = styled.div<StyledUseThemeProps>`
  display: ${(props: StyledUseThemeProps) => (props.show ? "block" : "none")};
`;

export default StyledUseTheme;
