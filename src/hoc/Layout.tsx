import React, { FunctionComponent, useState } from "react";

import Header from "../Layout/Header/Header";
import Sidebar from "../Layout/Sidebar/Sidebar";
import Footer from "../Layout/Footer/Footer";
import Toggle from "../Layout/Toggle";
import styled from "styled-components";

const ContentBox = styled.div`
  height: calc(100vh - 30px);
  width: 100%;
`;

const Layout = () => {
  const [open, setOpen] = useState(false);

  return (
    <React.Fragment>
      <Toggle />
      <Header />
      <Sidebar />
      <ContentBox>
        <div>Page Content</div>
        <div>Page Content</div>
        <div>Page Content</div>
      </ContentBox>
      {/* <Footer /> */}
    </React.Fragment>
  );
};

export default Layout;
