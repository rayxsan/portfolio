import React from "react";
import styled from "styled-components";
import Menu from "../Components/Menu/Menu";

const StyledMenuPage = styled.div``;

const items = [
  { key: 1, value: "test1" },
  { key: 2, value: "test2" },
  { key: 3, value: "test3" },
];

const MenuPage = () => (
  <StyledMenuPage>
    <div>
      <p>Simple Menu</p>
      <Menu title="Simple-Menu" items={items} />
    </div>
  </StyledMenuPage>
);

export default MenuPage;
