import styled from "styled-components";

interface Props {
  checked: boolean;
}

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
    background-color: #2196f3;
  }
  > input:focus + div {
    box-shadow: 0 0 1px #2196f3;
  }
  > input:checked + div:before {
    -webkit-transform: translateX(1.3em);
    -ms-transform: translateX(1.3em);
    transform: translateX(1.3em);
  }
`;

export const StyledSlider = styled.div`
  position: relative;
  display: inline-block;
  margin: 0.5em;
  width: 3em;
  min-height: 1.25em;
  outline: 0;
  > input {
    opacity: 0;
  }

  > label {
    position: absolute;
    display: block;
    width: 3em;
    height: 0.2em;
    outline: 0;
    font-size: 1em;
    transition: color 0.1s ease;
    line-height: 1rem;
    padding-left: 0 !important;
    cursor: pointer;
    user-select: none;
    color: rgba(0, 0, 0, 0.95) !important;
  }
  label:before {
    display: block;
    position: absolute;
    content: "";
    border: none;
    left: 0;
    z-index: 1;
    top: 0.4rem;
    width: 3em;
    height: 0.2em;
  }
  /* > div:before {
    position: absolute;
    content: "";
    top: 0;
    height: 1.3em;
    width: 1.3em;
    left: 0.15em;
    bottom: 0.1em;
    border: 1px solid red;
    background-color: white;
    -webkit-transition: 0.4s;
    transition: 0.4s;
    border-radius: 50%;
  } */

  /* > div:last-child {
    position: absolute;
    cursor: pointer;
    width: 3em;
    border: 1px solid blue;
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
    border: 1px solid red;
    background-color: white;
    -webkit-transition: 0.4s;
    transition: 0.4s;
    border-radius: 50%;
  }
  > input:checked + div {
    background-color: #2196f3;
  }
  > input:focus + div {
    box-shadow: 0 0 1px #2196f3;
  }
  > input:checked + div:before {
    -webkit-transform: translateX(1.3em);
    -ms-transform: translateX(1.3em);
    transform: translateX(1.3em);
  } */
`;
