import styled from "styled-components";

export const StyledMenu = styled.div`
  position: relative;
  background-color: #fff;

  ul {
    position: fixed;
    z-index: 999;
    top: 0;
    padding-inline-start: 0;
  }

  .list {
  }
  .hide {
    display: none;
  }

  button {
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
