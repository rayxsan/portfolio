import styled, { css } from "styled-components";

interface StyledProps {
  show: boolean;
}

export const StyledBackdrop = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: 100;
  left: 0;
  top: 0;
  background-color: rgba(0, 0, 0, 0.5);

  ${(props: StyledProps) =>
    props.show &&
    css`
      display: none;
    `}

  @media (min-width: 500px) {
    display: none;
  }
`;
