import React, { Component } from "react";
import Header from "../Layout/Header/Header";
import Footer from "./Footer/Footer";
import Sidebar from "../Layout/Sidebar/Sidebar";
import { Wrapper, MainContent } from "./Layout.styled";
import Breadcrumb from "../../Components/UI/Breadcrumb/BreadCrumb";

interface State {
  showSidebar: boolean;
}

interface Props {}

class Layout extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      showSidebar: false,
    };
  }

  componentDidMount() {
    window.addEventListener("resize", this.resizeScreen.bind(this));
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.resizeScreen.bind(this));
  }
  resizeScreen() {
    this.setState({ showSidebar: window.innerWidth < 760 });
  }

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
        />
        <Wrapper expand={!this.state.showSidebar}>
          <Header
            clicked={() => this.sidebarToggleHandler()}
            expand={this.state.showSidebar}
          />
          <div className="breadcrumb">
            <Breadcrumb />
          </div>
          <MainContent>{this.props.children}</MainContent>
          <Footer />
        </Wrapper>
      </>
    );
  }
}

export default Layout;
