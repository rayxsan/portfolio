import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Layout from "./hoc/Layout/Layout";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./shared/Global";
import { theme } from "./shared/Theme";
import * as path from "./shared/Routes";
import * as page from "./Pages";

interface OwnProps {}
interface StateProps {}
type Props = OwnProps & StateProps;

interface State {}
class App extends Component<Props, State> {
  render() {
    let routes = (
      <Switch>
        <Route
          name="Home"
          path={path.homePath}
          exact
          component={page.HomePage}
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
        <Route path="*" exact component={page.NotFoundPage} />
        <Redirect to="/" />
      </Switch>
    );

    return (
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Layout>{routes}</Layout>
      </ThemeProvider>
    );
  }
}

export default App;
