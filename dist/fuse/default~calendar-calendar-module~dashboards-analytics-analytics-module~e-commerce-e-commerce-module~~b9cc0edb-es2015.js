(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~calendar-calendar-module~dashboards-analytics-analytics-module~e-commerce-e-commerce-module~~b9cc0edb"],{

/***/ "./src/app/main/pages/authentication/login-2/login.service.ts":
/*!********************************************************************!*\
  !*** ./src/app/main/pages/authentication/login-2/login.service.ts ***!
  \********************************************************************/
/*! exports provided: LoginService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginService", function() { return LoginService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");






class LoginService {
    /**
     * Constructor
     *
     * @param {HttpClient} _httpClient
     */
    constructor(http) {
        this.http = http;
    }
    saveTipo(tipo) {
        this.setLocalItem('tipo-contacto', tipo, this.getTimeExpire());
        this.tipo = tipo;
    }
    getTipo() {
        let tipo = this.getLocalItem('tipo-contacto');
        return tipo;
    }
    saveToken(token) {
        this.setLocalItem('mean-token', token, this.getTimeExpire());
        this.token = token;
    }
    getToken() {
        let LocalItem = this.getLocalItem('mean-token');
        return LocalItem;
    }
    saveId(id) {
        this.setLocalItem('mean-id', id, this.getTimeExpire());
        this.id = id;
    }
    saveContactoId(id) {
        this.setLocalItem('contactoId', id, this.getTimeExpire());
    }
    setLocalItem(key, id, time) {
        time = time || 0;
        let timestamp = this.setTimeToLive(time);
        let storageObj = {
            'timestamp': timestamp,
            'value': id
        };
        //console.log('lo que se va a almacenar en el storage ' + key);
        //console.log(storageObj);
        sessionStorage.setItem(key, JSON.stringify(storageObj));
    }
    //funcion get
    getLocalItem(key) {
        let storage = sessionStorage.getItem(key);
        //console.log('lo que tiene el storage en el get ' + key);
        //console.log(storage);
        let item = null;
        if (storage) {
            item = JSON.parse(storage);
        }
        if (item) { // If item exists evaluate, else return
            let time = this.evaluateTimeToLive(item.timestamp);
            if (time) {
                //console.log('el tiempo de vida es correcto');
                return item.value;
            }
            else {
                //console.log('no alcanzo');
                sessionStorage.removeItem(key);
                return false;
            }
        }
        else {
            return false;
        }
    }
    setTimeToLive(lifespan) {
        let currentTime = new Date().getTime();
        let timeToLive;
        if (lifespan !== 0) {
            timeToLive = currentTime + lifespan;
        }
        else {
            timeToLive = 0; // Lifespan is now infinite and dependent only browser
        }
        return timeToLive;
    }
    // obtiene la fecha actual y suma el tiempo limite de sesión
    getTimeExpire() {
        var min = 60 * 1000;
        var after = 30 * min;
        return after;
    }
    //Evalua el tiempo determina para la sesión
    evaluateTimeToLive(timestamp) {
        //console.log('la fecha a evaluar');
        //console.log(timestamp);
        let currentTime = new Date().getTime();
        if (currentTime <= timestamp || timestamp === 0) {
            return true;
        }
        else {
            return false;
        }
    }
    // tslint:disable-next-line:comment-format
    //remove the item session from the storage
    removeLocalItem(key) {
        return sessionStorage.removeItem(key);
    }
    getId() {
        let id = this.getLocalItem('mean-id');
        return id;
    }
    getUserDetails() {
        const token = this.getToken();
        let payload;
        if (token) {
            payload = token.split('.')[1];
            payload = window.atob(payload);
            return JSON.parse(payload);
        }
        else {
            return null;
        }
    }
    getIdUserLoggedIn() {
        return this.getId();
    }
    isLoggedIn() {
        const user = this.getToken();
        if (user) {
            return true;
        }
        else {
            return false;
        }
    }
    request(method, type, user) {
        let base;
        if (method === 'get') {
            //console.log('lega aaaa');
            base = this.http.get(`${environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].url}rest/api/login?loginName=${environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].usr}&password=${environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].pass}&output=json`); //, user);
        }
        else {
            // base = this.http.post(`/api/${type}`, { headers: { Authorization: `Bearer ${this.getToken()}` }});
        }
        const request = base.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((data) => {
            console.log(data);
            if (data.sessionId) {
                //this.getIdUser(user.email, user.password);
            }
            return data;
        }));
        return request;
    }
    getIdUser(username, password, sessionId) {
        let query = "select R15454162,name,id,tipo%23value from Contacto where Usuario_Portal ='" + username + encodeURI("'") + " and Password_Portal='" + password + encodeURI("'");
        let url = `${environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].url}rest/api/selectQuery?maxRows=1000&query=` + query + "&sessionId=" + sessionId + "&output=json&maxRows=1";
        let base = this.http.get(url);
        const request = base.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((data) => {
            if ((data != "") && (data != undefined)) {
                this.SaveProfile(JSON.stringify(data[0]));
                this.saveContactoId(data[0][2]);
                this.saveTipo(data[0][3]);
                //this.getEnterpriseId(data[0][0], sessionId);
                this.saveId(data[0][0]);
                this.saveToken(sessionId);
            }
            else {
                this.saveContactoId('');
                this.SaveProfile("");
                this.saveId("");
                this.saveToken("");
                this.saveTipo("");
                return rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"].throw("Error al loguear");
            }
            return data;
        }));
        return request;
    }
    getIdUserByEmail(username, sessionId) {
        let query = encodeURI("select id,name,Correo_Electronico,Telefono_movil,NombreCiudad,contrasea,id,NombreDepartamento from Contactos where Correo_Electronico='") + username + encodeURI("'");
        let url = `${environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].url}rest/api/selectQuery?maxRows=1000&query=` + query + "&sessionId=" + sessionId + "&output=json&maxRows=1";
        let base = this.http.get(url);
        const request = base.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((data) => {
            if ((data != "") && (data != undefined)) {
                return data;
            }
            else {
                return rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"].throw("Error al loguear");
            }
        }));
        return request;
    }
    getEnterpriseId(idCustomer, sessionid) {
        // solo status = Creado o con este id: 8168024 lo deja pasar
        const query = encodeURI(`Select Razon_Social,NIT,Telefono,Direccion,URL_Logo,IdCiudadTxt from Cliente1 where id =${idCustomer}`);
        const url = `${environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].url}rest/api/selectQuery?maxRows=1000&query=` + query + "&sessionId=" + sessionid + "&output=json&maxRows=10000";
        let base;
        base = this.http.get(url);
        return base.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((res) => {
            if (res[0]) {
                this.setCiudadesTxt(res[0][5]);
                this.saveEnterpriseData(res.toString());
            }
            return res;
        }));
    }
    getLoginPersona(username, password, sessionId) {
        this.saveToken(sessionId);
        let query = encodeURI(`select id,name,Numero_Documento,email from Candidato where Numero_Documento='${username}' and Password_Paciente='${password}'`);
        let url = `${environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].url}rest/api/selectQuery?maxRows=1000&query=${query}&sessionId=${sessionId}&output=json&maxRows=1`;
        let base = this.http.get(url);
        const request = base.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((data) => {
            if ((data != "") && (data != undefined)) {
                this.SaveProfile(JSON.stringify(data[0]));
                return data;
            }
            else {
                return rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"].throw("Error al loguear");
            }
        }));
        return request;
    }
    saveEnterpriseData(entData) {
        sessionStorage.setItem("EntrepriseData", entData);
    }
    GetEnterpriseData() {
        return sessionStorage.getItem("EntrepriseData");
    }
    getContactData(CommercialId, sessionid) {
        let query = encodeURI("select name,phone,mobilePhone,email from usuarios where id='") + CommercialId + encodeURI("'");
        let url = `${environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].url}rest/api/selectQuery?maxRows=1000&query=` + query + "&sessionId=" + sessionid + "&output=json&maxRows=10000";
        let base;
        base = this.http.get(url);
        this.http.get(url).subscribe(res => {
            if (res[0]) {
                this.SaveContactData(JSON.stringify(res[0]));
            }
        });
    }
    SaveContactData(ContactData) {
        sessionStorage.setItem("ContactData", ContactData);
    }
    GetContactData() {
        return (sessionStorage.getItem("ContactData"));
    }
    setEmailLogin(email) {
        sessionStorage.setItem("emailLogin", email);
    }
    getEmailLogin() {
        return sessionStorage.getItem("emailLogin");
    }
    setLineaNegocio(linea) {
        //console.log("la linea " + linea);
        sessionStorage.setItem("lineaNegocio", linea);
    }
    getLineaNegocio() {
        //console.log("la que entrega linea " + sessionStorage.getItem("lineaNegocio"));
        return sessionStorage.getItem("lineaNegocio");
    }
    setCiudadesTxt(ciudades) {
        //console.log("la linea " + linea);
        sessionStorage.setItem("ciudadesTxt", ciudades);
    }
    getCiudadesTxt() {
        //console.log("la que entrega linea " + sessionStorage.getItem("lineaNegocio"));
        return sessionStorage.getItem("ciudadesTxt");
    }
    setLogo(linea) {
        //console.log("el logo " + linea);
        sessionStorage.setItem("logo", linea);
    }
    getLogo() {
        //console.log("getLogo " + sessionStorage.getItem("logo"));
        return sessionStorage.getItem("logo");
    }
    SaveProfile(profile) {
        sessionStorage.setItem("Profile", profile);
    }
    GetProfile() {
        var profile = sessionStorage.getItem("Profile");
        return profile;
    }
    register(user) {
        return this.request('post', 'register', user);
    }
    login(user) {
        return this.request('get', 'login', user);
    }
    loginPersona(user, password, session) {
        return this.getLoginPersona(user, password, session);
    }
    profile() {
        return this.request('get', 'profile');
    }
    logout() {
        this.SaveProfile("");
        this.saveId("");
        this.saveToken("");
        //this.router.navigateByUrl('/authentication/login');
    }
}
LoginService.ɵfac = function LoginService_Factory(t) { return new (t || LoginService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"])); };
LoginService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: LoginService, factory: LoginService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=default~calendar-calendar-module~dashboards-analytics-analytics-module~e-commerce-e-commerce-module~~b9cc0edb-es2015.js.map