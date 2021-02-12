import React from "react";
import styled from "styled-components";
import ContentBox from "../Components/UI/ContentBox/ContentBox";
import Card from "../Components/Elements/Card/Card";
import spider from "../Images/Spider.jpg";

interface CardPageProps {}

const StyledCardPage = styled.div<CardPageProps>`
  .test {
    display: flex;
    flex-wrap: wrap;
  }
`;

const CardPage = () => {
  const imgContent = <img src={spider} alt="spider" />;
  return (
    <StyledCardPage>
      <ContentBox title="A card">
        <Card
          animate
          header="My card"
          content="Some content"
          description="Description"
          footer="footer"
        />
      </ContentBox>
      <ContentBox
        title="A group of cards"
        text="Cards are designed to contain a group of cards and be flexible to it."
      >
        <Card group>
          <Card animate header="My card" content={imgContent} footer="footer" />
          <Card
            header="My card"
            content="Some content"
            description="Description"
            footer={<button>Button</button>}
          />
          <Card
            animate
            header="My card"
            content="Some content"
            footer="footer"
          />
        </Card>
      </ContentBox>
    </StyledCardPage>
  );
};

export default CardPage;
