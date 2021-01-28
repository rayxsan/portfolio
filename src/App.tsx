import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Layout from "./hoc/Layout/Layout";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./shared/Global";
import { theme } from "./shared/Theme";
import {
  HomePage,
  ButtonPage,
  CheckboxPage,
  ProgressPage,
  RadioPage,
  MenuPage,
  CardPage,
  DropdownPage,
  FormPage,
  TablePage,
  NotFoundPage,
} from "./Pages";

interface OwnProps {}
interface StateProps {}
type Props = OwnProps & StateProps;

interface State {}
class App extends Component<Props, State> {
  render() {
    let routes = (
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/components/buttons" component={ButtonPage} />
        <Route path="/components/checkbox" component={CheckboxPage} />
        <Route path="/components/progress" component={ProgressPage} />
        <Route path="/components/radio" component={RadioPage} />
        <Route path="/components/menu" component={MenuPage} />
        <Route path="/components/card" component={CardPage} />
        <Route path="/components/dropdown" component={DropdownPage} />
        <Route path="/components/form" component={FormPage} />
        <Route path="/components/table" component={TablePage} />
        <Route path="*" component={NotFoundPage} />
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
