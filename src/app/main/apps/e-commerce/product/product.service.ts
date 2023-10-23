import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { LoginService } from 'app/main/pages/authentication/login-2/login.service';
import { environment } from 'environments/environment';
import * as moment from 'moment';

@Injectable()
export class EcommerceProductService implements Resolve<any>
{
    routeParams: any;
    product: any;
    patient: any;
    appoiment: any;
    onProductChanged: BehaviorSubject<any>;
    onFilesChanged: BehaviorSubject<any>;
    onFileSelected: BehaviorSubject<any>;

    /**
     * Constructor
     *
     * @param {HttpClient} _httpClient
     */
    constructor(
        private _httpClient: HttpClient,
        private _loginService: LoginService,
        // Set the defaults
    )
    {
        // Set the defaults
        this.onProductChanged = new BehaviorSubject({});
        this.onFilesChanged = new BehaviorSubject({});
        this.onFileSelected = new BehaviorSubject({});
        moment.locale('es');
    }

    /**
     * Resolver
     *
     * @param {ActivatedRouteSnapshot} route
     * @param {RouterStateSnapshot} state
     * @returns {Observable<any> | Promise<any> | any}
     */
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any
    {
        this.routeParams = route.params;

        return new Promise(async (resolve, reject) => {

            /*let con = await this.getProduct();
            let cit = await this.getAppointment();
            let per = await this.getPatient();
            let result = { 'consulta': '1', 'cita': 's', 'perfil': 'as' };*/
            Promise.all([
                this.getProduct()
            ]).then(
                () => {
                    resolve(null);
                },
                reject
            );
        });
    }

    /**
     * Get product
     *
     * @returns {Promise<any>}
     */
    /*getProduct(): Promise<any>
    {
        return new Promise((resolve, reject) => {
            if ( this.routeParams.id === 'new' )
            {
                this.onProductChanged.next(false);
                resolve(false);
            }
            else
            {
                this._httpClient.get('api/e-commerce-products/' + this.routeParams.id)
                    .subscribe((response: any) => {
                        this.product = response;
                        this.onProductChanged.next(this.product);
                        resolve(response);
                    }, reject);
            }
        });
    }*/


    getDocuments(product, appoiment, patient): Promise<any> {
        const token = this._loginService.getToken();
        const tipo = this._loginService.getTipo();
        console.log("tipo -->>>>>>>>" + tipo);
        let query = `SELECT id,Nombre,Tipo_de_Documento%23value,Documento_URL,Visible_Medico FROM Documento2 where R17424681 = ${this.routeParams.handle}`; 
        // and Fecha_Resultado > yyyy - mm - dd(1) and Fecha_Resultado < yyyy - mm - dd(2)`);
        let url = `${environment.url}rest/api/selectQuery?maxRows=1000&query=` + query + "&sessionId=" + token + "&output=json&maxRows=1";
        return new Promise((resolve, reject) => {
            this._httpClient.get(url)//'api/e-commerce-products')
                .subscribe((response: any) => {
                    const info = new Array<any>();
                    const result = new Array<any>();
                    for (let i = 0; i < response.length; i++) {
                        let fech = moment(new Date()).format('ll');
                        let resultado = '';
                        let url = response[i][3].includes('impeltechnology') ? response[i][3] + '&sessionId=' + token : response[i][3];
                        switch(tipo)
                        {
                            case "Consulta":
                                if(!response[i][4]){
                                    result.push({ 'id': response[i][0], 'fecha': fech, 'nombre': response[i][1], 'url': url, 'type': response[i][2],'paciente': patient[0].nombre, 'cedula': patient[0].cedula});
                                }
                                break;

                            case "Medico":
                                result.push({ 'id': response[i][0], 'fecha': fech, 'nombre': response[i][1], 'url': url, 'type': response[i][2],'paciente': patient[0].nombre, 'cedula': patient[0].cedula});
                                break;

                            default:
                                result.push({ 'id': response[i][0], 'fecha': fech, 'nombre': response[i][1], 'url': url, 'type': response[i][2],'paciente': patient[0].nombre, 'cedula': patient[0].cedula});
                                break;
                        }                           
                    }
                    this.onFilesChanged.next(result);
                    if (result.length > 0) {
                        this.onFileSelected.next(result[0]);
                    } else {
                        this.onFileSelected.next({ 'id': '', 'fecha': '', 'nombre': '', 'url': '', 'type': '','paciente': '', 'cedula': ''});
                    }
                    let total = { 'consulta': product, 'cita': appoiment, 'perfil': patient, 'documentos': result }; 
                    this.onProductChanged.next(total);
                    resolve(result);
                }, reject);
        });
    }

