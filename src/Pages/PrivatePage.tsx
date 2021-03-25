import React from "react";
import styled from "styled-components";
import ContentBox from "../Components/UI/ContentBox/ContentBox";

const StyledPrivatepage = styled.div`
  text-align: justify;
`;

const PrivatePage = () => {
  return (
    <StyledPrivatepage>
      <ContentBox title="Private Content">
        Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in
        laying out print, graphic or web designs. The passage is attributed to
        an unknown typesetter in the 15th century who is thought to have
        scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a
        type specimen book.
      </ContentBox>
    </StyledPrivatepage>
  );
};

export default PrivatePage;
