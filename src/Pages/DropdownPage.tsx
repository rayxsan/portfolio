import React from "react";
import Dropdown from "../Components/Dropdown/Dropdown";
import { StyledDropdown } from "../Components/Dropdown/Dropdown.styled";
import Card from "../Components/UI/Card/Card";
import { StyledCard } from "../Components/UI/Card/Card.styled";
import styled from "styled-components";

const StyledDropdownPAge = styled.div`
  ${StyledCard} {
    ${StyledDropdown} {
      margin: 12px;
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
      <Card title="search">
        <Dropdown
          options={pets}
          placeholder="My Pets"
          onChange={(value) => console.log(value)}
        />
        <Dropdown options={options} />
      </Card>
    </StyledDropdownPAge>
  );
};

export default DropdownPage;
