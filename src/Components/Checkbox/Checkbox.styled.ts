import styled from "styled-components";

interface Props {
  checked: boolean;
}

export const StyledDiv = styled.div`
  display: inline-block;
  > input {
    opacity: 0;
    height: 0;
    width: 0;
  }
  > input + label {
    position: relative;
    padding-left: 1.95em;
    cursor: pointer;
    &:before {
      content: "";
      position: absolute;
      left: 0;
      top: 0;
      width: 1.15em;
      height: 1.15em;
      border: 1px solid #aaa;
      background: #f8f8f8;
      border-radius: 3px;
      box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.3);
    }
    &:after {
      content: "\\2713\\0020";
      position: absolute;
      top: 0;
      left: 0.15em;
      font-size: 1.2em;
      color: #09ad7e;
      transition: all 0.2s;
    }
  }
  > input:not(:checked) + label {
    &:after {
      opacity: 0;
      transform: scale(0);
    }
  }
  > input:disabled:not(:checked) + label {
    &:before {
      cursor: default;
      box-shadow: none;
      border-color: #bbb;
      background-color: #ddd;
    }
  }
  > input:checked + label {
    &:after {
      opacity: 1;
      transform: scale(1);
    }
  }
  > input:disabled:checked + label {
    &:after {
      cursor: default;
      color: #999;
    }
  }
  > input:disabled + label {
    cursor: default;
    color: #aaa;
  }
  > input:checked:focus + label,
  input:not(:checked):focus + label {
    &:before {
      border: 1px dotted blue !important;
    }
  }
`;
