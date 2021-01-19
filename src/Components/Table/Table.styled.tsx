import styled from "styled-components";

interface styledProps {
  shrink?: boolean;
  sort?: boolean;
  disabled?: boolean;
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
    /* Force table to not be like tables anymore */
    table,
    thead,
    tbody,
    th,
    td,
    tr {
      display: block;
    }

    /* Hide table headers (but not display: none;, for accessibility) */
    thead tr {
      position: absolute;
      top: -9999px;
      left: -9999px;
    }

    tr {
      margin: 0 0 1rem 0;
    }

    tr:nth-child(odd) {
      background: #ccc;
    }

    td {
      /* Behave  like a "row" */
      border: none;
      border-bottom: 1px solid #ddd;
      position: relative;
      padding-left: 50%;
    }

    td:before {
      /* Now like a table header */
      position: absolute;
      /* Top/left values mimic padding */
      top: 0;
      left: 6px;
      width: 45%;
      padding-right: 10px;
      white-space: nowrap;
    }

    /*
		Label the data
    You could also use a data-* attribute and content for this. That way "bloats" the HTML, 
    this way means you need to keep HTML and CSS in sync.
		*/
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
