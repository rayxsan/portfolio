import React, { useState } from "react";
import { StyledBreadcrumb } from "./Breadcrumb.style";
import { Link, useHistory, useLocation } from "react-router-dom";

interface props {
  path?: string;
}

const Breadcrumb: React.FC<props> = (props) => {
  const [selected, setSelected] = useState("/");

  let history = useHistory();
  const location = useLocation().pathname;

  const crumbs = () => {
    if (location === "/") return ["Dashboard"];
    const result = location.split("/");
    result.splice(0, 1, "Dashboard");
    return result;
  };

  const lastIdx = () => {
    return crumbs().length - 1;
  };

  const clickHandler = (event: any, idx: number) => {
    event.preventDefault();
    const selectedCrumb = crumbs()[idx];
    console.log(selectedCrumb);
    setSelected(history.location.pathname);
  };
  const pathHandler = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    //const value = crumbs()[idx];
    console.log(event.target);
    history.push("/");
  };

  const breadCrumb = () => {
    console.log(crumbs(), location);
    return crumbs().map((crumb, idx) => {
      return (
        <li key={idx}>
          {idx === lastIdx() ? (
            <label>{crumb}</label>
          ) : (
            <div>
              <button onClick={(e) => pathHandler(e)}>{crumb}</button>{" "}
              <span>{" / "}</span>
            </div>
          )}
        </li>
      );
    });
  };

  return <StyledBreadcrumb>{breadCrumb()}</StyledBreadcrumb>;
};

export default Breadcrumb;
