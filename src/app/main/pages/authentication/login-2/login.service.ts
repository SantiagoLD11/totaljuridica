import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'environments/environment';
import { map } from 'rxjs/operators';

export interface UserDetails {
    id: string;
    streetAddr1: string;
    email: string;
    phone: string;
    Pagina_Web: string;
    R8184516: string;
}

interface TokenResponse {
    sessionId: string;
    status: number;
}

interface TokenResponseid {
    id: string;
}

export interface TokenPayload {
    email: string;
    password: string;
    name?: string;
}

@Injectable()
export class LoginService
{
    routeParams: any;
    token: any;
    tipo: any;
    onOrderChanged: BehaviorSubject<any>;
    private id: string;

    /**
     * Constructor
     *
     * @param {HttpClient} _httpClient
     */
    constructor(
        private http: HttpClient
    )
    {

    }

    public saveTipo(tipo: string): void {
        this.setLocalItem('tipo-contacto', tipo, this.getTimeExpire());
        this.tipo = tipo;
    }

    public getTipo(): string {
        let tipo = this.getLocalItem('tipo-contacto');
        return tipo;
    }

    public saveToken(token: string): void {
        this.setLocalItem('mean-token', token, this.getTimeExpire());
        this.token = token;
    }

    public getToken(): string {
        let LocalItem = this.getLocalItem('mean-token');
        return LocalItem;
    }

    private saveId(id: string): void {
        this.setLocalItem('mean-id', id, this.getTimeExpire());
        this.id = id;
    }

    private saveContactoId(id: string): void {
        this.setLocalItem('contactoId', id, this.getTimeExpire());
    }

