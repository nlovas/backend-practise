import * as React from "react";
import Header from "../../components/Header";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { withRouter } from "next/router";
import axios from "axios";
import Head from "next/head";

class EditProfile extends React.Component {
  constructor(props) {
    super(props);
  }

  /* static async getInitialProps(ctx) {
    console.log("query?", ctx.query);
    //var parsed = JSON.parse(ctx.query);
    console.log("typeof query ", typeof ctx.query);
    console.log(
      "is showdatecreated a boolean? ",
      typeof ctx.query.showdatecreated === "boolean"
    );
    return {
      username: ctx.query.username,
      avatar: ctx.query.avatar,
      location: ctx.query.location,
      description: ctx.query.description,
      showdatecreated: ctx.query.showdatecreated,
      namechanges: ctx.query.namechanges,
      email: ctx.query.email,
    };
  }*/

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

  submitForm(fields, actions) {
    console.log("the form was submitted");
    console.log(this.props.showdatecreated);
    console.log(
      this.props.showdatecreated == true,
      this.props.showdatecreated === true
    );
  }

  render() {
    console.log(this.props);
    return (
      <div>
        <Head>
          <title>Edit Profile</title>
        </Head>
        <Header />
        <h1>Edit Profile</h1>
        <Formik
          initialValues={{
            username: "",
            newPassword: "",
            currentPassword: "",
            email: "",
            location: "",
            avatar: "",
            description: "",
            displaydatejoined: "",
          }}
          validationSchema={Yup.object().shape({
            // username: Yup.string().required("Required"),
            // password: Yup.string().required("Required"),
          })}
          onSubmit={async (fields, actions) => {
            this.submitForm(fields, actions);
          }}
        >
          {(props) => (
            <Form>
              <div>
                {this.insertAvatar()}
                <label htmlFor="avatar">Upload an Avatar</label>
                <Field name="avatar" type="file" />
                <ErrorMessage name="avatar" component="div" />
                <label htmlFor="description">Description</label>
                <Field
                  name="description"
                  as="textarea"
                  value={this.props.description}
                  placeholder="Introduce yourself..."
                />
                <ErrorMessage name="description" component="div" />
                <label htmlFor="location">Location</label>
                <Field
                  name="location"
                  value={this.props.location}
                  placeholder="Eg) Canada, Florida"
                />
                <ErrorMessage name="location" component="div" />
                <label htmlFor="showdate">
                  Display Date of Account Creation
                </label>
                <Field
                  name="showdate"
                  value="showdate"
                  type="checkbox"
                  checked={this.props.showdatecreated}
                />
                <ErrorMessage name="showdate" component="div" />
              </div>
              <div>
                <label htmlFor="username">
                  Change Username (
                  <strong>You may only change your username 3 times</strong>)
                </label>
                <Field name="username" value={this.props.username} />
                <ErrorMessage name="username" component="div" />
                <div>
                  You have changed your username {this.props.namechanges} times
                </div>
                Change Password
                <label htmlFor="newPassword">New Password</label>
                <Field name="newPassword" placeholder="New Password" />
                <ErrorMessage name="newPassword" component="div" />
                <label htmlFor="currentPassword">Current Password</label>
                <Field name="currentPassword" placeholder="Current Password" />
                <ErrorMessage name="currentPassword" component="div" />
                <label htmlFor="email">Change Email</label>
                <Field name="email" value={this.props.email} />
                <ErrorMessage name="email" component="div" />
              </div>
              <button type="submit">Finish</button>
            </Form>
          )}
        </Formik>
      </div>
    );
  }
}

/*
Called on every request
Calls the api to get what we need to populate the page
TODO: do this without using query, once weve implemented using cookies later. For now this will allow editing of anyone's profile
*/
export async function getServerSideProps(context) {
  // console.log("QUERY:", context.query);
  return new Promise((resolve, reject) => {
    axios({
      method: "get",
      url: "http://localhost:8080/user/editprofile/" + context.query.userid,
      params: {
        username: context.query.userid,
      },
    }).then(
      (response) => {
        console.log(response.data);
        console.log(
          "is showdatecreated a boolean? ",
          typeof response.data.showdatecreated === "boolean"
        );
        var props = {
          props: {
            username: response.data.username,
            datecreated: response.data.datecreated,
            description: response.data.description,
            avatar: response.data.avatar,
            location: response.data.location,
            showdatecreated: response.data.showdatecreated,
            namechanges: response.data.namechanges,
            email: response.data.email,
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
export default EditProfile;
