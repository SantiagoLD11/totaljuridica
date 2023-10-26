import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from "@angular/router";
import { LoginService } from "app/main/pages/authentication/login-2/login.service";
import { environment } from "environments/environment";
import { Observable, Subject } from "rxjs";
import { map } from "rxjs/operators";
import { element } from "protractor";

@Injectable()
export class CalendarService implements Resolve<any> {
  events: any;
  onEventsUpdated: Subject<any>;

  /**
   * Constructor
   *
   * @param {HttpClient} _httpClient
   */
  constructor(
    private _httpClient: HttpClient,
    private _loginService: LoginService
  ) {
    // Set the defaults
    this.onEventsUpdated = new Subject();
  }

  // -----------------------------------------------------------------------------------------------------
  // @ Public methods
  // -----------------------------------------------------------------------------------------------------

  /**
   * Resolver
   *
   * @param {ActivatedRouteSnapshot} route
   * @param {RouterStateSnapshot} state
   * @returns {Observable<any> | Promise<any> | any}
   */
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> | Promise<any> | any {
    return new Promise((resolve, reject) => {
      Promise.all([this.getEvents()]).then(([events]: [any]) => {
        resolve(null);
      }, reject);
    });
  }

  /**
   * Get events
   *
   * @returns {Promise<any>}
   */
  getEvents(): Promise<any> {
    return new Promise((resolve, reject) => {
      this._httpClient.get("api/calendar/events").subscribe((response: any) => {
        this.events = response.data;
        this.onEventsUpdated.next(this.events);
        resolve(this.events);
      }, reject);
    });
  }

  /**
   * Update events
   *
   * @param events
   * @returns {Promise<any>}
   */
  updateEvents(events): Promise<any> {
    return new Promise((resolve, reject) => {
      this._httpClient
        .post("api/calendar/events", {
          id: "events",
          data: [...events],
        })
        .subscribe((response: any) => {
          this.getEvents();
        }, reject);
    });
  }

  private request(method: "post" | "get", command): Observable<any> {
    let base;
    const token = this._loginService.getToken();
    let query = encodeURI(command);
    if (method === "get") {
      base = this._httpClient.get(
        `${environment.url}rest/api/selectQuery?maxRows=10000&query=${query}&sessionId=${token}&output=json`
      );
      return base.pipe(
        map((data: any) => {
          const result = new Array<any>();
          for (let i = 0; i < data.length; i++) {
            result.push({
              id: data[i][0],
              name: data[i][1],
              other: data[i].length > 2 ? data[i][2] : "",
              other2: data[i].length > 3 ? data[i][3] : "",
              other3: data[i].length > 4 ? data[i][4] : "",
            });
          }
          return result;
        })
      );
    } else {
      base = this._httpClient.get(
        `${environment.url}rest/api/${query}&sessionId=${token}`
      );
      return base.pipe(
        map((data: any) => {
          return data;
        })
      );
    }
  }

  private requestPaciente(method: "post" | "get", command): Observable<any> {
    let base;
    const token = this._loginService.getToken();
    let query = encodeURI(command);
    if (method === "get") {
      base = this._httpClient.get(
        `${environment.url}rest/api/selectQuery?maxRows=1&query=${query}&sessionId=${token}&output=json`
      );
      return base.pipe(
        map((data: any) => {
          const result = new Array<any>();
          const i = 0;
          result.push({
            id: data[i][0],
            tipoDoc: data[i][1],
            numDoc: data[i][2],
            nombre: data[i][3],
            apellido: data[i][4],
            ciudad: data[i][5],
            celular: data[i][6],
            email: data[i][7],
            citaAgendada: data[i][8],
            ProcesoActivo: data[i][9] 
          });
          return result;
        })
      );
    } else {
      base = this._httpClient.get(
        `${environment.url}rest/api/${query}&sessionId=${token}`
      );
      return base.pipe(
        map((data: any) => {
          return data;
        })
      );
    }
  }

