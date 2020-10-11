import styled from "styled-components";

export const StyledMenu = styled.div`
  position: relative;
  background-color: #fff;

  ul {
    position: absolute;
    top: -1em;
    padding: 0;
  }

  button {
    display: flex;
    text-align: center;
    justify-content: space-between;
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

  .dotted {
    text-align: center;
    transform: rotate(90deg);
  }

  .dotted-list {
    max-height: 5rem;
    overflow-x: hidden;
    overflow-y: scroll;
  }

  .show {
    display: flex;
    flex-direction: column;
  }

  .hide {
    display: none;
  }
`;
