import React, { FunctionComponent } from "react";
import { StyledHeader } from "./Header.styled";
import { FiMenu } from "react-icons/fi";
import Menu from "../../../Components/Menu/Menu";
import { useHistory } from "react-router-dom";

interface Props {
  clicked: (event: React.MouseEvent<SVGElement, MouseEvent>) => void;
}

const Header: FunctionComponent<Props> = ({ clicked }) => {
  let history = useHistory();

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
    <StyledHeader>
      <FiMenu onClick={clicked} />
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
