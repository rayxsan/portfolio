import styled, { css } from "styled-components";

const StyledTable = styled.div`
  table {
    text-align: left;
    cursor: default;
    border-collapse: collapse;
    width: 100%;

    td,
    th {
      border: 1px solid #ddd;
      padding: 8px;
    }
    tr:nth-child(even) {
      background-color: #f2f2f2;
    }
    tr:hover {
      background-color: #ddd;
    }

    th {
      background-color: ${({ theme }) => theme.primaryColor};
      color: white;
      padding-top: 12px;
      padding-bottom: 12px;
    }
  }

  div {
    display: none;
    text-align: right;
  }
`;

export default StyledTable;
