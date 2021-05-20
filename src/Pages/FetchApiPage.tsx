import React from "react";
import ContentBox from "../Components/UI/ContentBox/ContentBox";
import FetchApi from "../Components/FetchApi/FetchApi";

const FetchApiPage = () => {
  return (
    <ContentBox title="Fetch from IMDB">
      <FetchApi />
    </ContentBox>
  );
};

export default FetchApiPage;
