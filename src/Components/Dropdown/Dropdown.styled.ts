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

  .jude {
    background-color: pink;
    display: table;
  }

  // option {
  //   font-size: 0.9rem;
  //   padding: 2px 5px;
  // }
`;
