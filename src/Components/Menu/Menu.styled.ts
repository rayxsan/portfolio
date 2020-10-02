import styled from "styled-components";

export const StyledMenu = styled.div`
  display: flex;
  min-height: 2rem;
  flex-wrap: wrap;
  width: 100%;

  li {
    box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);
    padding: 0;
    margin: 0;
    width: 100%;
    margin-top: 1rem;
  }

  button {
    display: flex;
    justify-content: space-between;
    border: 1px solid #ccc;
    width: 100%;
    text-align: left;
    margin-bottom: 2px;

    &:hover,
    &:focus {
      cursor: pointer;
      font-weight: bold;
      background-color: #ccc;
    }
  }
`;
