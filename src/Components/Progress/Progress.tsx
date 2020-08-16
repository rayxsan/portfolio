import React, { FunctionComponent } from "react";
import {
  StyledProgress,
  StyledLinearProgress,
  StyledCircular,
} from "./Progress.styled";
import { theme } from "../../shared/Theme";

interface Props {
  primary?: boolean;
  secondary?: boolean;
  completed?: number;
  circular?: boolean;
  linear?: boolean;
}

const Progress: FunctionComponent<Props> = (props) => {
  let color = "#aaa";

  if (props.primary) {
    color = theme.primaryColor;
  }
  if (props.secondary) {
    color = theme.secondaryColor;
  }

  let progressBar = (
    <StyledProgress viewBox="0 0 50 50">
      <circle
        className="path"
        cx="25"
        cy="25"
        r="20"
        fill="none"
        strokeWidth="3"
        stroke={color}
      />
    </StyledProgress>
  );

  if (props.circular) {
    const size = 50;
    const strokeWidth = 3;
    const center = size / 2;
    const radius = size / 2 - strokeWidth / 2;
    const circumference = 2 * Math.PI * radius;
    progressBar = (
      <StyledCircular width={size} height={size}>
        <circle
          className="svg-circle-bg"
          cx={center}
          cy={center}
          r={radius}
          strokeWidth={strokeWidth}
          stroke={color}
        />
        <text className="svg-circle-text" x={center} y={center}>
          {`${props.completed}%`}
        </text>
      </StyledCircular>
    );
  }
  if (props.linear) {
    progressBar = (
      <StyledLinearProgress completed={props.completed} color={color}>
        <div>
          <span>{`${props.completed}%`}</span>
        </div>
      </StyledLinearProgress>
    );
  }

  return <>{progressBar}</>;
};

export default Progress;
