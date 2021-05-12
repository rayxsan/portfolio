import * as React from "react";
import Rating from "../Components/Elements/Rating/Rating";
import ContentBox from "../Components/UI/ContentBox/ContentBox";

export interface RatingPageProps {}

const RatingPage: React.FC<RatingPageProps> = () => {
  return (
    <ContentBox title="Simple Rating">
      <Rating />
    </ContentBox>
  );
};

export default RatingPage;
