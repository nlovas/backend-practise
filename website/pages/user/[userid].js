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

  /*
  If the user has written a location, show it with the location icon
  Otherwise, return nothing
  */
  insertLocation() {
    if (this.props.location) {
      console.log("there is a location");
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
          Test location
        </div>
      );
    } else {
      console.log("there is no location");
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
          {this.insertLocation()}
          {this.insertDateJoined()}
        </div>
        <div>{this.props.description}</div>

        <div>
          <Link
            href={{
              pathname: "/user/editprofile",
              query: {
                userid: this.props.userid,
                /*  username: this.props.username,
                description: this.props.description,
                avatar: this.props.avatar,
                location: this.props.location,
                showdatecreated: this.props.showdatecreated,
                namechanges: this.props.namechanges,
                email: this.props.email,*/
              },
            }}
            as={"/user/editprofile"}
          >
            <button>Edit</button>
          </Link>
          <button>Follow</button>
        </div>
      </div>
    );
  }
}

/*
Called on every request
Calls the api to get what we need to populate the page
*/
export async function getServerSideProps(context) {
  return new Promise((resolve, reject) => {
    axios({
      method: "get",
      url: "http://localhost:8080/user/profile/" + context.params.userid,
      params: {
        username: context.params.userid,
      },
    }).then(
      (response) => {
        console.log(response.data);
        var props = {
          props: {
            userid: context.params.userid,
            username: response.data.username,
            datecreated: response.data.datecreated,
            description: response.data.description,
            avatar: response.data.avatar,
            location: response.data.location,
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
