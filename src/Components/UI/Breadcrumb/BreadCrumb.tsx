import React from "react";
import { StyledBreadcrumb } from "./Breadcrumb.style";
import { useHistory, useLocation } from "react-router-dom";
import Button from "../../Elements/Button/Button";
import validPath from "../../../shared/Paths";

interface props {
  path?: string;
}

const Breadcrumb: React.FC<props> = () => {
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

  const pathHandler = (value: string) => {
    let route = "/";
    if (value === "Dashboard") {
      history.push(route);
    } else {
      route = location.slice(0, location.indexOf(value) + value.length);
      if (validPath(route)) {
        history.push(route);
      } else {
        history.push("/");
      }
    }
  };

  const crumbStyle = (value: string) => {
    const valueToUppercase =
      value.charAt(0).toUpperCase() + value.substring(1, value.length);
    const result = valueToUppercase.replace(/_/g, " ");
    return result;
  };

  const breadCrumb = () => {
    return crumbs().map((crumb, idx) => {
      return (
        <li key={idx}>
          <Button
            text
            primary={idx !== lastIdx()}
            disabled={idx === lastIdx()}
            size="small"
            clicked={() => pathHandler(crumb)}
          >
            {crumbStyle(crumb)}
          </Button>
          <span>{idx !== lastIdx() ? "/" : ""}</span>
        </li>
      );
    });
  };

  return <StyledBreadcrumb>{breadCrumb()}</StyledBreadcrumb>;
};

export default Breadcrumb;
