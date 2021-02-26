import React from "react";
import { StyledBreadcrumb } from "./Breadcrumb.style";
import { Link } from "react-router-dom";

interface props {
  path: string;
}

const Breadcrumb: React.FC<props> = (props) => {
  const displayCurrentPage = (string: string) => {
    const stringArray: string[] = string.split("/");
    console.log(stringArray);
    const result = stringArray.map((value, idx) => {
      return (
        <div key={idx}>
          <span>{value}</span>
        </div>
      );
    });
    return result;
  };

  return <StyledBreadcrumb>{displayCurrentPage(props.path)}</StyledBreadcrumb>;
};

export default Breadcrumb;
