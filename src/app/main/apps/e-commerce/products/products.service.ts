import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'environments/environment';
import { LoginService } from 'app/main/pages/authentication/login-2/login.service';
import * as moment from 'moment';

@Injectable()
export class EcommerceProductsService implements Resolve<any>
{
    products: any[];
    onProductsChanged: BehaviorSubject<any>;

    /**
     * Constructor
     *
     * @param {HttpClient} _httpClient
     */
    constructor(
        private _httpClient: HttpClient,
        private _loginService: LoginService,
    )
    {
        // Set the defaults
        this.onProductsChanged = new BehaviorSubject({});
        moment.locale('es')
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
        const st = route.params.type;
        return new Promise((resolve, reject) => {
            Promise.all([
                this.getSinConcepto(st)
            ]).then(
                () => {
                    resolve(null);
                },
                reject
            );
        });
    }

    getSinConcepto(st): Promise<any>
    {
        const token = this._loginService.getToken();
        let query = encodeURI(`SELECT id,Imagen_Sin_Concepto_URL from parametro`); // and Fecha_Resultado > yyyy - mm - dd(1) and Fecha_Resultado < yyyy - mm - dd(2)`);
        let url = `${environment.url}rest/api/selectQuery?maxRows=10000&query=` + query + "&sessionId=" + token + "&output=json";
        return new Promise((resolve, reject) => {
            this._httpClient.get(url)//'api/e-commerce-products')
                .subscribe((response: any) => {
                    resolve(this.getProducts(st, response[0][1]));
                }, reject);
        });
    }

    /**
     * Get products
     *
     * @returns {Promise<any>}
     */
    getProducts(st, sinConcepto): Promise<any>
    {
        //'Cancelado' OR 'No asistío' OR 'Agendada'
        const status = (st == 'prog') ? "Estado_Txt LIKE '%Agendada%'" : "(Estado_Txt LIKE '%Creado%' OR Estado_Txt LIKE '%Cumplida%' OR Estado_Txt LIKE '%Reprogramada%')";
        //const aEnabled = (st == 'prog') ? false : true;
        const token = this._loginService.getToken();
        const idCustomer = this._loginService.getId();
        let query = encodeURI(`SELECT R15590447,Fecha_Cita,Nombre_Paciente,Cedula_Paciente,Estado_Txt,ResultadoPDF,id,name,Sin_Concepto,status FROM Consulta where R15590415 = ${idCustomer} and ${status} order by id desc`); // and Fecha_Resultado > yyyy - mm - dd(1) and Fecha_Resultado < yyyy - mm - dd(2)`);
        let url = `${environment.url}rest/api/selectQuery?maxRows=10000&query=` + query + "&sessionId=" + token + "&output=json";
        return new Promise((resolve, reject) => {
            this._httpClient.get(url)//'api/e-commerce-products')
                .subscribe((response: any) => {
                    const result = new Array<any>();
                    for (let i = 0; i < response.length; i++) {
                        let fech = moment(response[i][1]).format('LLLL');
                        let show = (response[i][8] == null) ? 0 : response[i][8];
                        let urlDoc = (response[i][5] && response[i][5].toString().includes('amazon')) ? response[i][5] : response[i][5]  + "&sessionId=" + token;
                        let resultado = (show == 0) ? urlDoc : sinConcepto;
                        result.push({ 'id': response[i][0], 'fecha': fech, 'nombre': response[i][2], 'cedula': response[i][3], 'estado': response[i][4], 
                        'resultado': resultado, 'consulta': response[i][6], 'orden': response[i][7] });
                    }
                    this.products = result;
                    this.onProductsChanged.next(this.products);
                    resolve(result);
                }, reject);
        });
    }
}

/**
 * 'id'              : '1',
            'name'            : 'Andres Sanchez Ruiz',
            'handle'          : 'a-walk-amongst-friends-canvas-print',
            'description'     : 'Officia amet eiusmod eu sunt tempor voluptate laboris velit nisi amet enim proident et. Consequat laborum non eiusmod cillum eu exercitation. Qui adipisicing est fugiat eiusmod esse. Sint aliqua cupidatat pariatur mollit ad est proident reprehenderit. Eiusmod adipisicing laborum incididunt sit aliqua ullamco.',
            'categories'      : [
                '105478945',
                'Nature'
            ],
            'tags'            : [
                'canvas-print',
                'nature'
            ],
 * 
 */