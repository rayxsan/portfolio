import React, { useState, useEffect } from "react";
import styled from "styled-components";
import ContentBox from "../Components/UI/ContentBox/ContentBox";
import { FaGithub } from "react-icons/fa";
import Card from "../Components/Elements/Card/Card";
import Table from "../Components/Elements/Table/Table";
import Button from "../Components/Elements/Button/Button";
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
import { useWindowSize } from "../shared/utils";

const StyledText = styled.div`
  text-align: left;
  svg {
    padding-right: 0.2em;
  }
  a {
    text-decoration: none;

    color: ${({ theme }) => theme.fontColor};

    :hover {
      color: ${({ theme }) => theme.primaryColor};
      border-bottom: 1px solid ${({ theme }) => theme.primaryColor};
    }
  }
`;

const contributionData = [
  {
    month: "Jan",
    contributions: Math.floor(Math.random() * 10 + Math.random() * 30),
  },
  {
    month: "Feb",
    contributions: Math.floor(Math.random() * 10 + Math.random() * 30),
  },
  {
    month: "Mar",
    contributions: Math.floor(Math.random() * 10 + Math.random() * 30),
  },
  {
    month: "Apr",
    contributions: Math.floor(Math.random() * 10 + Math.random() * 30),
  },
  {
    month: "May",
    contributions: Math.floor(Math.random() * 10 + Math.random() * 30),
  },
  {
    month: "Jun",
    contributions: Math.floor(Math.random() * 10 + Math.random() * 30),
  },
];

const tableData = [
  {
    name: "Learning Typescript",
    start_date: "08/23/2019",
    end_date: "09/14/2019",
    state: <Button primary>Completed</Button>,
    notes: "",
  },
  {
    name: "Algorithms",
    start_date: "01/23/2020",
    end_date: "02/19/2020",
    state: <Button secondary>In progress</Button>,
    notes: "Pending review",
  },
  {
    name: "Burger Builder",
    start_date: "04/15/2020",
    end_date: "06/09/2020",
    state: <Button primary>Completed</Button>,
    notes: "Udemy Course",
  },
  {
    name: "Burger Builder TS",
    start_date: "06/10/2020",
    end_date: "06/28/2020",
    state: <Button primary>Completed</Button>,
    notes: "Burger Builder TS Migration",
  },
  {
    name: "Portfolio App",
    start_date: "07/28/2020",
    end_date: "...",
    state: <Button secondary>In progress</Button>,
    notes: "React, HTML, CSS, TS",
  },
];

const tableHeaders = {
  name: "Name",
  start_date: "Start Date",
  end_date: "End Date",
  state: "State",
  notes: "Notes",
};

const HomePage = () => {
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
    <StyledText>
      <ContentBox title="Projects">
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
      <ContentBox title="Contributions">
        <LineChart
          width={width}
          height={300}
          data={contributionData}
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
      <ContentBox title="Projects History">
        <Table data={tableData} headers={tableHeaders} />
      </ContentBox>
    </StyledText>
  );
};

export default HomePage;
