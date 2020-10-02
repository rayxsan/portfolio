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

//TODO outsource styling
const MenuPage = () => (
  <StyledMenuPage className="menu-page">
    {theme.MENUS.map(({ name, header, items }, index) => (
      <div key={index} className="menu-wrapper">
        <h3 className="menu-title">{name}</h3>
        <Menu header={header} items={items} />
      </div>
    ))}
  </StyledMenuPage>
);

export default MenuPage;
