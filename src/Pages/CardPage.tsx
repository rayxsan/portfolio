import React from "react";
import styled from "styled-components";
import ContentBox from "../Components/UI/ContentBox/ContentBox";
import Card from "../Components/Elements/Card/Card";

interface CardPageProps {}

const StyledCardPage = styled.div<CardPageProps>``;

const CardPage = () => {
  return (
    <StyledCardPage>
      <ContentBox title="A card">
        <Card />
      </ContentBox>
    </StyledCardPage>
  );
};

export default CardPage;
