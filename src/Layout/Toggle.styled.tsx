import styled from "styled-components";
import * as theme from "../shared/Theme";

export const ToggleStyle = styled.nav`
  position: fixed;
  top: 1%;
  left: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 999;

  div {
    width: 2rem;
    height: 0.25rem;
    background: ${theme.COLOR_PRIMARY};
  }
`;
