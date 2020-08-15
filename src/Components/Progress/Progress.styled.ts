import styled from "styled-components";

export const StyledProgress = styled.svg`
  animation: rotate 1s linear infinite;
  margin: 1em;
  width: 2.5em;
  height: 2.5em;

  & .path {
    /* stroke: ${(props) => props.color || "blue"}; */
    stroke-linecap: round;
    animation: dash 2s ease-in-out infinite;
  }

  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }
  @keyframes dash {
    0% {
      stroke-dasharray: 1, 150;
      stroke-dashoffset: 0;
    }
    50% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -35;
    }
    100% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -124;
    }
  }
`;
