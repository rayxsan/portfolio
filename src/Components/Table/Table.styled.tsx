import styled from "styled-components";

interface styledProps {
  shrink?: boolean;
}

export const StyledTable = styled.div<styledProps>`
  display: table;
  width: 100%;
  table {
    text-align: left;
    cursor: default;
    border-collapse: collapse;
    word-break: break-word;
    width: 100%;
    td,
    th {
      border: 1px solid #ddd;
      padding: 0.5rem;
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
    display: ${(props: styledProps) => (props.shrink ? "flex" : "none")};
    padding-top: 3px;
    float: right;
    font-size: 0.8rem;

    label {
      margin-right: 1rem;
    }
    svg {
      padding-top: 3px;
      margin-left: 1.5rem;
      cursor: pointer;
      :last-of-type {
        margin-right: 1rem;
      }
    }
  }
`;
