import Header from "../components/Header";

import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";

const api = "http://localhost:8080";

class Signup extends React.Component {
  constructor(props) {
    super(props);
  }

  /*
  Create a new account using the validated information from the form
  Sends a post request to our backend to create a new user in the db
  */
  createNewAccount(data) {
    axios({
      method: "post",
      url: "http://localhost:8080/create-user",
      data: {
        username: data.username,
        password: data.password,
        email: data.email,
        admin: "false",
      },
    }).then(
      (response) => {
        console.log(response);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  /*
  Calls api to see if the username has already been registered
  */
  checkUsernameExistence(username) {
    console.log("formval is ", username);
    return new Promise((resolve, reject) => {
      /*
Async Validation using Yup, Formik, and React https://stackoverflow.com/a/57882753
Answered by Stack Overflow user 이석규 (https://stackoverflow.com/users/12051163/%ec%9d%b4%ec%84%9d%ea%b7%9c)
*/
      axios({
        method: "get",
        url: "http://localhost:8080/user/" + username,
        params: {
          username: username,
        },
      }).then(
        (response) => {
          console.log(response);
          if (response.data === "true") {
            //this username has been taken
            resolve(false);
          } else {
            resolve(true);
          }
        },
        (error) => {
          console.log(error);
        }
      );
    });
  }

  /*
  calls api to see if the email submitted is already registered
  */
  checkEmailAvailable(email) {
    return new Promise((resolve, reject) => {
      axios({
        method: "get",
        url: "http://localhost:8080/" + email,
        params: {
          email: email,
        },
      }).then(
        (response) => {
          console.log(response);
          if (response.data === "true") {
            //this email is already in use
            resolve(false);
          } else {
            resolve(true);
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
        <Header />
        <div>
          <div>Sign up</div>
          <Formik
            initialValues={{
              username: "",
              password: "",
              confirmPassword: "",
              email: "",
            }}
            validationSchema={Yup.object().shape({
              username: Yup.string()
                .required("Required")
                .min(3, "Username must be at least 3 characters long")
                .max(20, "Username is too long")
                .matches(
                  /^[A-Za-z0-9\-\_.]*$/,
                  "Username can only use letters, numbers, or special characters(-_.)"
                )
                //check to see if this username already exists
                .test(
                  "checkUsernameExistence",
                  "This username is not available",
                  async (value) => {
                    return this.checkUsernameExistence(value);
                  }
                ),
              password: Yup.string()
                .required("Required")
                .min(6, "Password must be at least 6 characters long")
                .max(20, "Password is too long")
                .matches(
                  /(?=(.*[0-9]))(?=.*[\!@#$%^&*\-_.])(?=.*[a-z])(?=(.*[A-Z]))(?=(.*))/,
                  "Password must contain: one or more lowercase letters, uppercase letters, a number, and a symbol(!@#$%^&*-_.)"
                ) /*
(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*\-\_])
(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*\-\_])\w+ from regexer

password
PASSWORD
123456
@@!!!@@@--@!
pass!!!!!!
password1234
PASS---WORD
123456***
PASSWORD12345
passWORD
PASSword12
passWORD!!
PASSW123RD!
password123!
should pass:
passWORD123!
pASSw@rd222

                  Passwords to test:
                  password
                  PASSWORD
                  123456
                  @@!!!@@@--@!

                  pass!!!!!!
                  password1234
                  PASS---WORD
                  123456***
                  PASSWORD12345
                  passWORD

                  PASSword12
                  passWORD!!
                  PASSW123RD!
                  password123!

                  should pass:
                  passWORD123!

                https://regexr.com/
                https://stackoverflow.com/questions/5887678/alphanumeric-dash-and-underscore-but-no-spaces-regular-expression-check-javascr
                https://www.thepolyglotdeveloper.com/2015/05/use-regex-to-test-password-strength-in-javascript/
                */,
              confirmPassword: Yup.string()
                .required("Required")
                .oneOf([Yup.ref("password"), null], "Passwords do not match"),
              email: Yup.string()
                .required("Required")
                .email("Must be a valid email"),
            })}
            onSubmit={(fields, actions) => {
              //check to see if email is already in use
              this.checkEmailAvailable(fields.email).then((isAvailable) => {
                if (isAvailable) {
                  this.createNewAccount({
                    username: fields.username,
                    password: fields.password,
                    email: fields.email,
                  });
                } else {
                  alert("this email is already in use");
                }
              });
            }}
          >
            {(props) => (
              <Form>
                <label>First, choose a unique username</label>
                <Field
                  name="username"
                  type="text"
                  className={
                    "form-control" +
                    (props.errors.username && props.touched.username
                      ? " is-invalid"
                      : "")
                  }
                />
                <ErrorMessage
                  name="username"
                  component="div"
                  className="invalid-feedback"
                />
                <label>Enter a password (must contain min. 6 characters)</label>
                <Field
                  name="password"
                  type="text"
                  className={
                    "form-control" +
                    (props.errors.password && props.touched.password
                      ? " is-invalid"
                      : "")
                  }
                />
                <ErrorMessage
                  name="password"
                  component="div"
                  className="invalid-feedback"
                />

                <label>Please confirm your password</label>
                <Field
                  name="confirmPassword"
                  type="text"
                  className={
                    "form-control" +
                    (props.errors.confirmPassword &&
                    props.touched.confirmPassword
                      ? " is-invalid"
                      : "")
                  }
                />
                <ErrorMessage
                  name="confirmPassword"
                  component="div"
                  className="invalid-feedback"
                />
                <label>Enter your email</label>
                <Field
                  name="email"
                  type="text"
                  className={
                    "form-control" +
                    (props.errors.email && props.touched.email
                      ? " is-invalid"
                      : "")
                  }
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="invalid-feedback"
                />
                <button type="submit">Register</button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    );
  }
}

export default Signup;
