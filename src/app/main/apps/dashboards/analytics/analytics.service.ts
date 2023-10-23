import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from 'app/main/pages/authentication/login-2/login.service';
import { environment } from 'environments/environment';

@Injectable()
export class AnalyticsDashboardService implements Resolve<any>
{
    widgets: any[];

    /**
     * Constructor
     *
     * @param {HttpClient} _httpClient
     */
    constructor(
        private _httpClient: HttpClient,
        private _loginService: LoginService
    )
    {
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
                this.getWidgets()
            ]).then(
                () => {
                    resolve();
                },
                reject
            );
        });
    }

    /**
     * Get widgets
     *
     * @returns {Promise<any>}
     */
    getWidgets(): Promise<any>
    {
        return new Promise((resolve, reject) => {
            this._httpClient.get('api/analytics-dashboard-widgets')
                .subscribe((response: any) => {
                    this.widgets = response;
                    resolve(this.getHistory(response));
                }, reject); 
        });
    }

    getHistory(elements): Promise<any> {

        const token = this._loginService.getToken();
        const idCustomer = this._loginService.getId();
        let currentYear = new Date().getFullYear();
        let currentMont = new Date().getMonth();
        let query = encodeURI(`Select Year, Mes, Consulta_Total from Historico_Consulta where Year in (${currentYear-2},${currentYear-1},${currentYear}) and R15746111 = ${idCustomer} order by Year, Mes`); // and Fecha_Resultado > yyyy - mm - dd(1) and Fecha_Resultado < yyyy - mm - dd(2)`);
        let url = `${environment.url}rest/api/selectQuery?maxRows=36&query=` + query + "&sessionId=" + token + "&output=json";
        let totalVisits = 0;
        let ant = 0;
        let act = 0;
        let inc = 0;
        return new Promise((resolve, reject) => {
            this._httpClient.get(url)//'api/e-commerce-products')
                .subscribe((response: any) => {
                    let major = 0;
                    let total = 0;
                    let wTotal = [];
                    if (response[0]){
                        for (let i = 0; i < response.length; i++) {
                            if (response[i]){
                                let year = response[i][0];
                                let month = response[i][1] - 1;
                                let value = response[i][2];
                                major = (value > major) ? value : major;
                                elements['widget1']['datasets'][year.toString()][0].data[month] = value;
                                wTotal.push(value);
                                if (response[i][1]-1 <= currentMont && year > (currentYear - 2)){
                                    totalVisits += value;
                                    ant += (year == (currentYear - 1)) ? value : 0;
                                    act += (year == currentYear) ? value : 0; 
                                }
                                //total = total + response[i][2];
                            }
                        }
                    }      
                    inc = act - ant;
                    let porc= inc/act;
                    let totInc = Math.round(porc *100);
                    elements['widget4']['visits']['value'] = totalVisits;
                    elements['widget4']['visits']['ofTarget'] = totInc;
                    elements['widget4']['datasets'][0]['data'] = [ant, act];
                    elements['widget4']['labels'] = [currentYear - 1, currentYear];
                    elements['widget4']['options']['scales']['yAxes'][0]['ticks']['max'] = (ant > act) ? ant : act;
                    console.log(elements);
                    elements['widget1']['options']['scales']['yAxes'][0]['ticks']['max'] = major;
                    elements['widget3']['impressions']['value'] = total;
                    elements['widget3']['datasets'][0]['data'] = wTotal;
                    resolve(this.getTotal(elements));
                }, reject);
        });
    }

    getTotal(elements): Promise<any> {

        const token = this._loginService.getToken();
        const idCustomer = this._loginService.getId();
        let query = encodeURI(`SELECT count(id) FROM Consulta where R15590415 = ${idCustomer}`); // and Fecha_Resultado > yyyy - mm - dd(1) and Fecha_Resultado < yyyy - mm - dd(2)`);
        let url = `${environment.url}rest/api/selectQuery?maxRows=36&query=` + query + "&sessionId=" + token + "&output=json";
        return new Promise((resolve, reject) => {
            this._httpClient.get(url)//'api/e-commerce-products')
                .subscribe((response: any) => {
                    if (response[0]) {
                        elements['widget3']['impressions']['value'] = response[0][0];
                    }
                    resolve(elements);
                }, reject);
        });
    }

}
