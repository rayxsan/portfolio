import styled from "styled-components";

export const StyledRadio = styled.label`
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
  }

  input:checked + span:after {
    display: block;
  }

  & + span:after {
    width: 0.5em;
    height: 0.5em;
    border-radius: 50%;
    background: white;
  }
`;
