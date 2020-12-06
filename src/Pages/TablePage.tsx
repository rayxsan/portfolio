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

const header1 = [1, 2, 3];
const row1 = [
  ["a", "b", "c"],
  ["a", "b", "c"],
  ["a", "b", "c"],
];

const TablePage = () => (
  <StyledTablePage>
    <Card title="Basic Table">
      <Table header={headings} rows={rows} />
    </Card>
  </StyledTablePage>
);

export default TablePage;
