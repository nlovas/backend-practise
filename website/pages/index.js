import * as React from "react";
import Header from "../components/Header";
import Link from "next/link";
import Head from "next/head";

class Index extends React.Component {
  //constructor(){}
  render() {
    return (
      <div>
        <Head>
          <title>Isle of Cosplay</title>
        </Head>
        <Header />
        <h1>Welcome to the Island!</h1>
        <div>
          <Link href="/user/[userid]" as="/user/niwwio">
            <a>Niwwio is a test user</a>
          </Link>
          <div>
            Welcome to Isle of Cosplay! A community* of cosplayers sharing their
            work and crafting secrets.
          </div>
          <div>
            *This is a website created in order to practise back-end
            development. But I am working on it as if it were the real deal c:
          </div>
        </div>
        <div>
          <h2>News</h2>
          <div>This is where the admin news posts will eventually go.</div>
        </div>
      </div>
    );
  }
}

export default Index;
