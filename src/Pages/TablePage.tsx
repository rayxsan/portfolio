import React from "react";
import styled from "styled-components";
import Card from "../Components/UI/Card/Card";
import Table from "../Components/Table/Table";

const StyledTablePage = styled.div``;

const headings = [
  "Product name",
  "SKU",
  "Stock quantity",
  "Wholesale cost",
  "Sale price",
  "Quantity sold",
  "Gross sales",
  "Net sales",
  "Notes",
];

const rows = [
  [
    "Red and black plaid scarf with thin red stripes and thick black stripes",
    124689325,
    28,
    "$35.00",
    "$60.00",
    12,
    "$720.00",
    "$300.00",
    "",
  ],
  [
    "Yellow plaid scarf",
    124689389,
    0,
    "$35.00",
    "$60.00",
    20,
    "$1200.00",
    "$500.00",
    "Currently on back order by the supplier. Do not place another order to restock.",
  ],
  [
    "Blue plaid scarf",
    124689332,
    30,
    "$35.00",
    "$60.00",
    10,
    "$600.00",
    "$250.00",
    "",
  ],
  [
    "Pink plaid scarf",
    124689376,
    16,
    "$35.00",
    "$60.00",
    4,
    "$240.00",
    "$100.00",
    "",
  ],
];

const row1 = [
  ["1", "beta", "c", "e", 3, "g", ""],
  ["2", "b", 124, "alpha", "f", "g", "h"],
  ["3", "Lorem ipsum ", "c", 10, "f", "g", ""],
  ["4", "Lorem ipsum ", "c", 10, "f", "g", ""],
  ["5", "Lorem ipsum ", "c", 10, "f", "g", ""],
  ["6", "Lorem ipsum ", "c", 10, "f", "g", ""],
  ["7", "Lorem ipsum ", "c", 10, "f", "g", ""],
  ["8", "Lorem ipsum ", "c", 10, "f", "g", ""],
  ["9", "Lorem ipsum ", "c", 10, "f", "g", ""],
  ["10", "Lorem ipsum ", "c", 10, "f", "g", ""],
];

const TablePage = () => (
  <StyledTablePage>
    <Card title="Basic Table">
      <Table header={headings} rows={rows} />
    </Card>
    <Card title="Basic Table without headers">
      <Table rows={row1} shrink />
    </Card>
  </StyledTablePage>
);

export default TablePage;