    setLocalItem(key, id, time?) {
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
            } else {
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
        } else {
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
        } else {
            return false;
        }
    }

    // tslint:disable-next-line:comment-format
    //remove the item session from the storage
    removeLocalItem(key) {
        return sessionStorage.removeItem(key);
    }

    public getId(): string {
        let id = this.getLocalItem('mean-id');
        return id;
    }

    public getUserDetails(): UserDetails {
        const token = this.getToken();
        let payload;
        if (token) {
            payload = token.split('.')[1];
            payload = window.atob(payload);
            return JSON.parse(payload);
        } else {
            return null;
        }
    }

    public getIdUserLoggedIn(): string {
        return this.getId();
    }

    public isLoggedIn(): boolean {
        const user = this.getToken();
        if (user) {
            return true;
        } else {
            return false;
        }
    }

    private request(method: 'post' | 'get', type: 'login' | 'register' | 'profile', user?: TokenPayload): Observable<any> {
        let base;

        if (method === 'get') {
            //console.log('lega aaaa');
            base = this.http.get(`${environment.url}rest/api/login?loginName=${environment.usr}&password=${environment.pass}&output=json`); //, user);
        } else {
            // base = this.http.post(`/api/${type}`, { headers: { Authorization: `Bearer ${this.getToken()}` }});
        }

        const request = base.pipe(
            map((data: TokenResponse) => {
                console.log(data);
                if (data.sessionId) {
                    //this.getIdUser(user.email, user.password);
                }
                return data;
            })
        );
        return request;
    }

    public getIdUser(username: string, password: string, sessionId: string): Observable<any> {
        let query = "select R15454162,name,id,tipo%23value from Contacto where Usuario_Portal ='" + username + encodeURI("'") + " and Password_Portal='" + password + encodeURI("'");
        let url = `${environment.url}rest/api/selectQuery?maxRows=1000&query=` + query + "&sessionId=" + sessionId + "&output=json&maxRows=1";
        let base = this.http.get(url);
        const request = base.pipe(
            map((data) => {
                if ((data != "") && (data != undefined)) {
                    this.SaveProfile(JSON.stringify(data[0]));
                    this.saveContactoId(data[0][2]);
                    this.saveTipo(data[0][3]);
                    //this.getEnterpriseId(data[0][0], sessionId);

                    this.saveId(data[0][0]);
                    this.saveToken(sessionId);
                } else {
                    this.saveContactoId('');
                    this.SaveProfile("");
                    this.saveId("");
                    this.saveToken("");
                    this.saveTipo("");
                    return Observable.throw("Error al loguear");
                }
                return data;
            })
        );
        return request;
    }

    public getIdUserByEmail(username: string, sessionId: string): Observable<any> {
        let query = encodeURI("select id,name,Correo_Electronico,Telefono_movil,NombreCiudad,contrasea,id,NombreDepartamento from Contactos where Correo_Electronico='") + username + encodeURI("'");
        let url = `${environment.url}rest/api/selectQuery?maxRows=1000&query=` + query + "&sessionId=" + sessionId + "&output=json&maxRows=1";
        let base = this.http.get(url);
        const request = base.pipe(
            map((data) => {
                if ((data != "") && (data != undefined)) {
                    return data;
                } else {
                    return Observable.throw("Error al loguear");
                }
            })
        );
        return request;
    }


    public getEnterpriseId(idCustomer: string, sessionid: string): Observable<any> {
        // solo status = Creado o con este id: 8168024 lo deja pasar
        const query = encodeURI(`Select Razon_Social,NIT,Telefono,Direccion,URL_Logo,IdCiudadTxt from Cliente1 where id =${idCustomer}`);
        const url = `${environment.url}rest/api/selectQuery?maxRows=1000&query=` + query + "&sessionId=" + sessionid + "&output=json&maxRows=10000";
        let base;
        base = this.http.get(url);
        return base.pipe(
            map((res) => {
                if (res[0]) {
                    this.setCiudadesTxt(res[0][5]);
                    this.saveEnterpriseData(res.toString());
                }
                return res;
            })
        );
    }

    public getLoginPersona(username: string, password: string, sessionId: string): Observable<any> {
        this.saveToken(sessionId);
        let query = encodeURI(`select id,name,Numero_Documento,email from Candidato where Numero_Documento='${username}' and Password_Paciente='${password}'`);
        let url = `${environment.url}rest/api/selectQuery?maxRows=1000&query=${query}&sessionId=${sessionId}&output=json&maxRows=1`;
        let base = this.http.get(url);
        const request = base.pipe(
            map((data) => {
                if ((data != "") && (data != undefined)) {
                    this.SaveProfile(JSON.stringify(data[0]));
                    return data;
                } else {
                    return Observable.throw("Error al loguear");
                }
            })
        );
        return request;
    }

    private saveEnterpriseData(entData) {
        sessionStorage.setItem("EntrepriseData", entData);
    }

    public GetEnterpriseData() {
        return sessionStorage.getItem("EntrepriseData");
    }

    private getContactData(CommercialId: string, sessionid: string) {
        let query = encodeURI("select name,phone,mobilePhone,email from usuarios where id='") + CommercialId + encodeURI("'");
        let url = `${environment.url}rest/api/selectQuery?maxRows=1000&query=` + query + "&sessionId=" + sessionid + "&output=json&maxRows=10000";

        let base;
        base = this.http.get(url);

        this.http.get(url).subscribe(res => {
            if (res[0]) {
                this.SaveContactData(JSON.stringify(res[0]));
            }
        });
    }

    private SaveContactData(ContactData) {
        sessionStorage.setItem("ContactData", ContactData);
    }

    public GetContactData() {
        return (sessionStorage.getItem("ContactData"));
    }

    public setEmailLogin(email) {
        sessionStorage.setItem("emailLogin", email);
    }

    public getEmailLogin() {
        return sessionStorage.getItem("emailLogin");
    }

    public setLineaNegocio(linea) {
        //console.log("la linea " + linea);
        sessionStorage.setItem("lineaNegocio", linea);
    }

    public getLineaNegocio() {
        //console.log("la que entrega linea " + sessionStorage.getItem("lineaNegocio"));
        return sessionStorage.getItem("lineaNegocio");
    }

    public setCiudadesTxt(ciudades) {
        //console.log("la linea " + linea);
        sessionStorage.setItem("ciudadesTxt", ciudades);
    }

    public getCiudadesTxt() {
        //console.log("la que entrega linea " + sessionStorage.getItem("lineaNegocio"));
        return sessionStorage.getItem("ciudadesTxt");
    }

    public setLogo(linea) {
        //console.log("el logo " + linea);
        sessionStorage.setItem("logo", linea);
    }

    public getLogo() {
        //console.log("getLogo " + sessionStorage.getItem("logo"));
        return sessionStorage.getItem("logo");
    }


    private SaveProfile(profile) {
        sessionStorage.setItem("Profile", profile);
    }
    public GetProfile() {
        var profile = sessionStorage.getItem("Profile");
        return profile;
    }

    public register(user: TokenPayload): Observable<any> {
        return this.request('post', 'register', user);
    }

    public login(user: TokenPayload): Observable<any> {
        return this.request('get', 'login', user);
    }

    public loginPersona(user: string, password, session): Observable<any> {
        return this.getLoginPersona(user, password, session);
    }

    public profile(): Observable<any> {
        return this.request('get', 'profile');
    }

    public logout(): void {
        this.SaveProfile("");
        this.saveId("");
        this.saveToken("");
        //this.router.navigateByUrl('/authentication/login');
    }
}
