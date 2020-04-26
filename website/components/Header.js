import * as React from "react";
import Link from "next/link";

class Header extends React.Component {
  //constructor(){}
  render() {
    return (
      <div>
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/about">
          <a>About</a>
        </Link>
        <Link href="/signup">
          <a>Sign up</a>
        </Link>
        <Link href="/login">
          <a>Log In</a>
        </Link>
      </div>
    );
  }
}
export default Header;
