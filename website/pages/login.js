import Header from "../components/Header";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import * as React from "react";
import Link from "next/link";
import Head from "next/head";

const api = "http://localhost:8080";

class Login extends React.Component {
  constructor(props) {
    super(props);
  }

  submitForm(fields, actions) {
    console.log("the form was submitted");
  }

  /*
  Check with the db to see if the username and pw match
  TODO hash the password
  */
  checkCredentials(username, password) {
    return new Promise((resolve, reject) => {
      axios({
        method: "get",
        url: "http://localhost:8080/" + username,
        params: {
          username: username,
          password: password,
        },
      }).then(
        (response) => {
          console.log(response);
          if (response.data === "true") {
            //matches, the user can log in
            resolve(true);
          } else {
            resolve(false);
          }
        },
        (error) => {
          console.log(error);
        }
      );
    });
  }

  render() {
    return (
      <div>
        <Head>
          <title>Log In</title>
        </Head>
        <Header />
        <h1>Log In</h1>
        <div>
          Not a member of the Island?
          <Link href="/signup">
            <a>Sign up</a>
          </Link>
        </div>
        <Formik
          initialValues={{
            username: "",
            password: "",
          }}
          validationSchema={Yup.object().shape({
            username: Yup.string().required("Required"),
            password: Yup.string().required("Required"),
          })}
          onSubmit={async (fields, actions) => {
            this.submitForm(fields, actions);
          }}
        >
          {(props) => (
            <Form>
              <label htmlFor="username">Username</label>
              <Field name="username" type="text" placeholder="Username" />
              <ErrorMessage name="username" component="div" />
              <label htmlFor="password">Password</label>
              <Field name="password" type="text" placeholder="Password" />
              <ErrorMessage name="password" component="div" />
              <button type="submit">Log In</button>
            </Form>
          )}
        </Formik>
      </div>
    );
  }
}

export default Login;
