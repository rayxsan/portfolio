import React from "react";
import styled from "styled-components";
import Menu from "../Components/Menu/Menu";

const StyledMenuPage = styled.div`
  background-color: red;
  width: 60%;

  section {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 10px;
    padding: 20px;
    background-color: #fff;
  }

  Button {
    margin-left: 10px;
  }
`;

const items = [
  { key: 1, value: "test 1" },
  { key: 2, value: "test 2" },
  { key: 3, value: "test 3" },
];

const MenuPage = () => (
  <StyledMenuPage>
    <section>
      <h3>Simple Menu</h3>
      <Menu label="Open Menu" items={items} />
    </section>
    <section>
      <h3>Selected Menu</h3>
      <Menu label="Simple-Menu" items={items} />
    </section>
  </StyledMenuPage>
);

export default MenuPage;
