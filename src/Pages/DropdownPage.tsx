import React from "react";
import Dropdown from "../Components/Dropdown/Dropdown";
import Card from "../Components/UI/Card/Card";

const pets = [
  { key: 1, value: "dog", text: "Dog" },
  { key: 2, value: "cat", text: "Cat" },
  { key: 3, value: "hamster", text: "Hamster" },
  { key: 4, value: "parrot", text: "Parrot" },
  { key: 5, value: "spider", text: "Spider" },
  { key: 6, value: "goldfish", text: "Goldfish" },
];

const DropdownPage = () => {
  return (
    <div>
      <Card title="search">
        <Dropdown options={pets} placeholder="My Pets" />
      </Card>
    </div>
  );
};

export default DropdownPage;
