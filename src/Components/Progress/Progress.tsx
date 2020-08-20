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
    const size = 120;
    const strokeWidth = 8;
    const center = size / 2;
    const radius = size / 2 - strokeWidth / 2;
    const circumference = 2 * Math.PI * radius;
    const strokeDashoffset =
      circumference - (props.completed! / 100) * circumference;
    progressBar = (
      <StyledCircular width={size} height={size}>
        <circle
          cx={center}
          cy={center}
          r={radius}
          stroke={color}
          strokeWidth={strokeWidth}
          strokeDasharray={circumference + " " + circumference}
          strokeDashoffset={circumference}
          style={{ strokeDashoffset }}
        />
        <text x={40} y={62}>{`${props.completed}%`}</text>
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
