import React from "react";
import Checkbox from "../Components/Checkbox/Checkbox";
import Card from "../Components/UI/Card/Card";
import styled from "styled-components";

// See examples from https://react.semantic-ui.com/modules/checkbox/#types-slider

// Implementation examples for the Toggle version of the checkbox
// https://upmostly.com/tutorials/build-a-react-switch-toggle-component
// https://codepen.io/voidale/pen/EWPGLb

const StyledCheckboxPage = styled.div``;

const CheckboxPage = () => (
  <StyledCheckboxPage>
    <Card title="simple checkbox">
      <Checkbox primary checked />
      <Checkbox secondary checked />
      <Checkbox />
      <Checkbox toggle primary />
      <Checkbox slider secondary />
      <Checkbox disabled checked />
    </Card>
    <Card title="checkbox with label">
      <Checkbox primary label="Primary" labelPosition="top" />
      <Checkbox secondary label="Secondary" labelPosition="bottom" />
      <Checkbox label="Default" labelPosition="right" />
    </Card>
    <Card title="other checkbox styles">
      <Checkbox toggle label="Toggle" />
      <Checkbox slider label="Slider" />
      <Checkbox disabled label="Disabled" />
    </Card>
  </StyledCheckboxPage>
);

export default CheckboxPage;
