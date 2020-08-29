import React from "react";
import styled from "styled-components";
import Radio from "../Components/Radio/Radio";

const StyledRadioPage = styled.div``;

const RadioPage = () => (
  <StyledRadioPage>
    <div>
      <p>Simple Radio Button</p>
      <Radio />
    </div>
  </StyledRadioPage>
);

export default RadioPage;
