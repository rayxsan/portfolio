import styled from "styled-components";

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
export const StyledToggle = styled(StyledSlider)`
  height: 1.5em;
  outline: none;

  > label {
    width: 3em;
    height: 1.5em;
    border-radius: 1.5em;
  }
  label:before {
    top: 0.1em;
    bottom: 0;
    right: 0.9em;
  }

  input:checked + label:before {
    background-color: #fff;
  }
`;

export const StyledCheckbox = styled(StyledSlider)`
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

`;
