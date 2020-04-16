webpackHotUpdate("static\\development\\pages\\signup.js",{

/***/ "./pages/signup.js":
/*!*************************!*\
  !*** ./pages/signup.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Header */ "./components/Header.js");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! yup */ "./node_modules/yup/es/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_9__);





var _jsxFileName = "C:\\Users\\User\\Documents\\backend-practise\\frontend\\pages\\signup.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;

function _createSuper(Derived) { return function () { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }





var api = "http://localhost:8080";

var Signup = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Signup, _React$Component);

  var _super = _createSuper(Signup);

  function Signup(props) {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Signup);

    return _super.call(this, props);
  }
  /*  onInputBlur(event, field) {
    console.log("username had an input blur", event, field);
    // handleBlur(event);
    //validateField(field);
  }
  */

  /*
  Create a new account using the validated information from the form
  Sends a post request to our backend to create a new user in the db
  */


  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Signup, [{
    key: "createNewAccount",
    value: function createNewAccount(data) {
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
      }, function (error) {
        console.log(error);
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
      var _this = this;

      return __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108,
          columnNumber: 7
        }
      }, __jsx(_components_Header__WEBPACK_IMPORTED_MODULE_6__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 109,
          columnNumber: 9
        }
      }), __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110,
          columnNumber: 9
        }
      }, __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 111,
          columnNumber: 11
        }
      }, "Sign up"), __jsx(formik__WEBPACK_IMPORTED_MODULE_7__["Formik"], {
        initialValues: {
          username: "",
          password: "",
          confirmPassword: "",
          email: ""
        },
        validateOnBlur: false,
        validateOnChange: false,
        validationSchema: yup__WEBPACK_IMPORTED_MODULE_8__["object"]().shape({
          username: yup__WEBPACK_IMPORTED_MODULE_8__["string"]().required("Required").min(3, "Username must be at least 3 characters long").max(20, "Username is too long").matches(/^[A-Za-z0-9\-\_.]*$/, "Username can only use letters, numbers, or special characters(-_.)"),
          //check to see if this username already exists

          /*
            NOTE: There is a known bug with Yup's .test calling every time a field is blurred
            This means a TON of unneeded calls to the api
            Follow the issue here https://github.com/jaredpalmer/formik/issues/512
            going to try a workaround
            */

          /* .test(
              "checkUsernameExistence",
              "This username is not available",
              async (value) => {
                return this.checkUsernameExistence(value);
              }
            ),*/
          password: yup__WEBPACK_IMPORTED_MODULE_8__["string"]().required("Required").min(6, "Password must be at least 6 characters long").max(20, "Password is too long").matches(/(?=(.*[0-9]))(?=.*[\!@#$%^&*\-_.])(?=.*[a-z])(?=(.*[A-Z]))(?=(.*))/, "Password must contain: one or more lowercase letters, uppercase letters, a number, and a symbol(!@#$%^&*-_.)")
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
          ,
          confirmPassword: yup__WEBPACK_IMPORTED_MODULE_8__["string"]().required("Required").oneOf([yup__WEBPACK_IMPORTED_MODULE_8__["ref"]("password"), null], "Passwords do not match"),
          email: yup__WEBPACK_IMPORTED_MODULE_8__["string"]().required("Required").email("Must be a valid email")
        }),
        onSubmit: function onSubmit(fields, actions) {
          //check to see if email is already in use
          _this.checkEmailAvailable(fields.email).then(function (isAvailable) {
            if (isAvailable) {
              _this.createNewAccount({
                username: fields.username,
                password: fields.password,
                email: fields.email
              });
            } else {
              actions.setFieldError("email", "This email is already in use");
            }
          });
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 112,
          columnNumber: 11
        }
      }, function (props) {
        return __jsx(formik__WEBPACK_IMPORTED_MODULE_7__["Form"], {
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 224,
            columnNumber: 15
          }
        }, __jsx("label", {
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 225,
            columnNumber: 17
          }
        }, "First, choose a unique username"), __jsx(formik__WEBPACK_IMPORTED_MODULE_7__["Field"], {
          name: "username",
          type: "text",
          onBlur: function onBlur(event) {
            console.log("anything?", props);
            props.handleBlur(event); //sets state

            props.validateField("username").then(function () {
              console.log("props now?", props.errors.username);
            }); //calls our validation functions
            //next, check api for username availability

            if (!props.errors.username) {
              console.log("errors?", props.errors.username);

              _this.checkUsernameExistence(event.target.value).then(function (result) {
                if (!result) {
                  actions.setFieldError("username", "This username is already in use");
                }
              });
            }
          },
          className: "form-control" + (props.errors.username && props.touched.username ? " is-invalid" : ""),
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 226,
            columnNumber: 17
          }
        }), __jsx(formik__WEBPACK_IMPORTED_MODULE_7__["ErrorMessage"], {
          name: "username",
          component: "div",
          className: "invalid-feedback",
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 257,
            columnNumber: 17
          }
        }), __jsx("label", {
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 262,
            columnNumber: 17
          }
        }, "Enter a password (must contain min. 6 characters)"), __jsx(formik__WEBPACK_IMPORTED_MODULE_7__["Field"], {
          name: "password",
          type: "text",
          className: "form-control" + (props.errors.password && props.touched.password ? " is-invalid" : ""),
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 263,
            columnNumber: 17
          }
        }), __jsx(formik__WEBPACK_IMPORTED_MODULE_7__["ErrorMessage"], {
          name: "password",
          component: "div",
          className: "invalid-feedback",
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 273,
            columnNumber: 17
          }
        }), __jsx("label", {
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 279,
            columnNumber: 17
          }
        }, "Please confirm your password"), __jsx(formik__WEBPACK_IMPORTED_MODULE_7__["Field"], {
          name: "confirmPassword",
          type: "text",
          className: "form-control" + (props.errors.confirmPassword && props.touched.confirmPassword ? " is-invalid" : ""),
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 280,
            columnNumber: 17
          }
        }), __jsx(formik__WEBPACK_IMPORTED_MODULE_7__["ErrorMessage"], {
          name: "confirmPassword",
          component: "div",
          className: "invalid-feedback",
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 291,
            columnNumber: 17
          }
        }), __jsx("label", {
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 296,
            columnNumber: 17
          }
        }, "Enter your email"), __jsx(formik__WEBPACK_IMPORTED_MODULE_7__["Field"], {
          name: "email",
          type: "text",
          className: "form-control" + (props.errors.email && props.touched.email ? " is-invalid" : ""),
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 297,
            columnNumber: 17
          }
        }), __jsx(formik__WEBPACK_IMPORTED_MODULE_7__["ErrorMessage"], {
          name: "email",
          component: "div",
          className: "invalid-feedback",
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 307,
            columnNumber: 17
          }
        }), __jsx("button", {
          type: "submit",
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 312,
            columnNumber: 17
          }
        }, "Register"));
      })));
    }
  }]);

  return Signup;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Signup);

/***/ })

})
//# sourceMappingURL=signup.js.aa9a4a3c7b6b86843baa.hot-update.js.map