import * as React from "react";
import Header from "../../components/Header";
import { withRouter } from "next/router";
import axios from "axios";
import Head from "next/head";
import Link from "next/link";

class User extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Head>
          <title>{this.props.username}'s Page</title>
        </Head>
        <Header />
        <div>
          {this.insertAvatar()}
          <h1>{this.props.username}</h1>
          {this.insertCountry()}
          {this.insertDateJoined()}
        </div>
        <div>{this.props.description}</div>

        <div>
          <Link href="/user/editprofile">
            <button>Edit</button>
          </Link>
          <button>Follow</button>
        </div>
      </div>
    );
  }

  /*
  If the user has chosen a country, display it with a flag icon
  Otherwise, return nothing
  */
  insertCountry() {
    if (this.props.country) {
      console.log("there is a country");
      return (
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="black"
            width="18px"
            height="18px"
          >
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
            <path d="M0 0h24v24H0z" fill="none" />
          </svg>
          Test country
        </div>
      );
    } else {
      console.log("there is no country");
      return;
    }
  }

  /*
  If the user has an avatar, display it
  Otherwise, use a default 100x100px image
  */
  insertAvatar() {
    if (this.props.avatar) {
      console.log("there is an avatar", this.props.avatar);
      return (
        <div>
          <img src={`data:image/jpeg;base64,${this.props.avatar}`} />
        </div>
      );
    } else {
      console.log("there is no avatar");
      return (
        <div>
          <img src="/images/testimg.png" />
        </div>
      );
    }
  }

  /*
If the user has allowed their joining date to be displayed, return a div with that info
otherwise, return nothing
*/
  insertDateJoined() {
    if (this.props.showdatecreated) {
      var memberText = "Member since ";
      return (
        <div>
          {memberText}
          {new Intl.DateTimeFormat("en-US", {
            month: "long",
            day: "2-digit",
            year: "numeric",
          }).format(new Date(this.props.datecreated))}
        </div>
      );
    } else {
      return;
    }
  }
}

/*
Called on every request
Calls the api to get what we need to populate the page
*/
export async function getServerSideProps(context) {
  console.log(context);
  return new Promise((resolve, reject) => {
    axios({
      method: "get",
      url: "http://localhost:8080/user/profile/" + context.params.userid,
      params: {
        username: context.params.userid,
      },
    }).then(
      (response) => {
        console.log(response);
        var props = {
          props: {
            username: response.data.username,
            datecreated: response.data.datecreated,
            description: response.data.description,
            avatar: response.data.avatar,
            country: response.data.country,
            showdatecreated: response.data.showdatecreated,
          },
        };
        resolve(props);
      },
      (error) => {
        console.log(error);
        var props = {
          props: {
            username: error,
          },
        };
        resolve(error);
      }
    );
  });
}

export default User;
