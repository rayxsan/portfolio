import styled from "styled-components";

// TODO truncate Card Title if it doesn't fit in 1 line
export const StyledCard = styled.div`
  border-radius: 4px;
  background-color: #f8f8f8;
  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14),
    0px 1px 3px 0px rgba(0, 0, 0, 0.12);
  box-sizing: border-box;
  margin: 1rem;

  h3 {
    display: flex;
    padding: 1rem;
    margin: 1rem;
    font-size: 1.2rem;
    font-weight: 400;
    text-transform: capitalize;
    line-height: 3rem;
    letter-spacing: 0.05em;
    overflow: hidden;
    white-space: nowrap;
  }

  p,
  .btn-container {
    padding: 0 1rem 1rem 1rem;
    margin: 1rem;
    text-align: left;
  }

  button {
    margin: 1rem 0.5rem;
  }
`;
