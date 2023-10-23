import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'environments/environment';
import { LoginService } from 'app/main/pages/authentication/login-2/login.service';
import * as moment from 'moment';

@Injectable()
export class ConsultasService implements Resolve<any>
{
    orders: any[];
    onOrdersChanged: BehaviorSubject<any>;

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
        this.onOrdersChanged = new BehaviorSubject({});
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
        const idPaciente = route.params.paciente;
        return new Promise((resolve, reject) => {
            Promise.all([
                this.getOrders(idPaciente)
            ]).then(
                () => {
                    resolve(null);
                },
                reject
            );
        });
    }

    /**
     * Get orders
     *
     * @returns {Promise<any>}
     */
    getOrders(idPaciente): Promise<any>
    {
        const token = this._loginService.getToken();
        let query = encodeURI(`SELECT id,Secuencia,Fecha_Cita,Perfil_Txt,PDF_Paciente_URL from Consulta where R15590447=${idPaciente} and Fecha_Cita is not null`); // and Fecha_Resultado > yyyy - mm - dd(1) and Fecha_Resultado < yyyy - mm - dd(2)`);
        let url = `${environment.url}rest/api/selectQuery?maxRows=10000&query=` + query + "&sessionId=" + token + "&output=json";
        return new Promise((resolve, reject) => {
            this._httpClient.get(url)//'api/e-commerce-products')
                .subscribe((response: any) => {
                    const result = new Array<any>();
                    
                    for (let i = 0; i < response.length; i++) {
                        let fech = moment(response[i][2]).format('YYYY-MM-DD HH:mm:ss');
                        let urlDoc = (response[i][4]) ? response[i][4] + "&sessionId=" + token : null;
                        result.push({ 'id': response[i][0], 'fecha': fech, 'secuencia': response[i][1], 
                        'perfil': response[i][3], 'url': urlDoc });
                    }
                    
                    this.orders = result;
                    this.onOrdersChanged.next(this.orders);
                    resolve(result);
                    resolve(response);
                }, reject);
        });
    }

}
