import styled from "styled-components";

interface StyledThemeChangerProps {
  show: boolean;
}

export const StyledThemeChanger = styled.div<StyledThemeChangerProps>`
  display: ${(props: StyledThemeChangerProps) =>
    props.show ? "block" : "none"};
`;

export default StyledThemeChanger;
