import React from "react";
import styled from "styled-components";
import Menu from "../Components/Menu/Menu";

const StyledMenuPage = styled.div`
  .menu-wrapper {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 1rem 2rem;
    height: 10rem;
  }
`;

const MENUS = [
  {
    name: "Simple Menu",
    type: "simple",
    header: "Open Menu",
    items: [{ value: "Profile" }, { value: "My account" }, { value: "Logout" }],
  },
  {
    name: "Selected Menu",
    type: "selected",
    header: "When device is locked",
    items: [
      { value: "Fly to the moon" },
      { value: "Show all notification content" },
      { value: "Hide sensitive notification content" },
      { value: "Hide all notification content" },
    ],
  },
];

// TODO
// outsource styling
// remove classNames
// Move <Cards to their page
const MenuPage = () => (
  <StyledMenuPage>
    {MENUS.map(({ name, type, header, items }, index) => (
      <div key={index} className="menu-wrapper">
        <h3>{name}</h3>
        <Menu header={header} type={type} items={items} />
      </div>
    ))}
  </StyledMenuPage>
);

export default MenuPage;
