import Header from "../components/Header";

import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

class Signup extends React.Component {
  constructor(props) {
    super(props);
    // this.state = { usernamevalue: "", pwvalue: "", emailvalue: "" };

    /*this.usernameChange = this.usernameChange.bind(this);
    this.pwChange = this.pwChange.bind(this);
    this.emailChange = this.emailChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);*/
  }

  /* usernameChange(event) {
    this.setState({ usernamevalue: event.target.value });
  }

  pwChange(event) {
    this.setState({ pwvalue: event.target.value });
  }

  emailChange(event) {
    this.setState({ emailvalue: event.target.value });
  }

  handleSubmit(event) {
    alert("successfully submitted" + this.state.value);
    event.preventDefault();
  }*/

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
              email: ""
            }}
            validationSchema={Yup.object().shape({
              username: Yup.string()
                .required("Required")
                .min(3, "Username must be at least 3 characters long")
                .max(20, "Username is too long")
                .matches(
                  /^[A-Za-z0-9\-\_.]*$/,
                  "Username can only use letters, numbers, or special characters(-_.)"
                ),
              password: Yup.string()
                .required("Required")
                .min(6, "Password must be at least 6 characters long")
                .max(20, "Password is too long")
                .matches(
                  /(?=(.*[0-9]))(?=.*[\!@#$%^&*\-_.])(?=.*[a-z])(?=(.*[A-Z]))(?=(.*))/,
                  "Password must contain: one or more lowercase letters, uppercase letters, a number, and a symbol(!@#$%^&*-_.) with no spaces"
                ),
              /*
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
                */
              confirmPassword: Yup.string()
                .required("Required")
                .oneOf([Yup.ref("password"), null], "Passwords do not match"),
              email: Yup.string()
                .required("Required")
                .email("Must be a valid email")
            })}
            onSubmit={fields => {
              alert("SUCCESS!! :-)\n\n" + JSON.stringify(fields, null, 4));
            }}
            render={({ errors, status, touched }) => (
              <Form>
                <label>First, choose a unique username</label>
                <Field
                  name="username"
                  type="text"
                  className={
                    "form-control" +
                    (errors.username && touched.username ? " is-invalid" : "")
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
                    (errors.password && touched.password ? " is-invalid" : "")
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
                    (errors.confirmPassword && touched.confirmPassword
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
                    (errors.email && touched.email ? " is-invalid" : "")
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
          />
        </div>
      </div>
    );
  }
}

export default Signup;
