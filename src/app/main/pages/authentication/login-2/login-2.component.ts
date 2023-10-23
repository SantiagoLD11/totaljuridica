import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { LoginService } from 'app/main/pages/authentication/login-2/login.service';
import { FuseConfigService } from '@fuse/services/config.service';
import { fuseAnimations } from '@fuse/animations';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { LoginService, TokenPayload } from './login.service';
//import { ToastyService, ToastOptions, ToastData } from 'ng2-toasty';

@Component({
    selector     : 'login-2',
    templateUrl  : './login-2.component.html',
    styleUrls    : ['./login-2.component.scss'],
    encapsulation: ViewEncapsulation.None,
    animations   : fuseAnimations
})
export class Login2Component implements OnInit
{
    loginForm: FormGroup;
    credentials: TokenPayload = {
        email: '',
        password: '',
    };

    /**
     * Constructor
     *
     * @param {FuseConfigService} _fuseConfigService
     * @param {FormBuilder} _formBuilder
     */
    constructor(
        private _fuseConfigService: FuseConfigService,
        private _formBuilder: FormBuilder,
        private _loginService: LoginService,
        private _location: Location,
        private router: Router,
       // private toastyService: ToastyService,
    )
    {;
        // Configure the layout
        this._fuseConfigService.config = {
            layout: {
                navbar   : {
                    hidden: true
                },
                toolbar  : {
                    hidden: true
                },
                footer   : {
                    hidden: true
                },
                sidepanel: {
                    hidden: true
                }
            }
        };
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void
    {
        this.loginForm = this._formBuilder.group({
            email   : ['', [Validators.required]],
            password: ['', Validators.required],
            type: ['E', ]
        });
    }




    login(): void 
    {
        this.credentials.email = this.loginForm.controls['email'].value;
        this.credentials.password = this.loginForm.controls['password'].value;
        this._loginService.login(this.credentials).subscribe((data) => {
                if (data) {
                    if(this.loginForm.controls['type'].value == 'P') {
                        this.loginPersonas(data);
                    } else {
                        this.getIdUser(data);
                    }
                } 
            }, (err) => {
                console.log("Error rec" + JSON.stringify(err));
            });
        //this._location.go('apps/dashboards/analytics');
    }

    private loginPersonas(data: any) {
        console.log('------------------------------' + data.sessionId);
        this._loginService.loginPersona(this.credentials.email, this.credentials.password, data.sessionId).subscribe((data) => {
            if (data[0]) {
                console.log("entra '/apps/consultas/'", data[0][0]);
                this.router.navigateByUrl('/apps/e-commerce/consultas/'+data[0][0]);
            }
        }, (err) => {
            console.log("Error rec" + JSON.stringify(err));
        });
    }

    private getIdUser(data: any) {
        this._loginService.getIdUser(this.credentials.email, this.credentials.password, data.sessionId).subscribe((dataId) => {
            if (dataId[0]) {
                this.getEnterpraise(dataId, data);
            } else {
                this.addToast({
                    title: 'Error de inicio de sesión',
                    msg: 'El usuario ingresado no se encuentra habilitado ',
                    timeout: 5000,
                    theme: 'default',
                    position: 'bottom-right',
                    type: 'warning'
                });
            }
        }, (err) => {
            this.addToast({
                title: 'Error de inicio de sesión',
                msg: 'Datos de inicio de sesión incorrectos!',
                timeout: 5000,
                theme: 'default',
                position: 'bottom-right',
                type: 'error'
            });
            return;
        });
    }

    private getEnterpraise(dataId: any, data: any) {
        this._loginService.getEnterpriseId(dataId[0][0], data.sessionId).subscribe((dataEnt) => {
            if (dataEnt[0]) {
                //console.log(dataEnt[0][7]);
                this._loginService.setLogo(dataEnt[0][4]);
                //console.log("entra a enter" + dataEnt[0]);
                this.router.navigateByUrl('/apps/dashboards/analytics');
            } else {
                this.addToast({
                    title: 'Error de inicio de sesión',
                    msg: 'El usuario ingresado no a sido creado en SAP',
                    timeout: 5000,
                    theme: 'default',
                    position: 'bottom-right',
                    type: 'warning'
                });
                return;
            }

        }, (err) => {
            this.addToast({
                title: 'Error de inicio de sesión',
                msg: 'El usuario ingresado no a sido creado en SAP',
                timeout: 5000,
                theme: 'default',
                position: 'bottom-right',
                type: 'warning'
            });
            return;
        });
    }

    addToast(options) {
        console.log(options);
        /*if (options.closeOther) {
            this.toastyService.clearAll();
        }
        this.position = options.position ? options.position : this.position;
        const toastOptions: ToastOptions = {
            title: options.title,
            msg: options.msg,
            showClose: options.showClose,
            timeout: options.timeout,
            theme: options.theme,
            onAdd: (toast: ToastData) => {
                console.log('Toast ' + toast.id + ' has been added!');
            },
            onRemove: (toast: ToastData) => {
                console.log('Toast ' + toast.id + ' has been added removed!');
            }
        };

        switch (options.type) {
            case 'default': this.toastyService.default(toastOptions); break;
            case 'info': this.toastyService.info(toastOptions); break;
            case 'success': this.toastyService.success(toastOptions); break;
            case 'wait': this.toastyService.wait(toastOptions); break;
            case 'error': this.toastyService.error(toastOptions); break;
            case 'warning': this.toastyService.warning(toastOptions); break;
        }*/
    } 
}
