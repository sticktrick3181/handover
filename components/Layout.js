import React from "react";
import Header from "../components/Header";
import Head from "next/head";

import { Container } from "semantic-ui-react";
const Layout = (props) => {
  return (
    <div>
      <Head>
        <link
          async
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/semantic-ui@2/dist/semantic.min.css"
        />
      </Head>

      <Header />
      <Container>{props.children}</Container>
    </div>
  );
};
export default Layout;
