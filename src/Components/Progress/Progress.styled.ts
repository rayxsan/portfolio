import styled from "styled-components";

export const StyledProgress = styled.svg`
  animation: rotate 1s linear infinite;
  margin: 1em;
  width: 2.5em;
  height: 2.5em;

  & .path {
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

interface Props {
  completed?: number;
}

export const StyledLinearProgress = styled.div`
  height: 1em;
  width: 70%;
  background-color: #e0e0de;
  border-radius: 1em;
  margin: 1em;

  div {
    height: 100%;
    width: ${(props: Props) => props.completed}%;
    background-color: ${(props) => props.color};
    transition: width 1s ease-in-out;
    border-radius: inherit;
    text-align: right;
  }
  span {
    padding: 1em;
    color: white;
    text-align: center;
    font-weight: bold;
  }
`;
