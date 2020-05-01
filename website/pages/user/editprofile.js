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

  submitForm(fields, actions) {
    console.log("the form was submitted");
  }

  render() {
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
            password: "",
            country: "",
            avatar: "",
            description: "",
            displaydatejoined: "",
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
              <div>
                <label htmlFor="username">
                  Change Username (
                  <strong>You may only change your username 3 times</strong>)
                </label>
                <Field name="username" placeholder="Username" />
                <ErrorMessage name="username" component="div" />
                <div>You have changed your username _ times</div>
                <label htmlFor="password">Change Password</label>
                <Field name="password" placeholder="Password" />
                <ErrorMessage name="password" component="div" />
              </div>
              <div>
                <label htmlFor="avatar">Upload an Avatar</label>
                <Field name="avatar" type="file" />
                <ErrorMessage name="avatar" component="div" />
                <label htmlFor="description">Description</label>
                <Field
                  name="description"
                  as="textarea"
                  placeholder="Introduce yourself..."
                />
                <ErrorMessage name="description" component="div" />
                <label htmlFor="location">Location</label>
                <Field name="location" placeholder="Eg) Canada, Florida" />
                <ErrorMessage name="location" component="div" />
                <label htmlFor="showdate">
                  Display Date of Account Creation
                </label>
                <Field name="showdate" type="checkbox" />
                <ErrorMessage name="showdate" component="div" />
              </div>
              <button type="submit">Finish</button>
            </Form>
          )}
        </Formik>
      </div>
    );
  }
}

export default EditProfile;
