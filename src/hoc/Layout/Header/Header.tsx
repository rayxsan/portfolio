import React, { FunctionComponent, useContext } from "react";
import { StyledHeader } from "./Header.styled";
import { useHistory } from "react-router-dom";
import { FiMenu } from "react-icons/fi";
import Menu from "../../../Components/Elements/Menu/Menu";
import * as path from "../../../shared/Paths";
import { auth } from "../../../firebase";
import { AuthContext } from "../../../contexts/AuthContext";
import Breadcrumb from "../../../Components/UI/Breadcrumb/BreadCrumb";

interface Props {
  expand: boolean;
  clicked: (event: React.MouseEvent<SVGElement, MouseEvent>) => void;
}

const Header: FunctionComponent<Props> = ({ clicked, expand }) => {
  const user = useContext(AuthContext);

  let history = useHistory();
  const onClickHandler = (value: string) => {
    if (value === "Home") {
      history.push("/");
    }
    if (value === "Settings") {
      history.push("/");
    }
    if (value === "Logout") {
      auth.signOut();
      history.push(path.signinPath);
    }
  };

  return (
    <StyledHeader expand={!expand}>
      <FiMenu onClick={clicked} />
      <div>
        <span>{user.currentUser && user.currentUser.email}</span>
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
