import styled from "styled-components";

export const StyledMenu = styled.div`
  position: relative;
  background-color: #fff;

  ul {
    position: absolute;
    top: -1.1rem;
    padding-inline-start: 0;
  }

  .hide {
    display: none;
  }

  Button {
    display: flex;
    min-width: 9rem;
    text-align: left;
    justify-content: space-between;
    padding: 1rem 1.5rem;
    color: #000;
    background-color: #fff;
  }

  button:hover,
  button:focus {
    background-color: #ccc;
  }

  .selected-menu {
    display: flex;
    flex-direction: column;
    border: 0;
    span:last-child {
      color: #aaa;
    }
  }

  .selected-menu:hover {
    background-color: #eee;
  }
`;
