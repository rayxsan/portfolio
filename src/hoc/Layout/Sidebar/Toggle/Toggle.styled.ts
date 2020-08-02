import styled from "styled-components";

export const ToggleStyle = styled.div`
  position: fixed;
  top: 1%;
  left: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 1.7rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 999;

  div {
    width: 2rem;
    height: 0.2rem;
    background: ${({ theme }) => theme.primaryColor};
  }
`;
