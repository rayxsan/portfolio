import React, { Component } from "react";

import Header from "../Layout/Header/Header";
import Sidebar from "../Layout/Sidebar/Sidebar";
import Footer from "../Layout/Footer/Footer";
import { Wrapper, MainContent } from "./Layout.styled";

interface State {
  showSidebar: boolean;
}

interface Props {}

class Layout extends Component<Props, State> {
  state = {
    showSidebar: false,
  };

  sidebarToggleHandler = () => {
    this.setState((prevState) => {
      return { showSidebar: !prevState.showSidebar };
    });
  };

  render() {
    return (
      <Wrapper>
        <Header>HEADER</Header>
        <Sidebar
          show={this.state.showSidebar}
          clicked={() => this.sidebarToggleHandler()}
          // style={{ height: mainContentHeight }}
        />
        <MainContent move={this.state.showSidebar}>
          {this.props.children}
        </MainContent>
        <Footer />
      </Wrapper>
    );
  }
}

export default Layout;
