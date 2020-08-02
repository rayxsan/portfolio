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
  padding-bottom: ${({ theme }) => theme.footerHeight};
  width: 100%;
  transition: transform 0.3s ease-in-out;
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
    let toggle: React.CSSProperties | undefined;

    if (this.state.showSidebar) {
      toggle = {
        transform: "translateX(12rem)",
        width: "calc(100% - 12rem)",
      };
    }

    return (
      <Wrapper>
        <Toggle clicked={this.sidebarToggleHandler} />
        <Header />
        <Sidebar show={this.state.showSidebar} />
        <MainContent style={toggle}>{this.props.children}</MainContent>
        <Footer style={toggle} />
      </Wrapper>
    );
  }
}

export default Layout;
