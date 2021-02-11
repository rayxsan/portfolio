import React from "react";
import Dropdown from "../Components/Elements/Dropdown/Dropdown";
import { StyledDropdown } from "../Components/Elements/Dropdown/Dropdown.styled";
import ContentBox from "../Components/UI/ContentBox/ContentBox";
import { StyledContentBox } from "../Components/UI/ContentBox/ContentBox.styled";
import styled from "styled-components";

const StyledDropdownPAge = styled.div`
  ${StyledContentBox} {
    ${StyledDropdown} {
      margin-left: 12px;
    }
  }
`;

const pets = [
  { key: 1, value: "dog", text: "Dog" },
  { key: 2, value: "cat", text: "Cat" },
  { key: 3, value: "hamster", text: "Hamster" },
  { key: 4, value: "parrot", text: "Parrot" },
  { key: 5, value: "spider", text: "Spider" },
  { key: 6, value: "goldfish", text: "Goldfish" },
];

const options = [
  { key: 5, value: 5, text: "5" },
  { key: 10, value: 10, text: "10" },
  { key: 15, value: 15, text: "15" },
  { key: 20, value: 20, text: "20" },
];

const DropdownPage = () => {
  return (
    <StyledDropdownPAge>
      <ContentBox title="Basic Dropdown">
        <Dropdown options={pets} placeholder="My Pets" />
        <Dropdown options={options} />
      </ContentBox>
      <ContentBox title="Search Dropdown">
        <Dropdown search options={pets} placeholder="My Pets" />
      </ContentBox>
      <ContentBox title="Multiple Dropdown">
        <Dropdown multiple options={pets} placeholder="My Pets" />
      </ContentBox>
      <ContentBox title="Multiple Search Dropdown">
        <Dropdown search multiple options={pets} placeholder="My Pets" />
      </ContentBox>
    </StyledDropdownPAge>
  );
};

export default DropdownPage;
