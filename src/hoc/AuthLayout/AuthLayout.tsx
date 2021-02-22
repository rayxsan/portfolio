import React from "react";

interface props {}

const AuthLayout: React.FC<props> = (props) => (
  <div>
    <h1>Auth</h1>
    {props.children}
  </div>
);

export default AuthLayout;
