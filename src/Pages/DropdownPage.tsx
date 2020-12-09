import React from "react";
import Dropdown from "../Components/Dropdown/Dropdown";
import Card from "../Components/UI/Card/Card";

const pets = ["dog", "cat", "hamster", "parrot", "spider", "goldfish"];

const DropdownPage = () => {
  return (
    <div>
      <Card title="search">
        <Dropdown options={pets} placeholder="Choose a pet" />
      </Card>
    </div>
  );
};

export default DropdownPage;
