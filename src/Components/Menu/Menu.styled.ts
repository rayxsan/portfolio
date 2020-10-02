import styled from "styled-components";

// TODO refarctor negative position if possible
export const StyledMenu = styled.div`
  .list {
    position: relative;
    top: -3.9rem;
    left: -1.5rem;
    width: 76%;
    margin: 20px 0 0 43px;
    padding-inline-start: 0;
    box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);
  }

  .show {
    background-color: white;
  }

  .hide {
    visibility: hidden;
  }

  .hide-header {
    visibility: hidden;
  }

  li {
    &:first-of-type {
      > button {
        border-top: 1px solid #ccc;
        border-radius: 6px 6px 0 0;
      }
    }

    &:last-of-type > button {
      border-radius: 0 0 6px 6px;
    }

    Button {
      width: 100%;
      text-align: left;

      &:hover,
      &:focus {
        cursor: pointer;
        background-color: #ccc;
      }
    }
  }
`;
