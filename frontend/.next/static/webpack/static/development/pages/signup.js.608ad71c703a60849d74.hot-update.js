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





var _jsxFileName = "C:\\Users\\User\\Documents\\backend-practise\\frontend\\pages\\signup.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;

function _createSuper(Derived) { return function () { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }





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


  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Signup, [{
    key: "render",
    value: function render() {
      var _this = this;

      return __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 7
        }
      }, __jsx(_components_Header__WEBPACK_IMPORTED_MODULE_6__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 9
        }
      }), __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 9
        }
      }, __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39,
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
          username: yup__WEBPACK_IMPORTED_MODULE_8__["string"]().required("Required"),
          password: yup__WEBPACK_IMPORTED_MODULE_8__["string"]().required("Required").min(6, "Password must be at least 6 characters long"),
          confirmPassword: yup__WEBPACK_IMPORTED_MODULE_8__["string"]().required("Required").oneOf([yup__WEBPACK_IMPORTED_MODULE_8__["ref"]("password"), null], "Passwords do not match"),
          email: yup__WEBPACK_IMPORTED_MODULE_8__["string"]().required("Required").email("Must be a valid email")
        }),
        onSubmit: function onSubmit(fields) {
          alert("SUCCESS!! :-)\n\n" + JSON.stringify(fields, null, 4));
        },
        render: function render(_ref) {
          var errors = _ref.errors,
              status = _ref.status,
              touched = _ref.touched;
          return __jsx(formik__WEBPACK_IMPORTED_MODULE_7__["Form"], {
            __self: _this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 63,
              columnNumber: 15
            }
          }, __jsx("label", {
            __self: _this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 64,
              columnNumber: 17
            }
          }, "First, choose a unique username"), __jsx(formik__WEBPACK_IMPORTED_MODULE_7__["Field"], {
            name: "username",
            type: "text",
            className: "form-control" + (errors.username && touched.username ? " is-invalid" : ""),
            __self: _this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 65,
              columnNumber: 17
            }
          }), __jsx(formik__WEBPACK_IMPORTED_MODULE_7__["ErrorMessage"], {
            name: "username",
            component: "div",
            className: "invalid-feedback",
            __self: _this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 73,
              columnNumber: 17
            }
          }), __jsx("label", {
            __self: _this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 78,
              columnNumber: 17
            }
          }, "Enter a password (must contain min. 6 characters)"), __jsx(formik__WEBPACK_IMPORTED_MODULE_7__["Field"], {
            name: "password",
            type: "text",
            className: "form-control" + (errors.password && touched.password ? " is-invalid" : ""),
            __self: _this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 79,
              columnNumber: 17
            }
          }), __jsx(formik__WEBPACK_IMPORTED_MODULE_7__["ErrorMessage"], {
            name: "password",
            component: "div",
            className: "invalid-feedback",
            __self: _this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 87,
              columnNumber: 17
            }
          }), __jsx("label", {
            __self: _this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 93,
              columnNumber: 17
            }
          }, "Please confirm your password"), __jsx(formik__WEBPACK_IMPORTED_MODULE_7__["Field"], {
            name: "confirmPassword",
            type: "text",
            className: "form-control" + (errors.confirmPassword && touched.confirmPassword ? " is-invalid" : ""),
            __self: _this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 94,
              columnNumber: 17
            }
          }), __jsx(formik__WEBPACK_IMPORTED_MODULE_7__["ErrorMessage"], {
            name: "confirmPassword",
            component: "div",
            className: "invalid-feedback",
            __self: _this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 104,
              columnNumber: 17
            }
          }), __jsx("label", {
            __self: _this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 109,
              columnNumber: 17
            }
          }, "Enter your email"), __jsx(formik__WEBPACK_IMPORTED_MODULE_7__["Field"], {
            name: "email",
            type: "text",
            className: "form-control" + (errors.email && touched.email ? " is-invalid" : ""),
            __self: _this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 110,
              columnNumber: 17
            }
          }), __jsx(formik__WEBPACK_IMPORTED_MODULE_7__["ErrorMessage"], {
            name: "email",
            component: "div",
            className: "invalid-feedback",
            __self: _this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 118,
              columnNumber: 17
            }
          }), __jsx("button", {
            type: "submit",
            __self: _this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 123,
              columnNumber: 17
            }
          }, "Register"));
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 11
        }
      })));
    }
  }]);

  return Signup;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Signup);
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

/***/ })

})
//# sourceMappingURL=signup.js.608ad71c703a60849d74.hot-update.js.map