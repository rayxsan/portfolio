import styled from "styled-components";

export const StyledCheckbox = styled.input.attrs({ type: "checkbox" })`
  display: inline-block;
  width: 16px;
  height: 16px;
  background: ${(props) => (props.checked ? "salmon" : "papayawhip")};
  border-radius: 3px;
  transition: all 150ms;
`;
