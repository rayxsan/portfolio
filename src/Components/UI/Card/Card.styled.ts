import styled from "styled-components";

// TODO truncate Card Title if it doesn't fit in 1 line
export const StyledCard = styled.div`
  border-radius: 4px;
  background-color: #fff;
  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14),
    0px 1px 3px 0px rgba(0, 0, 0, 0.12);
  box-sizing: border-box;
  margin: 1rem;
  padding: 1.5rem 2rem;

  h3 {
    display: flex;
    margin: 0 0 1rem 0;
    font-size: 1.2rem;
    font-weight: 400;
    text-transform: capitalize;
    line-height: 3rem;
    letter-spacing: 0.05em;
    white-space: nowrap;
  }

  p {
    padding: 0 1rem 1rem 1rem;
    margin: 1rem;
    text-align: left;
  }
`;
