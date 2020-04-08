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

    return _super.call(this, props); // this.state = { usernamevalue: "", pwvalue: "", emailvalue: "" };

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

  /*
  Create a new account using the validated information from the form
  Sends a post request to our backend to create a new user in the db
  */


  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Signup, [{
    key: "createNewAccount",
    value: function createNewAccount(data) {
      //url = api + "/create-user";
      // console.log("url: ", url);
      console.log("data??", data.username);
      /*axios({
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
      );*/
    }
  }, {
    key: "render",
    value: function render() {
      var _this = this;

      return __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67,
          columnNumber: 7
        }
      }, __jsx(_components_Header__WEBPACK_IMPORTED_MODULE_6__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68,
          columnNumber: 9
        }
      }), __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69,
          columnNumber: 9
        }
      }, __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70,
          columnNumber: 11
        }
      }, "Sign up"), __jsx(formik__WEBPACK_IMPORTED_MODULE_7__["Formik"], {
        initialValues: {
          username: "",
          password: "",
          confirmPassword: "",
          email: ""
        },
        validationSchema: yup__WEBPACK_IMPORTED_MODULE_8__["object"]().shape({
          username: yup__WEBPACK_IMPORTED_MODULE_8__["string"]().required("Required").min(3, "Username must be at least 3 characters long").max(20, "Username is too long").matches(/^[A-Za-z0-9\-\_.]*$/, "Username can only use letters, numbers, or special characters(-_.)"),
          //check to see if this username already exists

          /*.test(
              "checkUsernameExistence",
              "This username is not available",
              async (value) => {
                window.setTimeout(() => {
                  const errors = {};
                  errors.username = "nce try";
                  return errors;
                }, 2000);
                  /*return new Promise((resolve, reject) => {
                
              })*/

          /* }
            )*/
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
        onSubmit: function onSubmit(fields) {
          //  alert("SUCCESS!! :-)\n\n" + JSON.stringify(fields, null, 4));
          _this.createNewAccount(JSON.stringify({
            username: fields.username,
            password: fields.password,
            email: fields.email
          }));
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71,
          columnNumber: 11
        }
      }, function (props) {
        return __jsx(formik__WEBPACK_IMPORTED_MODULE_7__["Form"], {
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 175,
            columnNumber: 15
          }
        }, __jsx("label", {
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 176,
            columnNumber: 17
          }
        }, "First, choose a unique username"), __jsx(formik__WEBPACK_IMPORTED_MODULE_7__["Field"], {
          name: "username",
          type: "text",
          className: "form-control" + (props.errors.username && props.touched.username ? " is-invalid" : ""),
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 177,
            columnNumber: 17
          }
        }), __jsx(formik__WEBPACK_IMPORTED_MODULE_7__["ErrorMessage"], {
          name: "username",
          component: "div",
          className: "invalid-feedback",
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 187,
            columnNumber: 17
          }
        }), __jsx("label", {
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 192,
            columnNumber: 17
          }
        }, "Enter a password (must contain min. 6 characters)"), __jsx(formik__WEBPACK_IMPORTED_MODULE_7__["Field"], {
          name: "password",
          type: "text",
          className: "form-control" + (props.errors.password && props.touched.password ? " is-invalid" : ""),
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 193,
            columnNumber: 17
          }
        }), __jsx(formik__WEBPACK_IMPORTED_MODULE_7__["ErrorMessage"], {
          name: "password",
          component: "div",
          className: "invalid-feedback",
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 203,
            columnNumber: 17
          }
        }), __jsx("label", {
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 209,
            columnNumber: 17
          }
        }, "Please confirm your password"), __jsx(formik__WEBPACK_IMPORTED_MODULE_7__["Field"], {
          name: "confirmPassword",
          type: "text",
          className: "form-control" + (props.errors.confirmPassword && props.touched.confirmPassword ? " is-invalid" : ""),
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 210,
            columnNumber: 17
          }
        }), __jsx(formik__WEBPACK_IMPORTED_MODULE_7__["ErrorMessage"], {
          name: "confirmPassword",
          component: "div",
          className: "invalid-feedback",
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 221,
            columnNumber: 17
          }
        }), __jsx("label", {
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 226,
            columnNumber: 17
          }
        }, "Enter your email"), __jsx(formik__WEBPACK_IMPORTED_MODULE_7__["Field"], {
          name: "email",
          type: "text",
          className: "form-control" + (props.errors.email && props.touched.email ? " is-invalid" : ""),
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 227,
            columnNumber: 17
          }
        }), __jsx(formik__WEBPACK_IMPORTED_MODULE_7__["ErrorMessage"], {
          name: "email",
          component: "div",
          className: "invalid-feedback",
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 237,
            columnNumber: 17
          }
        }), __jsx("button", {
          type: "submit",
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 242,
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
//# sourceMappingURL=signup.js.692d2e934d3c57536288.hot-update.js.map