import React, { Component } from "react";
import Header from "../Layout/Header/Header";
import Footer from "./Footer/Footer";
import Sidebar from "../Layout/Sidebar/Sidebar";
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
      <>
        <Sidebar
          show={this.state.showSidebar}
          clicked={() => this.sidebarToggleHandler()}
          // style={{ height: mainContentHeight }}
        />
        <Wrapper>
          <Header>HEADER</Header>
          <MainContent move={this.state.showSidebar}>
            {this.props.children}
          </MainContent>
          <Footer>FOOTER</Footer>
        </Wrapper>
      </>
    );
  }
}

export default Layout;