  private requestPick(method: "post" | "get", command): Observable<any> {
    let base;
    const token = this._loginService.getToken();
    let query = encodeURI(command);
    if (method === "get") {
      base = this._httpClient.get(
        `${environment.url}rest/api/${query}&sessionId=${token}&output=json`
      );
      return base.pipe(
        map((data: any) => {
          const result = new Array<any>();
          for (let i = 0; i < data.length; i++) {
            result.push({ id: data[i].id, name: data[i].name });
          }
          return result;
        })
      );
    } else {
      base = this._httpClient.get(
        `${environment.url}rest/api/${query}&sessionId=${token}`
      );
      return base.pipe(
        map((data: any) => {
          return data;
        })
      );
    }
  }

  private requestPickSelectQuery(
    method: "post" | "get",
    command
  ): Observable<any> {
    let base;
    const token = this._loginService.getToken();
    let query = encodeURI(command);
    if (method === "get") {
      base = this._httpClient.get(
        `${environment.url}rest/api/selectQuery?maxRows=3000&query=${query}&sessionId=${token}&output=json`
      );
      return base.pipe(
        map((data: any) => {
          const transformada = data.map(([id, name]) => ({ id, name }));
          return transformada;
        })
      );
    } else {
      base = this._httpClient.get(
        `${environment.url}rest/api/${query}&sessionId=${token}`
      );
      return base.pipe(
        map((data: any) => {
          return data;
        })
      );
    }
  }

  private postAction(command): Observable<any> {
    let base;
    const token = this._loginService.getToken();
    let query = encodeURI(command);
    //console.log(`${environment.url}rest/api/${query}&sessionId=${token}&output=json`);
    base = this._httpClient.post(
      `${environment.url}rest/api/${query}&sessionId=${token}&output=json`,
      {}
    );
    return base.pipe(
      map((data: any) => {
        return data;
      })
    );
  }

  private postActionError(command): Observable<any> {
    let base;
    const token = this._loginService.getToken();
    let query = encodeURI(command);
    //console.log(`${environment.url}rest/api/${query}&sessionId=${token}&output=json`);
    base = this._httpClient.post(
      `${environment.url}rest/api/${query}&sessionId=${token}&output=json`,
      {}
    );
    return base
  }

  private getTokenService() {
    let base;
    base = this._httpClient.get(
      `${environment.url}rest/api/login?loginName=${environment.usr}&password=${environment.pass}&output=json`
    );
    return base.pipe(
      map((data: any) => {
        this._loginService.saveToken(data.sessionId);
        return data;
      })
    );
  }

  public getToken(): Observable<any> {
    return this.getTokenService();
  }

  public getPerfiles(): Observable<any> {
    return this.requestPickSelectQuery(
      "get",
      `SELECT id, name FROM Tipo_de_Consulta`
    );
  }

  public getClientes(): Observable<any> {
    return this.request(
      "get",
      `select id,name,IdCiudadTxt from Cliente1 where name <> '' order by name asc`
    );
  }

  public getIps(): Observable<any> {
    return this.request(
      "get",
      `select R15596086 from IPS_Afiliada order by name`
    );
  }

  public getTipoExamen(): Observable<any> {
    //return this.requestPick('get', `getPicklist?objName=Cita&fieldName=Tipo_Examen&output=JSON`);
    return this.request(
      "get",
      `select id,name from Tipo_Examen where name <> '' order by name asc`
    );
  }

  public getPruebasRealizar(): Observable<any> {
    return this.requestPick(
      "get",
      `getPicklist?objName=Cita&fieldName=Pruebas_a_Realizar&output=JSON`
    );
  }

  public getCiudades(): Observable<any> {
    return this.request(
      "get",
      `SELECT id, name FROM Ciudad WHERE Activa = true`
    );
    // return this.request('get', `select id, name from Ciudad where R15045138 = ${cliente} order by name`);
    // return this.request('get', `select id, name from Ciudad order by name`);
  }

