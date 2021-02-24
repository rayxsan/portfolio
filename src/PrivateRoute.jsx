import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { AuthContext } from "./contexts/AuthContext";
import Layout from "./hoc/Layout/Layout";

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
          <Layout>
            <RouteComponent {...routeProps} />
          </Layout>
        ) : (
          <Redirect to="/auth/signin" />
        )
      }
    />
  );
};

export default PrivateRoute;
