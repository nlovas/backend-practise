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
              username: Yup.string().required("Required"),
              password: Yup.string()
                .required("Required")
                .min(6, "Password must be at least 6 characters long"),
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
/*
<form>
            <label>
              First, choose a unique username
              <input
                type="text"
                name="username"
                value={this.state.usernamevalue}
                onChange={this.usernameChange}
              ></input>
            </label>
            <label>
              Enter a password (must contain min. 6 characters)
              <input
                type="text"
                name="password"
                value={this.state.pwvalue}
                onChange={this.pwChange}
              ></input>
            </label>
            <label>
              Enter your email
              <input
                type="text"
                name="email"
                value={this.state.emailvalue}
                onChange={this.emailChange}
              ></input>
            </label>
            <input type="submit" value="Submit"></input>
          </form>




           <form onSubmit={formik.handleSubmit}>
            <label>
              First, choose a unique username
              <input
                type="text"
                name="username"
                value={formik.values.username}
                onChange={formik.handleChange}
              ></input>
            </label>
            <label>
              Enter a password (must contain min. 6 characters)
              <input
                type="text"
                name="password"
                value={formik.values.password}
                onChange={formik.handleChange}
              ></input>
            </label>
            <label>
              Enter your email
              <input
                type="text"
                name="email"
                value={formik.values.email}
                onChange={formik.handleChange}
              ></input>
            </label>
            <input type="submit"></input>
          </form>
*/