  public getSubempresa(cliente): Observable<any> {
    return this.request(
      "get",
      `select id, name from Sub_Empresa where R16891238 = ${cliente}  order by name`
    );
  }

  public getDocumentType() {
    return this.requestPick(
      "get",
      `getPicklist?objName=Candidato&fieldName=Tipo_Documento`
    );
  }

  public getTypeOfRelationship() {
    return this.requestPickSelectQuery(
      "get",
      `SELECT id, name FROM Tipo_de_Relacion`
    );
  }

  public getCitysClient() {
    return this.requestPickSelectQuery(
      "get",
      `SELECT id,name FROM Ciudad`
    );
  }

  public getAttentionChannel() {
    return this.requestPickSelectQuery(
      "get",
      `SELECT id, name FROM Canal_Atencion1`
    );
  }

  public getUserByDoc(id): Observable<any> {
    return this.request(
      "get",
      `select id, name from Cliente where Num_Documento = ${id}`
    );
  }

  public getPacienteByCC(id): Observable<any> {
    return this.requestPaciente(
      "get",
      `select id,Tipo_Documento,Numero_Documento,Nombre,Apellido,R15049289,Celular,Email, Cita_Agendada,Proceso_Activo FROM Candidato where Numero_Documento = ${id}`
    );
  }

  public getEsquema(id): Observable<any> {
    return this.request(
      "get",
      `select id,name,FranjaTxt,Ocupa_Espacio,Observacin from Esquema where id = ${id}`
    );
  }

  public getFranjas(id): Observable<any> {
    console.log("los ids:", id);
    return this.request(
      "get",
      `select id,Hora_Inicio,Hora_Final from Franja where id in (${id})`
    );
  }

  public getDisponibilidad(json, laboratorio): Observable<any> {

    if(`${json.canal}` === "46051270"){ //Canal Presencial 
      return this.request(
        "get",
        `SELECT id,R17143530,Fecha_Hora,name,Fecha_Hora_Fin FROM Disponibilidad WHERE R47142938 = ${json.ciudad} AND Disponible = 1 AND R41568986_txt LIKE ('%${json.tipo}%') AND R41562287_txt LIKE ('%${json.canal}%') ORDER BY RAND()`
      );
    }else{ // Canal Virutal
      return this.request(
        "get",
        `SELECT id,R17143530,Fecha_Hora,name,Fecha_Hora_Fin FROM Disponibilidad WHERE Disponible = 1 AND R41568986_txt LIKE ('%${json.tipo}%') AND R41562287_txt LIKE ('%${json.canal}%') ORDER BY RAND()`
      );

    }

  }

  public saveOrder(id, sucursal): Observable<any> {
    return this.request(
      "post",
      `create2?output=json&useIds=true&objName=Orden_Servicio&REncabezado_Cliente=${id}&REncabezado_Sucursal=${sucursal}`
    );
  }

  public createPaciente(
    ciudad,
    docu,
    docnum,
    nombre,
    apellido,
    celular,
    cargo,
    cita,
    email
  ): Observable<any> {
    let params = `Tipo_Documento=${docu}&Numero_Documento=${docnum}&Nombre=${nombre}&Apellido=${apellido}&Celular=${celular}&Cargo=${cargo}&Detalle_Servicio=${cita}&email=${email}&R15049289=${ciudad}&Proceso_Activo=false`;
    var command = `create2?output=json&useIds=true&objName=Candidato&${params}`;
    return this.postAction(command);
  }

  public updatePaciente(
    empresa,
    ciudad,
    docu,
    docnum,
    nombre,
    apellido,
    celular,
    cita,
    id,
    email
  ): Observable<any> {
    let params = `id=${id}&Tipo_Documento=${docu}&Numero_Documento=${docnum}&Nombre=${nombre}&Apellido=${apellido}&Celular=${celular}&R15049289=${ciudad}&email=${email}`;
    var command = `updateRecord?output=json&objName=Candidato&${params}`;
    return this.postAction(command);
  }

