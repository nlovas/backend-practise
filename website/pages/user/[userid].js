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
          <div>put avatar here</div>
          <h1>{this.props.username}</h1>
          <div>{this.props.country}</div>
          <div>
            Member since
            {new Intl.DateTimeFormat("en-US", {
              month: "long",
              day: "2-digit",
              year: "numeric",
            }).format(new Date(this.props.datecreated))}
          </div>
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
