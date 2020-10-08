import React from "react";
import Radio from "../Components/Radio/Radio";
import Card from "../Components/UI/Card/Card";
import styled from "styled-components";

const StyledRadioPage = styled.div``;

const RadioPage = () => (
  <StyledRadioPage>
    <Card title="simple radio button">
      <Radio label="Default" />
      <Radio primary label="Primary" />
      <Radio secondary label="Secondary" />
      <Radio disabled checked label="Disabled" />
    </Card>
  </StyledRadioPage>
);

export default RadioPage;
