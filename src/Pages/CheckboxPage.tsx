import React from "react";
import Checkbox from "../Components/Checkbox/Checkbox";
import styled from "styled-components";

// See examples from https://react.semantic-ui.com/modules/checkbox/#types-slider

const StyledCheckboxPage = styled.div``;

const CheckboxPage = () => (
  <StyledCheckboxPage>
    <div>
      <p>Simple Checkbox</p>
      <Checkbox primary checked />
      <Checkbox secondary checked />
      <Checkbox />
      <Checkbox toggle />
      <Checkbox slider />
      <Checkbox disabled checked />
    </div>
    <div>
      <p>Checkbox with label</p>
      <Checkbox primary label="Primary" labelPosition="top" />
      <Checkbox secondary label="Secondary" labelPosition="bottom" />
      <Checkbox label="Default" labelPosition="right" />
    </div>
    <div>
      <p>Other checkbox styles</p>
      <Checkbox toggle label="Toggle" />
      <Checkbox slider label="Slider" />
      <Checkbox disabled label="Disabled" />
    </div>
  </StyledCheckboxPage>
);

export default CheckboxPage;
