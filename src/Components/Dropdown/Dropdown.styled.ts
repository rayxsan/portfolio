import styled from "styled-components";

export const StyledDropdown = styled.div`
  label,
  footer {
    font-family: sans-serif;
  }

  label {
    font-size: 1rem;
    padding-right: 10px;
  }

  select {
    appearance: none;

    background-color: transparent;
    border: 1px solid red;
    padding: 0 1em 0 0;
    margin: 0;
    width: 100%;
    font-family: inherit;
    font-size: inherit;
    cursor: inherit;
    line-height: inherit;

    :hover {
      background-color: blue;
    }
  }
`;
