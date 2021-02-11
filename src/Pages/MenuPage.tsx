import React from "react";
import styled from "styled-components";
import ContentBox from "../Components/UI/ContentBox/ContentBox";
import Menu from "../Components/Elements/Menu/Menu";
// import { CgProfile } from "react-icons/cg";

const StyledMenuPage = styled.div`
  text-align: left;
  div {
    div {
      display: inline-block;
    }
  }
`;

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
    items: [
      "alpha",
      "beta",
      "gamma",
      "delta",
      "alpha",
      "beta",
      "gamma",
      "delta",
    ],
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
      <ContentBox key={index} title={name}>
        <Menu primary header={header} type={type} items={items} />
      </ContentBox>
    ))}
    <ContentBox title="Secondary Menu">
      <div>
        <Menu
          secondary
          type="dotted"
          items={[
            "Mercury",
            "Mars",
            "Earth",
            "Jupiter",
            "Venus",
            "Neptune",
            "Saturn",
            "Uranus",
          ]}
        />
      </div>
    </ContentBox>
  </StyledMenuPage>
);

export default MenuPage;
