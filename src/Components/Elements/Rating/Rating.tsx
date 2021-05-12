import React, { useState } from "react";
import { StyledRating } from "./Rating.styled";
import * as svg from "../../../shared/AppIcons";

export interface RatingProps {
  heart?: boolean;
  star?: boolean;
  count?: number;
}

const Rating: React.FC<RatingProps> = (props) => {
  const { heart, star, count } = props;

  const [isChecked, setIsChecked] = useState(true);

  const handleCheck = () => {
    setIsChecked((isChecked) => !isChecked);
  };
  let mySvg = <svg.AiFillStar onClick={handleCheck} />;

  if (heart) {
    mySvg = <svg.AiFillHeart />;
  }

  return <StyledRating isChecked={isChecked}>{mySvg}</StyledRating>;
};

export default Rating;
