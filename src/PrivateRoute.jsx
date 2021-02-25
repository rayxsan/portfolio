import React, { useContext } from "react";
import { Route, Link } from "react-router-dom";
import { AuthContext } from "./contexts/AuthContext";
import * as path from "./shared/Paths";
import ContentBox from "./Components/UI/ContentBox/ContentBox";

const PrivateRoute = ({ component: RouteComponent, ...rest }) => {
  const { authenticated, loadingAuthState } = useContext(AuthContext);

  if (loadingAuthState) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  }

  return (
    <Route
      {...rest}
      render={(routeProps) =>
        authenticated ? (
          <RouteComponent {...routeProps} />
        ) : (
          <ContentBox title="Private Content">
            Content only available to authenticated users. Please click{" "}
            <Link to={path.signinPath}>here</Link> to sign in.
          </ContentBox>
          // <Redirect to="/auth/signin" />
        )
      }
    />
  );
};

export default PrivateRoute;
