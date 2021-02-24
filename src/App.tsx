import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import AuthLayout from "./hoc/AuthLayout/AuthLayout";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./shared/Global";
import { theme } from "./shared/Theme";
import * as path from "./shared/Paths";
import * as page from "./Pages";
import { AuthProvider } from "./contexts/AuthContext";
import PrivateRoute from "./PrivateRoute";

interface OwnProps {}
interface StateProps {}
type Props = OwnProps & StateProps;

interface State {}

const App = () => {
  let routes = (
    <AuthProvider>
      <Switch>
        <PrivateRoute path={path.homePath} exact component={page.HomePage} />
        <PrivateRoute path={path.buttonPath} component={page.ButtonPage} />
        <PrivateRoute path={path.chartPath} component={page.ChartPage} />
        <PrivateRoute path={path.checkboxPath} component={page.CheckboxPage} />
        <PrivateRoute path={path.progressPath} component={page.ProgressPage} />
        <PrivateRoute path={path.radioPath} component={page.RadioPage} />
        <PrivateRoute path={path.menuPath} component={page.MenuPage} />
        <PrivateRoute path={path.cardPath} component={page.CardPage} />
        <PrivateRoute path={path.dropdownPath} component={page.DropdownPage} />
        <PrivateRoute path={path.formPath} component={page.FormPage} />
        <PrivateRoute path={path.tablePath} component={page.TablePage} />
        <AuthLayout>
          <Route path={path.signinPath} component={page.SigninPage} />
          <Route path={path.signupPath} component={page.SignupPage} />
        </AuthLayout>
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
