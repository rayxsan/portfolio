import React, { FunctionComponent } from "react";
import { StyledHeader } from "./Header.styled";
import { FiMenu } from "react-icons/fi";
import Menu from "../../../Components/Elements/Menu/Menu";
import { useHistory, useLocation } from "react-router-dom";

interface Props {
  expand: boolean;
  clicked: (event: React.MouseEvent<SVGElement, MouseEvent>) => void;
}

const Header: FunctionComponent<Props> = ({ clicked, expand }) => {
  let history = useHistory();
  const location = useLocation();

  const displayCurrentPage = (string: string) => {
    if (string.includes("/*")) return "404";
    if (string.includes("/components/")) {
      const tempString = string.slice(12);
      return tempString.charAt(0).toUpperCase() + tempString.slice(1);
    }

    return "Home";
  };

  const onClickHandler = (value: string) => {
    if (value === "Home") {
      history.push("/");
    }
    if (value === "Settings") {
      history.push("*");
    }
    if (value === "Logout") {
      history.push("*");
    }
  };

  return (
    <StyledHeader expand={!expand}>
      <FiMenu onClick={clicked} />
      <p>{displayCurrentPage(location.pathname)}</p>
      <div>
        <Menu
          header="Profile"
          type="simple"
          items={["Home", "Settings", "Logout"]}
          onClick={(value) => onClickHandler(value)}
        />
      </div>
    </StyledHeader>
  );
};

export default Header;
