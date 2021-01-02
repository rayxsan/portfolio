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

  div {
    display: ${(props: styledProps) => (props.shrink ? "flex" : "none")};
    /* padding-top: 3px; */
    float: right;

    label {
      margin-right: 0.5rem;
    }
    p {
      padding: 0;
      margin: 0 0 0 0.5rem;
    }
    button {
      padding: 0;
      margin: 0;
      height: 0;
    }
  }
`;
