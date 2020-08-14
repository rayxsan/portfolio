import styled from "styled-components";

export const StyledCheckbox = styled.label`
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
    color: ${(props) => props.color || "inherit"};

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
      color: ${(props) => props.color || "inherit"};
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

export const StyledToggle = styled.label`
  position: relative;
  display: inline-block;
  margin: 0.5em;
  width: 3em;
  height: 1.5em;
  outline: none;

  > input {
    opacity: 0;
  }

  > div {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    -webkit-transition: 0.4s;
    transition: 0.4s;
    border-radius: 1.5em;
  }
  > div:before {
    position: absolute;
    content: "";
    height: 1.3em;
    width: 1.3em;
    left: 0.15em;
    bottom: 0.1em;
    background-color: white;
    -webkit-transition: 0.4s;
    transition: 0.4s;
    border-radius: 50%;
  }
  > input:checked + div {
    background-color: ${(props) => props.color || "grey"};
  }
  > input:focus + div {
    box-shadow: 0 0 1px ${(props) => props.color || "grey"};
  }
  > input:checked + div:before {
    -webkit-transform: translateX(1.3em);
    -ms-transform: translateX(1.3em);
    transform: translateX(1.3em);
  }
`;

export const StyledSlider = styled.div`
  position: relative;
  width: 2.5em;
  display: inline-block;
  margin: 0.5em;
  > input {
    position: absolute;
    opacity: 0;
    pointer-events: none;
  }

  > label {
    display: block;
    overflow: hidden;
    cursor: pointer;
    height: 0.5em;
    padding: 0;
    line-height: 0.5em;
    border: 0px solid #ffffff;
    border-radius: 0.25em;
    background-color: #9e9e9e;
  }
  label:before {
    content: "";
    display: block;
    width: 1.3em;
    height: 1.3em;
    background: #ffffff;
    position: absolute;
    top: -0.4em;
    bottom: 0;
    right: 1.2em;
    border-radius: 50%;
    box-shadow: 0 0.1em 0.3em 0px #757575;
    transition: 0.4s;
  }
  input:checked + label {
    background-color: ${(props) => props.color || "grey"};
  }
  input:checked + label,
  input:checked + label:before {
    border-color: ${(props) => props.color || "grey"};
  }
  input:checked + label {
    margin-left: 0;
  }
  input:checked + label:before {
    right: 0px;
    background-color: ${(props) => props.color || "grey"};
    transform: translateX(0.1em);
  }

  /*TODO: Needs change css when disabled*/
  > input:disabled:not(:checked) {
    &:before {
      cursor: default;
      box-shadow: none;
      border-color: #bbb;
      background-color: #ddd;
    }
  }
  > input:disabled:checked {
    &:after {
      cursor: default;
      color: #999;
    }
  }
  > input:disabled + label {
    cursor: default;
    color: #aaa;
  }
`;
