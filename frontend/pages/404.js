import * as React from "react";
import Head from "next/head";

class Custom404 extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Head>
          <title>Page Not Found</title>
        </Head>
        <h1>Uh-oh! Page Not Found</h1>
        <h2>
          Looks like the page you were looking for does not exist, or is no
          longer available.
        </h2>
      </div>
    );
  }
}

export default Custom404;
