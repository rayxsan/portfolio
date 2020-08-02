import React, { Component } from "react";

import Header from "../Layout/Header/Header";
import Sidebar from "../Layout/Sidebar/Sidebar";
import Footer from "../Layout/Footer/Footer";
import Toggle from "../Layout/Sidebar/Toggle/Toggle";
import styled from "styled-components";

const Wrapper = styled.div`
  position: relative;
  min-height: 100vh;
`;

const MainContent = styled.main`
  padding-bottom: 5rem;
  width: 100%;
`;

interface State {
  showSidebar: boolean;
}

interface Props {}

class Layout extends Component<Props, State> {
  state = {
    showSidebar: true,
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
      <Wrapper>
        <Toggle clicked={this.sidebarToggleHandler} />
        <Header />
        <Sidebar show={this.state.showSidebar} />
        <MainContent
          style={{ margin: "0 0 0 12rem", display: "content-block" }}
        >
          {this.props.children}
        </MainContent>
        <Footer />
      </Wrapper>
    );
  }
}

export default Layout;
