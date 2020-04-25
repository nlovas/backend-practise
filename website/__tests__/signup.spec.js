import * as React from "react";
import { mount } from "enzyme";
import { render, fireEvent, waitFor } from "@testing-library/react";
import SignupPage from "../pages/signup";

/*
As signup uses Formik, I am using the Testing-Library to test it

Lookit:
https://dev.to/charlespeters/formik-react-testing-library-and-screaming-at-a-computer-for-an-hour-5h5f
https://hackernoon.com/react-forms-with-formik-and-unit-testing-with-react-testing-library-j0b32c9
https://github.com/jaredpalmer/formik/issues/937#issuecomment-517173669
https://duncanleung.com/testing-formik-form-onsubmit/
*/

//describe("Pages", () => {
describe("SignupPage", () => {
  /*it("should render without throwing an error", ()=> {
      const wrap = mount(<SignupPage />);
      expect(wrap.find("button").text()).toBe("Register");
    });*/

  it("should accept these as correct inputs", async () => {
    const mock = jest.fn();
    const { getByPlaceholderText, getByText } = await render(
      <SignupPage submitForm={mock} />
    );

    const username = // await waitFor(() => {
      // container.querySelector('input[name="username"]');
      getByPlaceholderText("Enter a username");
    //});
    const p1 = // await waitFor(() => {
      //  container.querySelector('input[name="password"]');
      getByPlaceholderText("Create a password");
    //});
    const p2 = // await waitFor(() => {
      //container.querySelector('input[name="confirmPassword"]');
      getByPlaceholderText("Confirm password");
    //});
    const email = // await waitFor(() => {
      // container.querySelector('input[name="email"]');
      getByPlaceholderText("Enter an email");
    //});
    const submit = //await waitFor(() => {
      // container.querySelector('button[type="submit"]');
      getByText("Register");
    //});

    fireEvent.change(username, {
      target: {
        value: "mockname",
      },
    });

    fireEvent.change(p1, {
      target: {
        value: "Abc123!",
      },
    });
    fireEvent.change(p2, {
      target: {
        value: "Abc123!",
      },
    });

    fireEvent.change(email, {
      target: {
        value: "email@email.ca",
      },
    });

    fireEvent.click(submit);

    await waitFor(() => {
      expect(mock).toHaveBeenCalledTimes(1);
    });
  });
});
//});

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
