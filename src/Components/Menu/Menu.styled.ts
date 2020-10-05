import styled from "styled-components";

export const StyledMenu = styled.div`
  .list {
    position: relative;
    width: auto;
    padding-inline-start: 0;
    box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);
  }

  .show {
    background-color: blue;
  }

  .hide {
    display: none;
  }

  button {
    display: flex;
    cursor: pointer;
    width: 100%;
    text-align: left;
    justify-content: space-between;
    background-color: white;
    padding: 1rem 1.5rem;
    border: 1px solid #ccc;
  }

  button:hover,
  button:focus {
    cursor: pointer;
    background-color: #ccc;
  }

  .selected {
    display: flex;
    flex-direction: column;
    border: 0;

    span:last-child {
      color: #aaa;
    }
  }

  .selected:hover {
    background-color: #eee;
  }
`;
