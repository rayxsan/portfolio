import styled from "styled-components";

export const ToggleStyle = styled.div`
  position: fixed;
  top: 1%;
  left: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 2em;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  
  z-index: 999;
  
svg {
 font-size: 2.5em;
 color: ${({ theme }) => theme.fontColor};
}
  /* div {
    width: 2rem;
    height: 0.2rem;
    background: ${({ theme }) => theme.fontColor};
  } */
`;