import React, { Component } from "react";

import Header from "../Layout/Header/Header";
import Sidebar from "../Layout/Sidebar/Sidebar";
import Footer from "../Layout/Footer/Footer";
import Toggle from "../Layout/Sidebar/Toggle/Toggle";
import { Wrapper, MainContent } from "./Layout.styled";
import Checkbox from "../../Components/Checkbox/Checkbox";

interface State {
  showSidebar: boolean;
}

interface Props {}

class Layout extends Component<Props, State> {
  state = {
    showSidebar: true,
  };

  // componentDidMount() {
  //   const mainContentHeight = document.getElementById("mainContent")
  //     ?.clientHeight;
  //   console.log(mainContentHeight);
  // }

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

    const mainContentHeight = document.getElementById("MainContent")
      ?.clientHeight;

    return (
      <Wrapper>
        <Toggle clicked={this.sidebarToggleHandler} />
        <Header />
        <Sidebar
          show={this.state.showSidebar}
          style={{ height: mainContentHeight }}
        />
        <MainContent style={toggle}>{this.props.children}</MainContent>
        <Footer style={toggle} />
      </Wrapper>
    );
  }
}

export default Layout;
