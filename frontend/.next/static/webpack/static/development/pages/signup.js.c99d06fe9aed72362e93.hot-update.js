webpackHotUpdate("static\\development\\pages\\signup.js",{

/***/ "./pages/signup.js":
/*!*************************!*\
  !*** ./pages/signup.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Header */ "./components/Header.js");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! yup */ "./node_modules/yup/es/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_12__);







function _createSuper(Derived) { return function () { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }








var api = "http://localhost:8080";

var Signup = /*#__PURE__*/function (_React$Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(Signup, _React$Component);

  var _super = _createSuper(Signup);

  function Signup(props) {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, Signup);

    return _super.call(this, props);
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(Signup, [{
    key: "submitForm",
    value: function submitForm(fields, actions) {
      var _this = this;

      //check to see if username and email already in use
      this.checkUsernameAndEmail(fields.username, fields.email, actions).then(function (bothValid) {
        if (bothValid) {
          console.log("both were valid. creating new account");

          _this.createNewAccount({
            username: fields.username,
            password: fields.password,
            email: fields.email
          }).then(function (result) {
            console.log("result was ", result);

            if (result.status === 200) {
              //  Router.push("/about");
              console.log("account creation successful");
            } else {//TODO: show the user an error message
            }
          });
        }
      });
    }
    /*
    Create a new account using the validated information from the form
    Sends a post request to our backend to create a new user in the db
    */

  }, {
    key: "createNewAccount",
    value: function createNewAccount(data) {
      return new Promise(function (resolve, reject) {
        axios__WEBPACK_IMPORTED_MODULE_9___default()({
          method: "post",
          url: "http://localhost:8080/create-user",
          data: {
            username: data.username,
            password: data.password,
            email: data.email,
            admin: "false"
          }
        }).then(function (response) {
          console.log(response);
          resolve(response);
        }, function (error) {
          console.log(error);
          resolve(error);
        });
      });
    }
    /*
    Check existence of both username and email and only return true if both are not already in use
    NOTE: There is a known bug with Yup's .test calling every time any field is blurred
    This would mean a TON of unneeded calls to the api
    Since there were no workarounds that worked for me, I changed mine to
    check on submit instead of onBlur :'(
    Follow the issue here https://github.com/jaredpalmer/formik/issues/512            
    */

  }, {
    key: "checkUsernameAndEmail",
    value: function checkUsernameAndEmail(username, email, actions) {
      var _this2 = this;

      return new Promise(function (resolve, reject) {
        var p1 = _this2.checkUsernameExistence(username);

        var p2 = _this2.checkEmailAvailable(email);

        Promise.all([p1, p2]).then(function (values) {
          //both should have returned true in order to create account
          console.log(values);

          if (values[0] === false) {
            //username is already in use, show an error to the user
            actions.setFieldError("username", "This username is already in use");
            resolve(false);
          }

          if (values[1] === false) {
            //email is already in use, show an error to the user
            actions.setFieldError("email", "This email is already in use");
            resolve(false);
          }

          if (values[0] === true && values[1] === true) {
            //both username and email are not taken
            resolve(true);
          }
        });
      });
    }
    /*
    Calls api to see if the username has already been registered
    */

  }, {
    key: "checkUsernameExistence",
    value: function checkUsernameExistence(username) {
      console.log("formval is ", username);
      return new Promise(function (resolve, reject) {
        /*
        Async Validation using Yup, Formik, and React https://stackoverflow.com/a/57882753
        Answered by Stack Overflow user 이석규 (https://stackoverflow.com/users/12051163/%ec%9d%b4%ec%84%9d%ea%b7%9c)
        */
        axios__WEBPACK_IMPORTED_MODULE_9___default()({
          method: "get",
          url: "http://localhost:8080/user/" + username,
          params: {
            username: username
          }
        }).then(function (response) {
          console.log(response);

          if (response.data === "true") {
            //this username has been taken
            resolve(false);
          } else {
            resolve(true);
          }
        }, function (error) {
          console.log(error);
        });
      });
    }
    /*
    calls api to see if the email submitted is already registered
    */

  }, {
    key: "checkEmailAvailable",
    value: function checkEmailAvailable(email) {
      return new Promise(function (resolve, reject) {
        axios__WEBPACK_IMPORTED_MODULE_9___default()({
          method: "get",
          url: "http://localhost:8080/" + email,
          params: {
            email: email
          }
        }).then(function (response) {
          console.log(response);

          if (response.data === "true") {
            //this email is already in use
            resolve(false);
          } else {
            resolve(true);
          }
        }, function (error) {
          console.log(error);
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10__["createElement"]("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10__["createElement"](next_head__WEBPACK_IMPORTED_MODULE_12___default.a, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10__["createElement"]("title", null, "Sign Up")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10__["createElement"](_components_Header__WEBPACK_IMPORTED_MODULE_6__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10__["createElement"]("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10__["createElement"]("h1", null, "Sign up"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10__["createElement"](formik__WEBPACK_IMPORTED_MODULE_7__["Formik"], {
        initialValues: {
          username: "",
          password: "",
          confirmPassword: "",
          email: ""
        },
        validationSchema: yup__WEBPACK_IMPORTED_MODULE_8__["object"]().shape({
          username: yup__WEBPACK_IMPORTED_MODULE_8__["string"]().required("Required").min(3, "Username must be at least 3 characters long").max(20, "Username is too long").matches(/^[A-Za-z0-9\-\_.]*$/, "Username can only use letters, numbers, or special characters(-_.)"),
          password: yup__WEBPACK_IMPORTED_MODULE_8__["string"]().required("Required").min(6, "Password must be at least 6 characters long").max(20, "Password is too long").matches(/(?=(.*[0-9]))(?=.*[\!@#$%^&*\-_.])(?=.*[a-z])(?=(.*[A-Z]))(?=(.*))/, "Password must contain: one or more lowercase letters, uppercase letters, a number, and a symbol(!@#$%^&*-_.)"),
          confirmPassword: yup__WEBPACK_IMPORTED_MODULE_8__["string"]().required("Required").oneOf([yup__WEBPACK_IMPORTED_MODULE_8__["ref"]("password"), null], "Passwords do not match"),
          email: yup__WEBPACK_IMPORTED_MODULE_8__["string"]().required("Required").email("Must be a valid email")
        }),
        onSubmit: function _callee(fields, actions) {
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _this3.submitForm(fields, actions);

                case 1:
                case "end":
                  return _context.stop();
              }
            }
          }, null, null, null, Promise);
        }
      }, function (props) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10__["createElement"](formik__WEBPACK_IMPORTED_MODULE_7__["Form"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10__["createElement"]("label", {
          htmlFor: "username"
        }, "First, choose a unique username"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10__["createElement"](formik__WEBPACK_IMPORTED_MODULE_7__["Field"], {
          name: "username",
          type: "text",
          placeholder: "Enter a username",
          className: "form-control" + (props.errors.username && props.touched.username ? " is-invalid" : "")
        }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10__["createElement"](formik__WEBPACK_IMPORTED_MODULE_7__["ErrorMessage"], {
          name: "username",
          component: "div",
          className: "invalid-feedback"
        }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10__["createElement"]("label", {
          htmlFor: "password"
        }, "Enter a password (must contain min. 6 characters)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10__["createElement"](formik__WEBPACK_IMPORTED_MODULE_7__["Field"], {
          name: "password",
          type: "text",
          placeholder: "Create a password",
          className: "form-control" + (props.errors.password && props.touched.password ? " is-invalid" : "")
        }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10__["createElement"](formik__WEBPACK_IMPORTED_MODULE_7__["ErrorMessage"], {
          name: "password",
          component: "div",
          className: "invalid-feedback"
        }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10__["createElement"]("label", {
          htmlFor: "confirmPassword"
        }, "Please confirm your password"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10__["createElement"](formik__WEBPACK_IMPORTED_MODULE_7__["Field"], {
          name: "confirmPassword",
          type: "text",
          placeholder: "Confirm password",
          className: "form-control" + (props.errors.confirmPassword && props.touched.confirmPassword ? " is-invalid" : "")
        }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10__["createElement"](formik__WEBPACK_IMPORTED_MODULE_7__["ErrorMessage"], {
          name: "confirmPassword",
          component: "div",
          className: "invalid-feedback"
        }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10__["createElement"]("label", {
          htmlFor: "email"
        }, "Enter your email"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10__["createElement"](formik__WEBPACK_IMPORTED_MODULE_7__["Field"], {
          name: "email",
          type: "text",
          placeholder: "Enter an email",
          className: "form-control" + (props.errors.email && props.touched.email ? " is-invalid" : "")
        }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10__["createElement"](formik__WEBPACK_IMPORTED_MODULE_7__["ErrorMessage"], {
          name: "email",
          component: "div",
          className: "invalid-feedback"
        }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10__["createElement"]("button", {
          type: "submit"
        }, "Register"));
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10__["createElement"]("div", null, "Password hashing and encryption have not yet been implemented. Please don't use a real password at this time. (This div will act as a TODO and can't be removed until it's been done!)")));
    }
  }]);

  return Signup;
}(react__WEBPACK_IMPORTED_MODULE_10__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Signup);

/***/ })

})
//# sourceMappingURL=signup.js.c99d06fe9aed72362e93.hot-update.js.map