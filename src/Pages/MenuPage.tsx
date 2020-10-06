import React from "react";
import styled from "styled-components";
import Card from "../Components/UI/Card/Card";
import Menu from "../Components/Menu/Menu";

const StyledMenuPage = styled.div`
  .menu-wrapper {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 1rem 2rem;
    position: relative;

    div {
      position: relative;
      ul {
        position: absolute;
        top: -1rem;
      }
    }
  }
`;

const MENUS = [
  {
    name: "Simple Menu",
    type: "simple",
    header: "Open Menu",
    items: ["Profile", "My account", "Logout"],
  },
  {
    name: "Selected Menu",
    type: "selected",
    header: "When device is locked",
    items: [
      "Fly to the moon",
      "Show all notification content",
      "Hide sensitive notification content",
      "Hide all notification content",
    ],
  },
];

// TODO
// outsource styling
// remove classNames

const MenuPage = () => (
  <StyledMenuPage>
    {MENUS.map(({ name, type, header, items }, index) => (
      <Card title={name}>
        <div key={index} className="menu-wrapper">
          <Menu header={header} type={type} items={items} />
        </div>
      </Card>
    ))}
  </StyledMenuPage>
);

export default MenuPage;
