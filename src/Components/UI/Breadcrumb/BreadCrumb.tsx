import React from "react";
import { StyledBreadcrumb } from "./Breadcrumb.style";
import { Link, useHistory, useLocation } from "react-router-dom";

interface props {
  path?: string;
}

const Breadcrumb: React.FC<props> = (props) => {
  let history = useHistory();
  const location = useLocation();

  const string = location.pathname;
  const stringArray: string[] = string.split("/");
  // stringArray.shift();
  const lastValue = stringArray[stringArray.length - 1];
  // const tempArray = stringArray;
  // const prevPathArray = tempArray.splice(tempArray.length - 1, 1);
  // const prevPath = stringArray.reduce(
  //   (acc: string, currV: string) => acc + "/" + currV
  // );
  const prevPath = () => {
    for (let i = 1; i < stringArray.length - 1; i++) {
      if (stringArray[i + 1] === lastValue) return "/" + stringArray[i];
      return "/" + stringArray[i] + "/" + stringArray[i + 1];
    }
    return "/";
  };

  const displayCurrentPage = () => {
    const result = stringArray.map((value, idx) => {
      console.log(stringArray, lastValue, prevPath());
      if (value === "") value = "Dashboard";
      return (
        <li key={idx}>
          {value === lastValue ? (
            <label>{value.charAt(0).toUpperCase() + value.substring(1)}</label>
          ) : (
            <div>
              <Link to={prevPath()}>
                {value.charAt(0).toUpperCase() + value.substring(1)}
              </Link>
              <span>{" / "}</span>
            </div>
          )}
        </li>
      );
    });
    return result;
  };

  return <StyledBreadcrumb>{displayCurrentPage()}</StyledBreadcrumb>;
};

export default Breadcrumb;
