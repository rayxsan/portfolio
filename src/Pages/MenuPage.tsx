import React from "react";
import styled from "styled-components";
import Menu from "../Components/Menu/Menu";
import { theme } from "../shared/Theme";

import Card from "../Components/UI/Card/Card";

const StyledMenuPage = styled.div`
  .menu-wrapper {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 1rem 2rem;
    height: 10rem;
  }
`;

// TODO
// outsource styling
// remove classNames
// Move <Cards to their page
const MenuPage = () => (
  <StyledMenuPage className="menu-page">
    <Card title="Simple Card Title" text="This text is a test. :-)"></Card>
    <Card
      title="Simple Card Title Simple Card Title"
      text="This text is a test. :-) This text is a test. :-) This text is a test. :-)"
    ></Card>
    <Card
      title="Simple Card Title Simple Card Title Simple Card Title"
      text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce accumsan
      condimentum libero, eget tristique enim accumsan mollis. Duis tempus massa
      leo, in condimentum nunc gravida ut. Integer fermentum odio eget porttitor
      consequat. Vestibulum vestibulum nisi vitae consequat egestas. Sed
      elementum tristique laoreet. Vestibulum dictum metus quis elit hendrerit,
      vel tincidunt turpis luctus. Nullam semper fermentum libero ut convallis.
      Aenean eget risus velit. Donec maximus lacus eros, nec lobortis ipsum
      egestas vitae. Aliquam at dapibus odio. Praesent mattis ut nisi id
      porttitor."
    ></Card>

    {theme.MENUS.map(({ name, header, items }, index) => (
      <div key={index} className="menu-wrapper">
        <h3 className="menu-title">{name}</h3>
        <Menu header={header} items={items} />
      </div>
    ))}
  </StyledMenuPage>
);

export default MenuPage;
