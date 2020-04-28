import * as React from "react";
import Header from "../components/Header";
import { withRouter } from "next/router";
import axios from "axios";
import Head from "next/head";

class Upload extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Head>
          <title>Post a Cosplay</title>
        </Head>
        <Header />
        <h1>Post a Cosplay</h1>
      </div>
    );
  }
}

export default Upload;
