import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'environments/environment';
import { LoginService } from 'app/main/pages/authentication/login-2/login.service';
import * as moment from 'moment';

@Injectable()
export class EcommerceDocumentsService implements Resolve<any>
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
        return new Promise((resolve, reject) => {
            Promise.all([
                this.getIps()
            ]).then(
                () => {
                    resolve(null);
                },
                reject
            );
        });
    }

    /**
     * Get products
     *
     * @returns {Promise<any>}
     */
     getIps(): Promise<any>
     {
         const token = this._loginService.getToken();
         const ciudades = this._loginService.getCiudadesTxt();
         let query = encodeURI(`SELECT id FROM IPS_Afiliada where R15596086 in (${ciudades}) order by id desc`); // where R15590415 = ${idCustomer} and ${status}  and Fecha_Resultado > yyyy - mm - dd(1) and Fecha_Resultado < yyyy - mm - dd(2)`);
         let url = `${environment.url}rest/api/selectQuery?maxRows=10000&query=` + query + "&sessionId=" + token + "&output=json";
         return new Promise((resolve, reject) => {
             this._httpClient.get(url)//'api/e-commerce-products')
                 .subscribe((response: any) => {
                     const result = [];
                     for (let i = 0; i < response.length; i++) {
                         result.push(response[i][0]);
                     }
                     this.onProductsChanged.next(this.products);
                     resolve(this.getDocuments(result.toString()));
                 }, reject);
         });
     }

    /**
     * Get products
     *
     * @returns {Promise<any>}
     */
    getDocuments(ids): Promise<any>
    {
        const token = this._loginService.getToken();
        const idCustomer = this._loginService.getId();
        let query = `SELECT id,IPS_txt,Ciudad_txt,Documento_Url,tipo%23value FROM Documento_IPS where R18464104 in (${ids}) order by IPS_txt asc`; // where R15590415 = ${idCustomer} and ${status}  and Fecha_Resultado > yyyy - mm - dd(1) and Fecha_Resultado < yyyy - mm - dd(2)`);
        let url = `${environment.url}rest/api/selectQuery?maxRows=10000&query=` + query + "&sessionId=" + token + "&output=json";
        return new Promise((resolve, reject) => {
            this._httpClient.get(url)//'api/e-commerce-products')
                .subscribe((response: any) => {
                    const result = new Array<any>();
                    for (let i = 0; i < response.length; i++) {
                        result.push({ 'id': response[i][0], 'ips': response[i][1], 'ciudad': response[i][2], 'archivo': response[i][3], 'tipo': response[i][4]});
                    }
                    this.products = result;
                    this.onProductsChanged.next(this.products);
                    resolve(result);
                }, reject);
        });
    }
}