function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~calendar-calendar-module~dashboards-analytics-analytics-module~e-commerce-e-commerce-module~~b9cc0edb"], {
  /***/
  "./src/app/main/pages/authentication/login-2/login.service.ts":
  /*!********************************************************************!*\
    !*** ./src/app/main/pages/authentication/login-2/login.service.ts ***!
    \********************************************************************/

  /*! exports provided: LoginService */

  /***/
  function srcAppMainPagesAuthenticationLogin2LoginServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginService", function () {
      return LoginService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var LoginService =
    /*#__PURE__*/
    function () {
      /**
       * Constructor
       *
       * @param {HttpClient} _httpClient
       */
      function LoginService(http) {
        _classCallCheck(this, LoginService);

        this.http = http;
      }

      _createClass(LoginService, [{
        key: "saveTipo",
        value: function saveTipo(tipo) {
          this.setLocalItem('tipo-contacto', tipo, this.getTimeExpire());
          this.tipo = tipo;
        }
      }, {
        key: "getTipo",
        value: function getTipo() {
          var tipo = this.getLocalItem('tipo-contacto');
          return tipo;
        }
      }, {
        key: "saveToken",
        value: function saveToken(token) {
          this.setLocalItem('mean-token', token, this.getTimeExpire());
          this.token = token;
        }
      }, {
        key: "getToken",
        value: function getToken() {
          var LocalItem = this.getLocalItem('mean-token');
          return LocalItem;
        }
      }, {
        key: "saveId",
        value: function saveId(id) {
          this.setLocalItem('mean-id', id, this.getTimeExpire());
          this.id = id;
        }
      }, {
        key: "saveContactoId",
        value: function saveContactoId(id) {
          this.setLocalItem('contactoId', id, this.getTimeExpire());
        }
      }, {
        key: "setLocalItem",
        value: function setLocalItem(key, id, time) {
          time = time || 0;
          var timestamp = this.setTimeToLive(time);
          var storageObj = {
            'timestamp': timestamp,
            'value': id
          }; //console.log('lo que se va a almacenar en el storage ' + key);
          //console.log(storageObj);

          sessionStorage.setItem(key, JSON.stringify(storageObj));
        } //funcion get

      }, {
        key: "getLocalItem",
        value: function getLocalItem(key) {
          var storage = sessionStorage.getItem(key); //console.log('lo que tiene el storage en el get ' + key);
          //console.log(storage);

          var item = null;

          if (storage) {
            item = JSON.parse(storage);
          }

          if (item) {
            // If item exists evaluate, else return
            var time = this.evaluateTimeToLive(item.timestamp);

            if (time) {
              //console.log('el tiempo de vida es correcto');
              return item.value;
            } else {
              //console.log('no alcanzo');
              sessionStorage.removeItem(key);
              return false;
            }
          } else {
            return false;
          }
        }
      }, {
        key: "setTimeToLive",
        value: function setTimeToLive(lifespan) {
          var currentTime = new Date().getTime();
          var timeToLive;

          if (lifespan !== 0) {
            timeToLive = currentTime + lifespan;
          } else {
            timeToLive = 0; // Lifespan is now infinite and dependent only browser
          }

          return timeToLive;
        } // obtiene la fecha actual y suma el tiempo limite de sesión

      }, {
        key: "getTimeExpire",
        value: function getTimeExpire() {
          var min = 60 * 1000;
          var after = 30 * min;
          return after;
        } //Evalua el tiempo determina para la sesión

      }, {
        key: "evaluateTimeToLive",
        value: function evaluateTimeToLive(timestamp) {
          //console.log('la fecha a evaluar');
          //console.log(timestamp);
          var currentTime = new Date().getTime();

          if (currentTime <= timestamp || timestamp === 0) {
            return true;
          } else {
            return false;
          }
        } // tslint:disable-next-line:comment-format
        //remove the item session from the storage

      }, {
        key: "removeLocalItem",
        value: function removeLocalItem(key) {
          return sessionStorage.removeItem(key);
        }
      }, {
        key: "getId",
        value: function getId() {
          var id = this.getLocalItem('mean-id');
          return id;
        }
      }, {
        key: "getUserDetails",
        value: function getUserDetails() {
          var token = this.getToken();
          var payload;

          if (token) {
            payload = token.split('.')[1];
            payload = window.atob(payload);
            return JSON.parse(payload);
          } else {
            return null;
          }
        }
      }, {
        key: "getIdUserLoggedIn",
        value: function getIdUserLoggedIn() {
          return this.getId();
        }
      }, {
        key: "isLoggedIn",
        value: function isLoggedIn() {
          var user = this.getToken();

          if (user) {
            return true;
          } else {
            return false;
          }
        }
      }, {
        key: "request",
        value: function request(method, type, user) {
          var base;

          if (method === 'get') {
            //console.log('lega aaaa');
            base = this.http.get("".concat(environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].url, "rest/api/login?loginName=").concat(environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].usr, "&password=").concat(environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].pass, "&output=json")); //, user);
          } else {// base = this.http.post(`/api/${type}`, { headers: { Authorization: `Bearer ${this.getToken()}` }});
            }

          var request = base.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) {
            console.log(data);

            if (data.sessionId) {//this.getIdUser(user.email, user.password);
            }

            return data;
          }));
          return request;
        }
      }, {
        key: "getIdUser",
        value: function getIdUser(username, password, sessionId) {
          var _this = this;

          var query = "select R15454162,name,id,tipo%23value from Contacto where Usuario_Portal ='" + username + encodeURI("'") + " and Password_Portal='" + password + encodeURI("'");
          var url = "".concat(environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].url, "rest/api/selectQuery?maxRows=1000&query=") + query + "&sessionId=" + sessionId + "&output=json&maxRows=1";
          var base = this.http.get(url);
          var request = base.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) {
            if (data != "" && data != undefined) {
              _this.SaveProfile(JSON.stringify(data[0]));

              _this.saveContactoId(data[0][2]);

              _this.saveTipo(data[0][3]); //this.getEnterpriseId(data[0][0], sessionId);


              _this.saveId(data[0][0]);

              _this.saveToken(sessionId);
            } else {
              _this.saveContactoId('');

              _this.SaveProfile("");

              _this.saveId("");

              _this.saveToken("");

              _this.saveTipo("");

              return rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"].throw("Error al loguear");
            }

            return data;
          }));
          return request;
        }
      }, {
        key: "getIdUserByEmail",
        value: function getIdUserByEmail(username, sessionId) {
          var query = encodeURI("select id,name,Correo_Electronico,Telefono_movil,NombreCiudad,contrasea,id,NombreDepartamento from Contactos where Correo_Electronico='") + username + encodeURI("'");
          var url = "".concat(environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].url, "rest/api/selectQuery?maxRows=1000&query=") + query + "&sessionId=" + sessionId + "&output=json&maxRows=1";
          var base = this.http.get(url);
          var request = base.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) {
            if (data != "" && data != undefined) {
              return data;
            } else {
              return rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"].throw("Error al loguear");
            }
          }));
          return request;
        }
      }, {
        key: "getEnterpriseId",
        value: function getEnterpriseId(idCustomer, sessionid) {
          var _this2 = this;

          // solo status = Creado o con este id: 8168024 lo deja pasar
          var query = encodeURI("Select Razon_Social,NIT,Telefono,Direccion,URL_Logo,IdCiudadTxt from Cliente1 where id =".concat(idCustomer));
          var url = "".concat(environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].url, "rest/api/selectQuery?maxRows=1000&query=") + query + "&sessionId=" + sessionid + "&output=json&maxRows=10000";
          var base;
          base = this.http.get(url);
          return base.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
            if (res[0]) {
              _this2.setCiudadesTxt(res[0][5]);

              _this2.saveEnterpriseData(res.toString());
            }

            return res;
          }));
        }
      }, {
        key: "getLoginPersona",
        value: function getLoginPersona(username, password, sessionId) {
          var _this3 = this;

          this.saveToken(sessionId);
          var query = encodeURI("select id,name,Numero_Documento,email from Candidato where Numero_Documento='".concat(username, "' and Password_Paciente='").concat(password, "'"));
          var url = "".concat(environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].url, "rest/api/selectQuery?maxRows=1000&query=").concat(query, "&sessionId=").concat(sessionId, "&output=json&maxRows=1");
          var base = this.http.get(url);
          var request = base.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) {
            if (data != "" && data != undefined) {
              _this3.SaveProfile(JSON.stringify(data[0]));

              return data;
            } else {
              return rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"].throw("Error al loguear");
            }
          }));
          return request;
        }
      }, {
        key: "saveEnterpriseData",
        value: function saveEnterpriseData(entData) {
          sessionStorage.setItem("EntrepriseData", entData);
        }
      }, {
        key: "GetEnterpriseData",
        value: function GetEnterpriseData() {
          return sessionStorage.getItem("EntrepriseData");
        }
      }, {
        key: "getContactData",
        value: function getContactData(CommercialId, sessionid) {
          var _this4 = this;

          var query = encodeURI("select name,phone,mobilePhone,email from usuarios where id='") + CommercialId + encodeURI("'");
          var url = "".concat(environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].url, "rest/api/selectQuery?maxRows=1000&query=") + query + "&sessionId=" + sessionid + "&output=json&maxRows=10000";
          var base;
          base = this.http.get(url);
          this.http.get(url).subscribe(function (res) {
            if (res[0]) {
              _this4.SaveContactData(JSON.stringify(res[0]));
            }
          });
        }
      }, {
        key: "SaveContactData",
        value: function SaveContactData(ContactData) {
          sessionStorage.setItem("ContactData", ContactData);
        }
      }, {
        key: "GetContactData",
        value: function GetContactData() {
          return sessionStorage.getItem("ContactData");
        }
      }, {
        key: "setEmailLogin",
        value: function setEmailLogin(email) {
          sessionStorage.setItem("emailLogin", email);
        }
      }, {
        key: "getEmailLogin",
        value: function getEmailLogin() {
          return sessionStorage.getItem("emailLogin");
        }
      }, {
        key: "setLineaNegocio",
        value: function setLineaNegocio(linea) {
          //console.log("la linea " + linea);
          sessionStorage.setItem("lineaNegocio", linea);
        }
      }, {
        key: "getLineaNegocio",
        value: function getLineaNegocio() {
          //console.log("la que entrega linea " + sessionStorage.getItem("lineaNegocio"));
          return sessionStorage.getItem("lineaNegocio");
        }
      }, {
        key: "setCiudadesTxt",
        value: function setCiudadesTxt(ciudades) {
          //console.log("la linea " + linea);
          sessionStorage.setItem("ciudadesTxt", ciudades);
        }
      }, {
        key: "getCiudadesTxt",
        value: function getCiudadesTxt() {
          //console.log("la que entrega linea " + sessionStorage.getItem("lineaNegocio"));
          return sessionStorage.getItem("ciudadesTxt");
        }
      }, {
        key: "setLogo",
        value: function setLogo(linea) {
          //console.log("el logo " + linea);
          sessionStorage.setItem("logo", linea);
        }
      }, {
        key: "getLogo",
        value: function getLogo() {
          //console.log("getLogo " + sessionStorage.getItem("logo"));
          return sessionStorage.getItem("logo");
        }
      }, {
        key: "SaveProfile",
        value: function SaveProfile(profile) {
          sessionStorage.setItem("Profile", profile);
        }
      }, {
        key: "GetProfile",
        value: function GetProfile() {
          var profile = sessionStorage.getItem("Profile");
          return profile;
        }
      }, {
        key: "register",
        value: function register(user) {
          return this.request('post', 'register', user);
        }
      }, {
        key: "login",
        value: function login(user) {
          return this.request('get', 'login', user);
        }
      }, {
        key: "loginPersona",
        value: function loginPersona(user, password, session) {
          return this.getLoginPersona(user, password, session);
        }
      }, {
        key: "profile",
        value: function profile() {
          return this.request('get', 'profile');
        }
      }, {
        key: "logout",
        value: function logout() {
          this.SaveProfile("");
          this.saveId("");
          this.saveToken(""); //this.router.navigateByUrl('/authentication/login');
        }
      }]);

      return LoginService;
    }();

    LoginService.ɵfac = function LoginService_Factory(t) {
      return new (t || LoginService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]));
    };

    LoginService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: LoginService,
      factory: LoginService.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=default~calendar-calendar-module~dashboards-analytics-analytics-module~e-commerce-e-commerce-module~~b9cc0edb-es5.js.map