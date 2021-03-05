import React, { useState } from "react";
import styled from "styled-components";
import ContentBox from "../Components/UI/ContentBox/ContentBox";
import Card from "../Components/Elements/Card/Card";
import spider from "../Images/Spider.jpg";
import nina from "../Images/Nina.jpeg";
import logo from "../Images/logo192.png";
import Button from "../Components/Elements/Button/Button";
import { FcLike } from "react-icons/fc";

interface CardPageProps {}

const StyledCardPage = styled.div<CardPageProps>``;

const CardPage = () => {
  const [count, setCount] = useState(5);
  const likeHandler = () => {
    setCount(count + 1);
  };

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
          content={{
            innerContent: imgContent,
            description: spiderDescription,
          }}
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
            content={{
              header: "Lorem ipsum",
              meta: "Lorem ipsum",
              description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            }}
          />
          <Card
            animate
            content={{
              header: "Nina",
              meta: "Bite, eat, play",
              miniImg: nina,
              innerContent: `${count} likes`,
            }}
            footer={
              <Button secondary clicked={() => likeHandler()}>
                <FcLike /> Like
              </Button>
            }
          />
          <Card
            animate
            content={{
              header: "Learning React",
              miniImg: logo,
              description: "A JavaScript library for building user interfaces",
            }}
            footer={
              <a
                href="https://reactjs.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Documentation
              </a>
            }
          />
        </Card>
      </ContentBox>
    </StyledCardPage>
  );
};

export default CardPage;