    getProduct(): Promise<any> {
        const token = this._loginService.getToken();
        const tipo = this._loginService.getTipo();
        let query = encodeURI(`SELECT id,Fecha_Resultado,Nombre_Paciente,Cedula_Paciente,Estado_Txt,ResultadoPDF,
        Historia_Clinica,Audiometria,Audiometria_1,Optometria,Terapia_Fisica,Psicologia,Laboratorio,Pruebas_Complementarias
        FROM Consulta where id = ${this.routeParams.handle}`); // and Fecha_Resultado > yyyy - mm - dd(1) and Fecha_Resultado < yyyy - mm - dd(2)`);
        let url = `${environment.url}rest/api/selectQuery?maxRows=1000&query=` + query + "&sessionId=" + token + "&output=json&maxRows=1";
        return new Promise((resolve, reject) => {
            this._httpClient.get(url)//'api/e-commerce-products')
                .subscribe((response: any) => {
                    const info = new Array<any>();
                    const result = new Array<any>();
                    let fech = moment(response[0][1]).format('ll');
                    /*for (let i = 0; i < response.length; i++) {
                        let fech = moment(response[i][1]).format('ll');
                        let resultado = '';
                        switch(tipo)
                        {
                            case "Consulta":
                                resultado = response[i][5];
                                break;

                            case "Médico":
                                resultado = response[i][5]; 
                                result.push({ 'id': response[i][0], 'fecha': fech, 'nombre': 'Historia Clínica', 'url': response[i][6], 'type': 'Documento','paciente': response[i][2], 'cedula': response[i][3]});
                                result.push({ 'id': response[i][0], 'fecha': fech, 'nombre': 'Audiometría 1', 'url': response[i][7], 'type': 'Documento','paciente': response[i][2], 'cedula': response[i][3]});
                                result.push({ 'id': response[i][0], 'fecha': fech, 'nombre': 'Audiometría 2', 'url': response[i][8], 'type': 'Documento','paciente': response[i][2], 'cedula': response[i][3]});
                                result.push({ 'id': response[i][0], 'fecha': fech, 'nombre': 'Optometría', 'url': response[i][9], 'type': 'Documento','paciente': response[i][2], 'cedula': response[i][3]});
                                result.push({ 'id': response[i][0], 'fecha': fech, 'nombre': 'Terapia Física', 'url': response[i][10], 'type': 'Documento','paciente': response[i][2], 'cedula': response[i][3]});
                                result.push({ 'id': response[i][0], 'fecha': fech, 'nombre': 'Psicología', 'url': response[i][11], 'type': 'Documento','paciente': response[i][2], 'cedula': response[i][3]});
                                result.push({ 'id': response[i][0], 'fecha': fech, 'nombre': 'Laboratorio', 'url': response[i][12], 'type': 'Documento','paciente': response[i][2], 'cedula': response[i][3]});
                                result.push({ 'id': response[i][0], 'fecha': fech, 'nombre': 'Pruebas Complementarias', 'url': response[i][13], 'type': 'Documento','paciente': response[i][2], 'cedula': response[i][3]});
                                break;

                            case "Opto":
                                result.push({ 'id': response[i][0], 'fecha': fech, 'nombre': 'Audiometría 1', 'url': response[i][7], 'type': 'Documento','paciente': response[i][2], 'cedula': response[i][3]});
                                result.push({ 'id': response[i][0], 'fecha': fech, 'nombre': 'Audiometría 2', 'url': response[i][8], 'type': 'Documento','paciente': response[i][2], 'cedula': response[i][3]});
                                break;

                            case "Fono":
                                result.push({ 'id': response[i][0], 'fecha': fech, 'nombre': 'Optometría', 'url': response[i][9], 'type': 'Documento','paciente': response[i][2], 'cedula': response[i][3]});
                                break;
                            
                            case "Psi":
                                result.push({ 'id': response[i][0], 'fecha': fech, 'nombre': 'Psicologia', 'url': response[i][11], 'type': 'Documento','paciente': response[i][2], 'cedula': response[i][3]});
                                break;
                            
                            case "Fisio":
                                result.push({ 'id': response[i][0], 'fecha': fech, 'nombre': 'Laboratorio', 'url': response[i][12], 'type': 'Documento','paciente': response[i][2], 'cedula': response[i][3]});
                                break;

                            default:
                                result.push({ 'id': response[i][0], 'fecha': fech, 'nombre': 'Historia Clínica', 'url': response[i][6], 'type': 'Documento','paciente': response[i][2], 'cedula': response[i][3]});
                                result.push({ 'id': response[i][0], 'fecha': fech, 'nombre': 'Audiometría 1', 'url': response[i][7], 'type': 'Documento','paciente': response[i][2], 'cedula': response[i][3]});
                                result.push({ 'id': response[i][0], 'fecha': fech, 'nombre': 'Audiometría 2', 'url': response[i][8], 'type': 'Documento','paciente': response[i][2], 'cedula': response[i][3]});
                                result.push({ 'id': response[i][0], 'fecha': fech, 'nombre': 'Optometría', 'url': response[i][9], 'type': 'Documento','paciente': response[i][2], 'cedula': response[i][3]});
                                result.push({ 'id': response[i][0], 'fecha': fech, 'nombre': 'Terapia Física', 'url': response[i][10], 'type': 'Documento','paciente': response[i][2], 'cedula': response[i][3]});
                                result.push({ 'id': response[i][0], 'fecha': fech, 'nombre': 'Psicología', 'url': response[i][11], 'type': 'Documento','paciente': response[i][2], 'cedula': response[i][3]});
                                result.push({ 'id': response[i][0], 'fecha': fech, 'nombre': 'Laboratorio', 'url': response[i][12], 'type': 'Documento','paciente': response[i][2], 'cedula': response[i][3]});
                                result.push({ 'id': response[i][0], 'fecha': fech, 'nombre': 'Pruebas Complementarias', 'url': response[i][13], 'type': 'Documento','paciente': response[i][2], 'cedula': response[i][3]});
                                break;
                        }

                        info.push(
                            { 'id': response[i][0], 'fecha': fech, 'nombre': response[i][2], 'cedula': response[i][3], 'estado': response[i][4], 'resultado': resultado,
                              'historia': response[i][6], 'audiometria': response[i][7], 'audiometria1': response[i][8], 'optometria ': response[i][9], 
                              'terapia': response[i][10], 'psicologia': response[i][11], 'laboratorio': response[i][12], 'pruebas': response[i][13],
                         });
                        
                        this.onFilesChanged.next(result);
                        this.onFileSelected.next(result[0]); 
                         
                    }*/

                    let url = "";
                    if(response[0][5]) {
                        url = response[0][5].includes('impeltechnology') ? response[0][5] + '&sessionId=' + token : response[0][5];
                    }
                    
                    info.push(
                        { 'id': response[0][0], 'fecha': fech, 'nombre': response[0][2], 'cedula': response[0][3], 'estado': response[0][4], 'resultado': url,
                          'historia': response[0][6], 'audiometria': response[0][7], 'audiometria1': response[0][8], 'optometria ': response[0][9], 
                          'terapia': response[0][10], 'psicologia': response[0][11], 'laboratorio': response[0][12], 'pruebas': response[0][13],
                     });

                    
                    this.product = info;
                    //this.onProductChanged.next(this.product);
                   
                    resolve( this.getAppointment(this.product));
                }, reject);
        });
    }

