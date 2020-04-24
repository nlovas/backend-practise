import * as React from "react";
import Header from "../../components/Header";
import { withRouter } from "next/router";
import axios from "axios";

class User extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Header />
        this is a user page woohoo
        {this.props.username} is the user's name
      </div>
    );
  }
}

/*
Prerendering static page... We need data to populate the page.
Retrieve user profile data from the api
*/
export async function getStaticProps({ params }) {
  return new Promise((resolve, reject) => {
    axios({
      method: "get",
      url: "http://localhost:8080/user/" + params.userid,
    }).then(
      (response) => {
        console.log(response);
        var props = {
          props: {
            username: "hardcoded",
          },
        };
        resolve(props);
      },
      (error) => {
        console.log(error);
        var props = {
          props: {
            username: "errorhardcoded",
          },
        };
        resolve(props);
      }
    );
  });
}

export async function getStaticPaths() {
  //test example
  var paths = [
    {
      params: {
        userid: "niwwi",
      },
    },
    {
      params: {
        userid: "nlovas",
      },
    },
  ];

  return {
    paths,
    fallback: false,
  };
}

export default User;