  public updateDisponibilidad(id): Observable<any> {
    let params = `id=${id}&Disponible=0`;
    var command = `updateRecord?output=json&objName=Disponibilidad&${params}`;
    return this.postAction(command);
  }

  public createCita(id, fecha, ciudad, observaciones, Json) {
    let date = fecha != null ? fecha : new Date();
    date = date.getTime();
    let params = `R15590433=${ciudad}&R15590447=${id}&Fecha_Cita=${date}&Observacion_Cliente=${observaciones}&R41735148=${Json.canal}&R41735117=${Json.tipoRelacion}&R17614108=${Json.dispo}`; //&Tipo_de_Examen=${tipoExamen}`;
    var command = `create2?output=json&objName=Consulta&${params}`;
    //console.log(command);
    return this.postActionError(command);
  }

  public CreateTransaccion(Json:any) : Observable<any> {
    // R48030298 =id Paciente/Ciudadano..
    // R48045115 = id Cita
    let params = `JSON_transacc=${Json.jsonInfo}&R48030298=${Json.idClient}&R48045115=${Json.idCita}&transactionId=${Json.transactionId}`;
    var command = `create2?output=json&objName=Transacciones&${params}`;
    //console.log(command);
    return this.postActionError(command);
  }

  public loadSecure(content) {
    const tok = this._loginService.getToken();
    var xhr = new XMLHttpRequest();

    var url =
      `${environment.url}rest/api/setBinaryData?output=json&sessionId=` + tok;
    //var params = this.buildUrlParams(content);
    xhr.open("POST", url, true);

    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

    xhr.onreadystatechange = function () {
      if (xhr.readyState == 4 && xhr.status == 200) {
      }
    };
    var eqd = this.encodeQueryData(content);

    xhr.onprogress = function (e) {
      try {
        if (e.lengthComputable) {
          var percentComplete = (e.loaded / e.total) * 100;
        }
      } catch (f) {
        alert("f " + f);
      }
    };

    xhr.onload = function (a) {
      console.log("onload");
    };
    xhr.onerror = function () {
      console.log("error");
    };
    xhr.onabort = function () {
      console.log("abort");
    };
    xhr.ontimeout = function () {
      console.log("timeout");
    };
    xhr.onloadstart = function () {};
    xhr.onloadend = function () {};
    xhr.send(eqd);
  }

  encodeQueryData(data) {
    try {
      var ret = [];
      for (var d in data)
        ret.push(encodeURIComponent(d) + "=" + encodeURIComponent(data[d]));
      return ret.join("&");
    } catch (s) {
      alert("s " + s);
    }
  }

  buildUrlParams(object) {
    try {
      var urlParams = [];
      for (var key in object) {
        if (object.hasOwnProperty(key)) {
          urlParams.push(key + "=" + object[key]);
        }
      }
      return urlParams.join("&");
    } catch (r) {
      alert(r);
    }
  }

  /*public getList(type, cc?) {
        let query = '';
        switch (type) {
          // por tratamiento
          case 'empresa':
            query = 'select id, name from Cliente1 order by name';
            break;
    
          case 'ciudad':
            query = 'select id, name from Ciudad1 where id IN ('+ cc +')  order by name';
            break;
    
          case 'ips':
            query = 'select R11461461 from IPS_Aliado order by name';
            break;
    
          case 'cita':
            query = 'select id, name from Cita order by name';
            break;
    
          case 'paciente':
            query = `select id, Nombre from Paciente1 where Numero_Documento=${cc}`;
            break;
        }
    
        return this.request('get', `selectQuery?startRow=0&maxRows=100000&output=json&query=${query}`);
      } */
}