    getAppointment(product): Promise<any> {
        const token = this._loginService.getToken();
        let query = encodeURI(`SELECT Fecha_Cita,Estado_Txt,Perfil_Txt,IPSTxt,Examenes_a_Realizar FROM Consulta where id=${this.routeParams.handle}`); // and Fecha_Resultado > yyyy - mm - dd(1) and Fecha_Resultado < yyyy - mm - dd(2)`);
        let url = `${environment.url}rest/api/selectQuery?maxRows=1000&query=` + query + "&sessionId=" + token + "&output=json&maxRows=1";
        return new Promise((resolve, reject) => {
            this._httpClient.get(url)
                .subscribe((response: any) => {
                    const result = new Array<any>();
                    if (response.length > 0){
                        for (let i = 0; i < response.length; i++) {
                            let fech = moment(response[i][0]).format('ll');
                            result.push({ 'startDate': fech, 'estadoCita': response[i][1], 'examenes': response[i][4], 'ips': response[i][3], 'perfil': response[i][2]});
                        }
                    }else{
                        result.push({ 'startDate': '', 'estado': '', 'ips': '', 'perfil': '' });
                    }
                    this.appoiment = result;
                    
                    //this.onProductChanged.next(this.appoiment);
                    resolve(this.getPatient(product, this.appoiment));
                }, reject);
        });
    }

