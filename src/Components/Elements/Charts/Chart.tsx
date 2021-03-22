import React from "react";
import { StyledChart } from "./Chart.styled";
import { theme } from "../../../shared/Theme";
import {
  LineChart,
  XAxis,
  YAxis,
  Line,
  CartesianGrid,
  Tooltip,
  BarChart,
  Bar,
  Legend,
} from "recharts";

interface ChartProps {
  data: any;
  type: "Line" | "Bar";
}
const Chart: React.FC<ChartProps> = (props) => {
  const { data, type } = props;

  let char;

  if (type === "Line") {
    char = (
      <LineChart
        width={400}
        height={300}
        data={data}
        margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
      >
        <CartesianGrid strokeDasharray="1  1" />
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="goal" stroke={theme.primaryColor} />
        <Line type="monotone" dataKey="achieve" stroke={theme.secondaryColor} />
      </LineChart>
    );
  }

  if (type === "Bar") {
    char = (
      <BarChart
        width={720}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="goal" fill={theme.primaryColor} />
        <Bar dataKey="achieve" fill={theme.secondaryColor} />
      </BarChart>
    );
  }

  return <StyledChart>{char}</StyledChart>;
};

export default Chart;
