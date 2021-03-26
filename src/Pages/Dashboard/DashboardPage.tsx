import React, { useState, useEffect } from "react";
import StyledDashboard from "./Dashboard.styled";
import ContentBox from "../../Components/UI/ContentBox/ContentBox";
import { FaGithub } from "react-icons/fa";
import Card from "../../Components/Elements/Card/Card";
import Table from "../../Components/Elements/Table/Table";
import * as data from "./DashboardData";
import {
  LineChart,
  XAxis,
  YAxis,
  Line,
  CartesianGrid,
  Tooltip,
  Legend,
  Pie,
  PieChart,
  Cell,
} from "recharts";
import { useWindowSize } from "../../shared/utils";

const DashboardPage = () => {
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

  return (
    <StyledDashboard>
      <ContentBox title="Projects" className="dashboard_projects">
        <Card group>
          <Card
            animate
            content={{
              header: "Algorithms",
              meta: "A quick review",
              description:
                "This project implements several data structures and algorithms.",
            }}
            footer={
              <a
                href="https://github.com/rayxsan/data_structures_algorithms"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub /> View Code
              </a>
            }
          />
          <Card
            animate
            content={{
              header: "Templates",
              meta: "React App",
              description:
                "Components used in web development made from scratch.",
            }}
            footer={
              <a
                href="https://github.com/rayxsan/portfolio"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub /> View Code
              </a>
            }
          />
        </Card>
      </ContentBox>
      <ContentBox title="Lines of Code" className="dashboard_lines_of_code">
        <Card group>
          <Card
            content={{
              header: "Algoritms",
              innerContent: (
                <label style={{ fontSize: "3rem", color: "teal" }}>1223</label>
              ),
            }}
          />

          <Card
            content={{
              header: "Portfolio",
              innerContent: (
                <label style={{ fontSize: "3rem", color: "olive" }}>2465</label>
              ),
            }}
          />
          <Card
            content={{
              header: "Burger Builder",
              innerContent: (
                <label style={{ fontSize: "3rem", color: "green" }}>1620</label>
              ),
            }}
          />
          <Card
            content={{
              header: "Omnifood CSS",
              innerContent: (
                <label style={{ fontSize: "3rem", color: "orange" }}>568</label>
              ),
            }}
          />
        </Card>
      </ContentBox>
      <ContentBox title="Contributions" className="dashboard_line_graph">
        <LineChart
          width={width}
          height={300}
          data={data.contributionData}
          margin={{ top: 5, right: 10, bottom: 5, left: 0 }}
        >
          <CartesianGrid strokeDasharray="2 2" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="contributions"
            stroke="#27d545"
            strokeWidth={2}
          />
        </LineChart>
      </ContentBox>
      <ContentBox title="Projects History" className="dashboard_table">
        <Table data={data.tableData} headers={data.tableHeaders} />
      </ContentBox>
      <ContentBox title="Languages">
        <PieChart width={width} height={400}>
          <Pie
            data={data.pieData}
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={80}
            fill="#8884d8"
            paddingAngle={5}
            dataKey="percent"
            label
          >
            {data.pieData.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={data.pieCOLORS[index % data.pieCOLORS.length]}
              />
            ))}
          </Pie>
          <Legend />
          <Tooltip />
        </PieChart>
      </ContentBox>
    </StyledDashboard>
  );
};

export default DashboardPage;
