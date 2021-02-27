import React from "react";
import { StyledBreadcrumb } from "./Breadcrumb.style";
import { Link, useHistory, useLocation } from "react-router-dom";

interface props {
  path?: string;
}

const Breadcrumb: React.FC<props> = (props) => {
  let history = useHistory();
  const location = useLocation();

  const displayCurrentPage = (string: string) => {
    const stringArray: string[] = string.split("/");
    console.log(stringArray);
    const lastValue = stringArray[stringArray.length - 1];
    const result = stringArray.map((value, idx) => {
      //if (value === "") return "home";
      let prevPath = "/";
      if (idx > 0) {
        prevPath = "/" + stringArray[idx - 1];
      }
      return (
        <li key={idx}>
          {value === lastValue ? (
            <span>{value}</span>
          ) : (
            <div>
              <Link to={prevPath}>{value}</Link>
              <span>{">"}</span>
            </div>
          )}
        </li>
      );
    });
    return result;
  };

  return (
    <StyledBreadcrumb>{displayCurrentPage(location.pathname)}</StyledBreadcrumb>
  );
};

export default Breadcrumb;
