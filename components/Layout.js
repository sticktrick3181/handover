import React from "react";

const Layout = (props) => {
  return (
    <div>
      <h1>I am a Header.</h1>
      {props.children}
      <h1>I am a footer</h1>
    </div>
  );
};
export default Layout;
