import styled from "styled-components";

export const StyledMenu = styled.div`
  position: relative;
  background-color: #fff;

  ul {
    padding: 0;
    border: 1px solid #ddd;

    li {
      border: 1px solid red;

      span {
        width: 10rem;
      }
    }
  }

  button {
    display: flex;
    text-align: left;
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
  .show {
  }
  .hide {
    display: none;
  }
`;
