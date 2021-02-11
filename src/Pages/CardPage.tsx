import React, { useState } from "react";
import styled from "styled-components";
import ContentBox from "../Components/UI/ContentBox/ContentBox";
import Button from "../Components/Elements/Button/Button";
import spider from "../Images/Spider.jpg";
import { useClickOutsideListenerRef } from "../shared/utils";
import { FaTimes } from "react-icons/fa";

interface StyledContentBoxPageProps {
  showText?: boolean;
}

const StyledContentBoxPage = styled.div<StyledContentBoxPageProps>`
  display: grid;
  grid-template-rows: 10rem 15rem 10rem;
  grid-template-columns: 1fr 1fr 1fr;
  text-align: left;

  .emptyContentBox {
    grid-column-start: 1;
    grid-column-end: 4;
  }

  .spiderContentBox {
    grid-row-start: 2;
    grid-row-end: 4;
    grid-column-start: 1;
    grid-column-end: 3;
  }

  .wordContentBox {
    grid-row-start: 2;
    grid-row-end: 2;
    grid-column-start: 3;
    grid-column-end: 4;
  }

  .showTextContentBox {
    display: ${(props: StyledContentBoxPageProps) =>
      props.showText ? "block" : "none"};
    position: absolute;
    background-color: ${({ theme }) => theme.disabledColor};
    padding: 0.5rem;
    overflow: hidden;
    left: 5rem;
    bottom: 5rem;
    font-size: 80%;
    z-index: 3;

    svg {
      position: absolute;
      top: 0;
      right: 0;
      padding: 0.5em;
      opacity: 0.7;
      :hover {
        opacity: 1;
      }
    }
    h3 {
      margin-bottom: 0;
    }

    p {
      padding-bottom: 0.5rem;
    }
  }

  a {
    margin-left: 1rem;
  }

  p {
    font-weight: lighter;
    margin: 0;
  }
  @media only screen and (max-width: 760px),
    (min-device-width: 768px) and (max-device-width: 1024px) {
    display: block;
  }
`;

const spiderText =
  "Spiders (order Araneae) are air-breathing arthropods that have eight legs, chelicerae with fangs generally able to inject venom, and spinnerets that extrude silk.";

const ContentBoxPage = () => {
  const [showText, setShowText] = useState(false);

  const ref = useClickOutsideListenerRef(() => setShowText(false));
  const onClickHandler = () => {
    window.open(
      "https://en.wikipedia.org/wiki/Spiny_orb-weaver",
      "_blank",
      "noopener noreferrer"
    );
  };

  const showTextHandler = () => {
    setShowText(!showText);
  };
  return (
    <StyledContentBoxPage showText={showText} ref={ref}>
      <ContentBox
        className="emptyContentBox"
        title="Empty ContentBox."
        text="Empty ContentBox."
      />
      <ContentBox
        className="spiderContentBox"
        title="A ContentBox can show an image."
        text={spiderText}
        img={{ src: spider, tooltip: "Gasteracanthar" }}
        onClick={onClickHandler}
      >
        <a
          href="https://en.wikipedia.org/wiki/Spider"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button text primary>
            Learn more
          </Button>
        </a>
      </ContentBox>
      <ContentBox className="wordContentBox" title="" text="Word of the day.">
        <p style={{ fontWeight: "bold" }}>Caveat</p>
        <p>noun | KAV-ee-aht</p>
        <ContentBox className="showTextContentBox" title="Definition">
          <FaTimes onClick={showTextHandler}>
            <p>Close</p>
          </FaTimes>
          <p>
            1 a : a warning enjoining one from certain acts or practices b : an
            explanation to prevent misinterpretation c : a modifying or
            cautionary detail to be considered when evaluating, interpreting, or
            doing something.
          </p>
          <p>
            2 : a legal warning to a judicial officer to suspend a proceeding
            until the opposition has a hearing.
          </p>
        </ContentBox>
        <Button text primary clicked={showTextHandler}>
          Learn More
        </Button>
      </ContentBox>
    </StyledContentBoxPage>
  );
};

export default ContentBoxPage;
