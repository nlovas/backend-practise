webpackHotUpdate("static\\development\\pages\\login.js",{

/***/ "./pages/login.js":
/*!************************!*\
  !*** ./pages/login.js ***!
  \************************/
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
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_11__);







function _createSuper(Derived) { return function () { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }







var api = "http://localhost:8080";

var Login = /*#__PURE__*/function (_React$Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(Login, _React$Component);

  var _super = _createSuper(Login);

  function Login(props) {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, Login);

    return _super.call(this, props);
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(Login, [{
    key: "submitForm",
    value: function submitForm(fields, actions) {
      console.log("the form was submitted");
    }
    /*
    Check with the db to see if the username and pw match
    TODO hash the password
    */

  }, {
    key: "checkCredentials",
    value: function checkCredentials(username, password) {
      return new Promise(function (resolve, reject) {
        axios__WEBPACK_IMPORTED_MODULE_9___default()({
          method: "get",
          url: "http://localhost:8080/" + username,
          params: {
            username: username,
            password: password
          }
        }).then(function (response) {
          console.log(response);

          if (response.data === "true") {
            //matches, the user can log in
            resolve(true);
          } else {
            resolve(false);
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

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10__["createElement"]("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10__["createElement"](_components_Header__WEBPACK_IMPORTED_MODULE_6__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10__["createElement"]("h1", null, "Log In"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10__["createElement"]("div", null, "Not a member of the Island?", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10__["createElement"](next_link__WEBPACK_IMPORTED_MODULE_11___default.a, {
        href: "/signup"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10__["createElement"]("a", null, "Sign up"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10__["createElement"](formik__WEBPACK_IMPORTED_MODULE_7__["Formik"], {
        initialValues: {
          username: "",
          password: ""
        },
        validationSchema: yup__WEBPACK_IMPORTED_MODULE_8__["object"]().shape({
          username: yup__WEBPACK_IMPORTED_MODULE_8__["string"]().required("Required"),
          password: yup__WEBPACK_IMPORTED_MODULE_8__["string"]().required("Required")
        }),
        onSubmit: function _callee(fields, actions) {
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _this.submitForm(fields, actions);

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
        }, "Username"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10__["createElement"](formik__WEBPACK_IMPORTED_MODULE_7__["Field"], {
          name: "username",
          type: "text",
          placeholder: "Username"
        }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10__["createElement"](formik__WEBPACK_IMPORTED_MODULE_7__["ErrorMessage"], {
          name: "username",
          component: "div"
        }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10__["createElement"]("label", {
          htmlFor: "password"
        }, "Password"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10__["createElement"](formik__WEBPACK_IMPORTED_MODULE_7__["Field"], {
          name: "password",
          type: "text",
          placeholder: "Password"
        }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10__["createElement"](formik__WEBPACK_IMPORTED_MODULE_7__["ErrorMessage"], {
          name: "password",
          component: "div"
        }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10__["createElement"]("button", {
          type: "submit"
        }, "Log In"));
      }));
    }
  }]);

  return Login;
}(react__WEBPACK_IMPORTED_MODULE_10__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Login);

/***/ })

})
//# sourceMappingURL=login.js.7a5c111a1487d6c6cba6.hot-update.js.map