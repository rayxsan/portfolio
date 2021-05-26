import React from "react";
import ContentBox from "../Components/UI/ContentBox/ContentBox";
import FetchApi from "../Components/FetchApi/FetchApi";

const FetchApiPage = () => {
  return (
    <ContentBox title="Fetch from OMDB">
      <FetchApi />
    </ContentBox>
  );
};

export default FetchApiPage;
