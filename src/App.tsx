import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Layout from "./hoc/Layout/Layout";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./shared/Global";
import { theme } from "./shared/Theme";
import Dummy from "./Components/Dummy/Dummy";
import Button from "./Components/Button/Button";

interface OwnProps {}
interface StateProps {}
type Props = OwnProps & StateProps;

interface State {}
class App extends Component<Props, State> {
  render() {
    let routes = (
      <Switch>
        <Route path="/components/buttons" component={Button} />
        <Route path="/" exact component={Dummy} />
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
