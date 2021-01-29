import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledNFPage = styled.div`
  text-align: center;
  p:first-child {
    font-size: 300%;
    font-weight: bold;
    margin-top: 10rem;
  }
`;

const NotFoundPage = () => (
  <StyledNFPage>
    <p>PAGE NOT FOUND</p>
    <p>Site under development...</p>
    <p>
      <Link to="/">Go to Home </Link>
    </p>
  </StyledNFPage>
);
export default NotFoundPage;
