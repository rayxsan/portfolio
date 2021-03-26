import React from "react";
import Button from "../../Components/Elements/Button/Button";

export const contributionData = [
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

export const tableHeaders = {
  name: "Name",
  start_date: "Start Date",
  end_date: "End Date",
  state: "State",
  notes: "Notes",
};

export const tableData = [
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
    name: "Omnifood CSS",
    start_date: "07/02/2020",
    end_date: "07/13/2020",
    state: <Button primary>Completed</Button>,
    notes: "Udemy Course",
  },
  {
    name: "Portfolio App",
    start_date: "07/28/2020",
    end_date: "...",
    state: <Button secondary>In progress</Button>,
    notes: "React, HTML, CSS, TS",
  },
];

export const pieCOLORS = ["#58a6ff", "#e34c26", "#563d7c", "#f1e05a"];

export const pieData = [
  { name: "TS", percent: 78.8 },
  { name: "HTML", percent: 2 },
  { name: "CSS", percent: 14.4 },
  { name: "JS", percent: 4.8 },
];
