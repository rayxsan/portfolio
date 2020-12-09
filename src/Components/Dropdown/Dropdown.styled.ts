import styled from "styled-components";

export const StyledDropdown = styled.div`
  color: black;

  // remove picker indicator and focus outline from input
  input::-webkit-calendar-picker-indicator {
    display: none;
  }
  *:focus {
    outline: none;
  }

  i::before {
    width: 0;
    height: 0;
    border-left: 0.5rem solid transparent;
    border-right: 0.5rem solid transparent;
    border-top: 0.5rem solid;
  }

  select {
    display: none;
  }

  datalist {
    background-color: #fff;
  }

  input {
    height: 2rem;
    width: fit-content;
    border: 0;
    border-radius: 0.4rem;
    background-color: #bfbfbf;
    opacity: 0.7;
    text-align: center;
    :hover,
    :focus {
      opacity: 1;
    }
    ::placeholder {
      /* Chrome, Firefox, Opera, Safari 10.1+ */
      color: #000;
      opacity: 1; /* Firefox */
    }
  }

  .divRef {
    /* background-color: pink; */
    /* display: table; */
  }

  // option {
  //   font-size: 0.9rem;
  //   padding: 2px 5px;
  // }
`;
