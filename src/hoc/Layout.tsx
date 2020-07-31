import React, { Component } from "react";

import Header from "../Layout/Header/Header";
import Sidebar from "../Layout/Sidebar/Sidebar";
import Footer from "../Layout/Footer/Footer";
import Toggle from "../Layout/Toggle";
import styled from "styled-components";

const ContentBox = styled.div`
  height: calc(100vh - 30px);
  width: 100%;
`;

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

  sidebarClosedHandler = () => {
    this.setState({ showSidebar: false });
  };

  render() {
    return (
      <React.Fragment>
        <Toggle clicked={this.sidebarToggleHandler} />
        <Header />
        <Sidebar show={this.state.showSidebar} />

        <ContentBox>
          <div>Page Content</div>
          <div>Page Content</div>
          <div>Page Content</div>
          <div>Page Content</div>
          <div>Page Content</div>
        </ContentBox>
        {/* <Footer /> */}
      </React.Fragment>
    );
  }
}

export default Layout;
