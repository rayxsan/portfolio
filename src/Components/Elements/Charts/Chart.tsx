import React, { useState, useEffect } from "react";
import { StyledChart } from "./Chart.styled";
import { theme } from "../../../shared/Theme";
import { useWindowSize } from "../../../shared/utils";
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
  Pie,
  PieChart,
  Cell,
} from "recharts";

interface ChartProps {
  data: any;
  type: "Line" | "Bar" | "Pie";
}
const Chart: React.FC<ChartProps> = (props) => {
  const size = useWindowSize();

  const [width, setWidth] = useState(720);

  useEffect(() => {
    function handleResize() {
      if (size.width) {
        if (size.width < 1150) setWidth(size.width - 300);
        if (size.width < 760) setWidth(size.width - 250);
        if (size.width < 500) setWidth(size.width - 100);
      }
    }

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Call handler right away so state gets updated with initial window size
    handleResize();

    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, [size.width]);

  const { data, type } = props;

  let char = <div></div>;

  if (type === "Line") {
    char = (
      <LineChart
        width={width}
        height={300}
        data={data}
        margin={{ top: 5, right: 10, bottom: 5, left: 0 }}
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
        width={width}
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

  if (type === "Pie") {
    const COLORS = [
      "#56a408",
      theme.primaryColor,
      theme.secondaryColor,
      "#d509dc",
      "#f00d0d",
    ];

    char = (
      <PieChart width={width} height={300}>
        <Pie
          data={data}
          dataKey="value"
          cx="50%"
          cy="50%"
          outerRadius={width / 6}
          fill={theme.primaryColor}
          label
        >
          {data.map((entry: any, index: any) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Legend />
        <Tooltip />
      </PieChart>
    );
  }

  return <StyledChart>{char}</StyledChart>;
};

export default Chart;
