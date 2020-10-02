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

const menus = [
  {
    title: "Simple Menu",
    header: "Open Menu",
    items: [
      { key: 1, value: "Profile" },
      { key: 2, value: "My account" },
      { key: 3, value: "Logout" },
    ],
  },
  {
    title: "Selected Menu",
    header: "Open Menu",
    items: [
      { key: 1, value: "Profile" },
      { key: 2, value: "My account" },
      { key: 3, value: "Logout" },
    ],
  },
];

//TODO outsource constants and styling
const MenuPage = () => (
  <StyledMenuPage className="menu-page">
    {menus.map(menu => (
      <div className="menu-wrapper">
        <h3 className="menu-title">{menu.title}</h3>
        <Menu header={menu.header} items={menu.items} />
      </div>
    ))}
  </StyledMenuPage>
);

export default MenuPage;
