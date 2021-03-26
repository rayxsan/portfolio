import styled from "styled-components";

const StyledDashboard = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  text-align: left;
  svg {
    padding-right: 0.2em;
  }
  a {
    text-decoration: none;

    color: ${({ theme }) => theme.fontColor};

    :hover {
      color: ${({ theme }) => theme.primaryColor};
      border-bottom: 1px solid ${({ theme }) => theme.primaryColor};
    }
  }

  .dashboard_table {
    grid-column-start: 1;
    grid-column-end: 3;
    grid-row-start: 2;
  }

  @media (max-width: 760px) {
    display: flex;
    flex-direction: column;
  }
`;

export default StyledDashboard;
