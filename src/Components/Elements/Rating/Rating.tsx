import React, { useState } from "react";
import { StyledRating } from "./Rating.styled";
import * as svg from "../../../shared/AppIcons";

export interface RatingProps {
  heart?: boolean;
  star?: boolean;
  count?: number;
}

const Rating: React.FC<RatingProps> = (props) => {
  const { heart } = props;

  const [rating, setRating] = useState(true);

  const handleCheck = () => {
    setRating((isChecked) => !isChecked);
  };

  const handleMouseEnter = () => {
    setRating(true);
  };

  let mySvg = (
    <div>
      <svg.AiFillStar onClick={handleCheck} onMouseEnter={handleMouseEnter} />
    </div>
  );

  if (heart) {
    mySvg = <svg.AiFillHeart />;
  }

  return <StyledRating isChecked={rating}>{mySvg}</StyledRating>;
};

export default Rating;
