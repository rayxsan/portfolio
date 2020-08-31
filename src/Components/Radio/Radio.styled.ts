import styled from "styled-components";

export const StyledRadio = styled.div`
  display: inline-block;

  input {
    position: absolute;
    opacity: 0;
    pointer-events: none;
  }
  span {
    position: absolute;
    width: 1em;
    height: 1rem;
    border-radius: 50%;
    cursor: pointer;
    background-color: #eee;
  }

  span + label {
    margin: 1.25rem;
  }

  span:hover {
    background-color: #ccc;
  }

  input:checked + span {
    background-color: #2196f3;
  }

  span:after {
    content: "";
    position: absolute;
    display: none;
    top: 0.25rem;
    left: 0.25rem;
    width: 0.5rem;
    height: 0.5rem;
    border-radius: 50%;
    background: white;
  }

  input:checked + span:after {
    display: block;
  }
`;