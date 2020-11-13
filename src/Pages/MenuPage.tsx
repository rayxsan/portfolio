import React from "react";
import styled from "styled-components";
import Card from "../Components/UI/Card/Card";
import Menu from "../Components/Menu/Menu";
// import { CgProfile } from "react-icons/cg";

const StyledMenuPage = styled.div``;

interface MENU {
  name: string;
  type: "simple" | "selected" | "dotted";
  header?: string;
  items: string[];
}

const MENUS: MENU[] = [
  {
    name: "Simple Menu",
    type: "simple",
    header: "Open Menu",
    items: ["Profile", "My account", "Logout"],
  },
  {
    name: " 3 Dot Menu",
    type: "dotted",
    items: ["alpha", "beta", "gamma", "delta", "alpha", "beta", "gamma", "delta"],
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

const MenuPage = () => (
  <StyledMenuPage>
    {MENUS.map(({ name, type, header, items }, index) => (
      <Card key={index} title={name}>
        <Menu primary header={header} type={type} items={items} />
      </Card>
    ))}
    <Card title="Secondary Menu">
      <Menu
        secondary
        type="dotted"
        items={["Mercury", "Mars", "Earth", "Jupiter", "Venus", "Neptune", "Saturn", "Uranus"]}
      />
    </Card>
  </StyledMenuPage>
);

export default MenuPage;
