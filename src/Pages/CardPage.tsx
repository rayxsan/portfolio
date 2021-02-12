import React from "react";
import styled from "styled-components";
import ContentBox from "../Components/UI/ContentBox/ContentBox";
import Card from "../Components/Elements/Card/Card";
import spider from "../Images/Spider.jpg";
import Button from "../Components/Elements/Button/Button";

interface CardPageProps {}

const StyledCardPage = styled.div<CardPageProps>`
  .test {
    display: flex;
    flex-wrap: wrap;
  }
`;

const CardPage = () => {
  const imgContent = (
    <div>
      <img src={spider} alt="spider" title="Gasteracanthar" />
      <span>Gasteracanthar</span>
    </div>
  );
  const spiderDescription =
    "Spiders (order Araneae) are air-breathing arthropods that have eight legs, chelicerae with fangs generally able to inject venom, and spinnerets that extrude silk.";
  return (
    <StyledCardPage>
      <ContentBox title="A card">
        <Card
          content={imgContent}
          description={spiderDescription}
          footer={
            <Button primary text>
              Learn more
            </Button>
          }
        />
      </ContentBox>
      <ContentBox
        title="A group of cards"
        text="Cards are designed to contain a group of cards and be flexible to it."
      >
        <Card group>
          <Card
            animate
            header="My card"
            content="Lorem ipsum"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          />
          <Card
            animate
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
