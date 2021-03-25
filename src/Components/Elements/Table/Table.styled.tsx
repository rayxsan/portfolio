import styled from "styled-components";

interface styledProps {
  shrink?: boolean;
  sort?: boolean;
  disabled?: boolean;
  columnLength: number;
}

export const StyledTable = styled.div<styledProps>`
  display: table;
  width: 100%;
  font-size: 65%;
  padding: 0;
  margin: 0;

  table {
    text-align: left;

    cursor: default;
    border-collapse: collapse;
    word-break: break-word;
    width: 100%;
    td,
    th {
      width: ${(props: styledProps) =>
        props.columnLength > 0 && `calc(100vw / ${props.columnLength})`};
      padding: 0.5rem;
    }
    tr {
      border-bottom: 1px solid #ddd;
    }
  }

  /*
  Ref: https://css-tricks.com/responsive-data-tables/
	Max width before this PARTICULAR table gets nasty. This query will take effect for any screen 
  smaller than 760px and also iPads specifically.
	*/
  @media only screen and (max-width: 760px),
    (min-device-width: 768px) and (max-device-width: 1024px) {
    font-size: 100%;
    /* Force table to not be like tables anymore */
    table,
    thead,
    tbody,
    th,
    td,
    tr {
      display: block;
    }

    thead tr {
      box-sizing: border-box;
      border: 1px solid black;
    }

    tr {
      margin: 0 0 1rem 0;
      border: 1px solid #ddd;
    }

    td {
      /* Behave  like a "row" */
      border: none;
      position: relative;
      padding-left: 50%;
    }
  }
`;

export const StyledPagination = styled.div<styledProps>`
  display: ${(props: styledProps) => (props.shrink ? "flex" : "none")};
  float: right;
  margin-top: 0.5rem;
  label {
    margin: 0.5rem;
  }
  p {
    padding: 0;
    margin: 0.5rem;
  }
`;
