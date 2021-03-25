import styled from "styled-components";
import { theme } from "../../../shared/Theme";

export const StyledProfile = styled.div`
  display: grid;
  grid-template-columns: 20rem 1rem 1fr;
  grid-template-rows: 1fr 0.2rem 10rem;

  @media (max-width: 760px) {
    display: flex;
    flex-direction: column;
  }
`;

export const StyledUserImg = styled.div`
  grid-column-start: 1;
  grid-column-end: 1;
  text-align: center;
  padding: 0;
  //border: 1px solid;
  border-radius: 0.3rem;
  // box-shadow: 0 1px 3px 0 #d4d4d5, 0 0 0 1px #d4d4d5;
  img,
  svg {
    width: 15rem;
    height: 15rem;
    font-weight: lighter;
    border-radius: 50%;
  }

  svg {
    stroke-width: 0.2;
  }
  div {
    display: flex;
    flex-direction: column;
    text-align: left;
    span {
      flex-wrap: wrap;
      font-weight: bold;
      /* padding-bottom: 0.1rem;
      padding-left: 0; */
    }
    label {
      font-weight: lighter;
      font-size: 85%;
      opacity: 0.7;
    }
  }
`;

export const StyledAbout = styled.ul`
  grid-column-start: 1;
  grid-column-end: 1;
  grid-row-start: 3;
  // grid-row-end: 3;
  text-align: left;
  padding: 0;
  // box-shadow: 0 1px 3px 0 #d4d4d5, 0 0 0 1px #d4d4d5;
  border-radius: 0.3rem;

  li {
    display: flex;
    align-items: center;
    padding: 0.3rem;
    svg {
      margin-right: 0.2rem;
    }

    a {
      color: ${theme.fontColor};
      text-decoration: none;
      :visited {
        color: ${theme.primaryColor};
      }
      :hover {
        color: ${theme.primaryColor};
        text-decoration: underline;
      }
      :active {
        color: ${theme.primaryColor};
      }
    }
  }
`;

export const StyledSkills = styled.div`
  grid-column-start: 3;
  grid-column-end: 3;
  display: grid;
  grid-template-rows: 1fr 1fr;
  text-align: left;
  grid-gap: 1rem;

  div {
    display: block;
    padding: 1rem;
    box-shadow: 0 1px 3px 0 #d4d4d5, 0 0 0 1px #d4d4d5;
    border-radius: 0.3rem;
    h3 {
      font-weight: bold;
    }
  }
`;
