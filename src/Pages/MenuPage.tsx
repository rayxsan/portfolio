import React from "react";
import styled from "styled-components";
import Menu from "../Components/Menu/Menu";
import { theme } from "../shared/Theme";

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
    header: "Open Menu",
    items: [{ value: "Profile" }, { value: "My account" }, { value: "Logout" }],
  },
  {
    name: "Selected Menu",
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
  <StyledMenuPage className="menu-page">
    {MENUS.map(({ name, header, items }, index) => (
      <div key={index} className="menu-wrapper">
        <h3 className="menu-title">{name}</h3>
        <Menu header={header} items={items} />
      </div>
    ))}
  </StyledMenuPage>
);

export default MenuPage;