    getPatient(product, appoiment): Promise<any> {
        const token = this._loginService.getToken();
        let query = encodeURI(`SELECT id, Nombre, Apellido, Numero_Documento, email, Celular, Direccion, Cargo FROM Candidato where id = ${this.routeParams.id}`); // and Fecha_Resultado > yyyy - mm - dd(1) and Fecha_Resultado < yyyy - mm - dd(2)`);
        let url = `${environment.url}rest/api/selectQuery?maxRows=1000&query=` + query + "&sessionId=" + token + "&output=json&maxRows=1";
        return new Promise((resolve, reject) => {
            this._httpClient.get(url)
                .subscribe((response: any) => {
                    const result = new Array<any>();
                    for (let i = 0; i < response.length; i++) {
                        result.push({ 'id': response[i][0], 'nombre': response[i][1], 'apellido': response[i][2], 'cedula': response[i][3], 'email': response[i][4], 'celular': response[i][5], 'direccion': response[i][6], 'cargo': response[i][7] });
                    }
                    //let total = { 'consulta': product, 'cita': appoiment, 'perfil': result }; 
                    this.patient = result;
                    //this.onProductChanged.next(total);
                    //resolve(result);
                    resolve(this.getDocuments(product, appoiment, this.patient));
                }, reject);
        });
    }

    /**
     * Save product
     *
     * @param product
     * @returns {Promise<any>}
     */
    saveProduct(product): Promise<any>
    {
        return new Promise((resolve, reject) => {
            this._httpClient.post('api/e-commerce-products/' + product.id, product)
                .subscribe((response: any) => {
                    resolve(response);
                }, reject);
        });
    }

    /**
     * Add product
     *
     * @param product
     * @returns {Promise<any>}
     */
    addProduct(product): Promise<any>
    {
        return new Promise((resolve, reject) => {
            this._httpClient.post('api/e-commerce-products/', product)
                .subscribe((response: any) => {
                    resolve(response);
                }, reject);
        });
    }
}
