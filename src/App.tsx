import React from "react";
import { Route, Switch } from "react-router-dom";
//import AuthLayout from "./hoc/AuthLayout/AuthLayout";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./shared/Global";
import { theme } from "./shared/Theme";
import * as path from "./shared/Paths";
import * as page from "./Pages";
import { AuthProvider } from "./contexts/AuthContext";
import Layout from "./hoc/Layout/Layout";
import PrivateRoute from "./PrivateRoute";

interface OwnProps {}
interface StateProps {}
type Props = OwnProps & StateProps;

interface State {}

const App = () => {
  let routes = (
    <AuthProvider>
      <Switch>
        <Layout>
          <PrivateRoute
            path={path.privatePagePath}
            component={page.PrivatePage}
          />
          <Route path={path.buttonPath} component={page.ButtonPage} />
          <Route path={path.chartPath} component={page.ChartPage} />
          <Route path={path.checkboxPath} component={page.CheckboxPage} />
          <Route path={path.progressPath} component={page.ProgressPage} />
          <Route path={path.radioPath} component={page.RadioPage} />
          <Route path={path.menuPath} component={page.MenuPage} />
          <Route path={path.cardPath} component={page.CardPage} />
          <Route path={path.dropdownPath} component={page.DropdownPage} />
          <Route path={path.formPath} component={page.FormPage} />
          <Route path={path.tablePath} component={page.TablePage} />
          <Route path={path.signinPath} exact component={page.SigninPage} />
          <Route path={path.signupPath} component={page.SignupPage} />
          <Route path={path.profilePath} component={page.ProfilePage} />
          <Route
            path={path.passwordResetPath}
            component={page.PasswordResetPage}
          />
          <Route
            path={path.dashboardPath}
            exact
            component={page.DashboardPage}
          />
          {/* <Redirect to="/" /> */}
          {/* <Route path="*" exact component={page.NotFoundPage} /> */}
        </Layout>
      </Switch>
    </AuthProvider>
  );

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {routes}
    </ThemeProvider>
  );
};

export default App;
