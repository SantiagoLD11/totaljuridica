import {
  Component,
  OnInit,
  ViewEncapsulation,
  OnDestroy,
  ElementRef,
  ViewChild,
} from "@angular/core";
import {
  FormBuilder,
  FormGroup,
  PatternValidator,
  Validators,
} from "@angular/forms";
import { MatDialog, MatDialogRef } from "@angular/material/dialog";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Subject } from "rxjs";
import {
  CalendarEvent,
  CalendarEventAction,
  CalendarEventTimesChangedEvent,
  CalendarMonthViewDay,
} from "angular-calendar";
import { FuseConfigService } from "@fuse/services/config.service";
import { addHours, isSameDay, isSameMonth, addMinutes } from "date-fns";
import { FuseConfirmDialogComponent } from "@fuse/components/confirm-dialog/confirm-dialog.component";
import { fuseAnimations } from "@fuse/animations";
import { MatStepper } from "@angular/material/stepper";

import { CalendarService } from "app/main/apps/calendar/calendar.service";
import { CalendarEventModel } from "app/main/apps/calendar/event.model";
import { CalendarEventFormDialogComponent } from "app/main/apps/calendar/event-form/event-form.component";
import {
  ActivatedRoute,
  ActivatedRouteSnapshot,
  Router,
} from "@angular/router";
import * as moment from "moment";
import { registerLocaleData } from "@angular/common";
import { HttpClient } from '@angular/common/http';
import localeEs from "@angular/common/locales/es";
import { find } from "lodash";
import { citys } from "../../../../constants/city";

import Swal from "sweetalert2";

interface CalendarOptions {
  weekendDays: number[];
}

@Component({
  selector: "calendar",
  templateUrl: "./calendar.component.html",
  styleUrls: ["./calendar.component.scss"],
  encapsulation: ViewEncapsulation.None,
  animations: fuseAnimations,
})
export class CalendarComponent implements OnInit, OnDestroy {
  @ViewChild(MatStepper) stepper: MatStepper;
  @ViewChild("UploadFileInput") uploadFileInput: ElementRef;
  form: FormGroup;

  // Horizontal Stepper
  horizontalStepperStep1: FormGroup;
  horizontalStepperStep2: FormGroup;
  horizontalStepperStep3: FormGroup;
  http: HttpClient;

  // Vertical Stepper
  verticalStepperStep1: FormGroup;
  verticalStepperStep2: FormGroup;
  verticalStepperStep3: FormGroup;
  verticalStepperStep4: FormGroup;
  btnCalendar: any = true;
  particularDiv = true;
  approvedTransacc: boolean = false;
  selected = 0;
  myfilename = "";
  fileContent: any;

  actions: CalendarEventAction[];
  activeDayIsOpen: boolean;
  confirmDialogRef: MatDialogRef<FuseConfirmDialogComponent>;
  dialogRef: any;
  events: CalendarEvent[];
  refresh: Subject<any> = new Subject();
  selectedDay: any;
  view: string;
  viewDate: Date;
  clientes: any;
  clientesService: any;
  // ciudades: any = citys;
  ciudades: any;
  examenes: any;
  subempresas: any;
  ips: any;
  docType: any;
  typeOfRelationship: any;
  citysClient: any;
  AttentionChannel: any;
  user: any;
  resume: any;
  pruebasRealizar: any;
  pruebasRealizarSelec: any;
  pruebasRealizarTot: any;
  fecha: Date;
  hour: string;
  perfil: any;
  letters: any = [];
  hours: any;
  disponibilidad: any;
  consultorio: any = 0;
  fechaFacke: String;
  empresaName: String;
  empresa: any;
  citaId: any;
  ciudad: any;
  disabledCiudad: boolean = false;
  cliente: any;
  tipoExamen: any;
  docu: any;
  docNumber: any;
  id: any;
  nombre: any;
  apellido: any;
  cargo: any;
  tel: any;
  email: any;
  emailCc: any;
  subempresa: any;
  cita: any;
  observaciones: any;
  espacio: any = false;
  payProcess: boolean = false;

  paso1Completado: boolean = false;
  paso2Completado: boolean = false;

  msgOthersCities: any = "";
  disastep: boolean;
  isWeb = true;
  modalidad = "Presencial";

  // Private
  private _unsubscribeAll: Subject<any>;

  calendarOptions: CalendarOptions;

  constructor(
    private _formBuilder: FormBuilder,
    private _fuseConfigService: FuseConfigService,
    private _matDialog: MatDialog,
    private _calendarService: CalendarService,
    private router: ActivatedRoute,
    private _snackBar: MatSnackBar
  ) {
    this.calendarOptions = {
      weekendDays: [6, 0], // 6 representa sábado, 0 representa domingo
    };
    registerLocaleData(localeEs);
    moment.locale("es");
    // Set the private defaults
    this._unsubscribeAll = new Subject();
    this._fuseConfigService.config = {
      layout: {
        navbar: {
          hidden: true,
        },
        toolbar: {
          hidden: true,
        },
        footer: {
          hidden: true,
        },
        sidepanel: {
          hidden: true,
        },
      },
    };
    // Set the defaults
    this.view = "week";
    this.viewDate = new Date();
    //this.activeDayIsOpen = true;
    //this.selectedDay = {date: startOfDay(new Date())};

    this.actions = [
      {
        label: '<i class="material-icons s-16">check_box</i>',
        onClick: ({ event }: { event: CalendarEvent }): void => {
          this.editEvent("edit", event);
        },
      },
    ];

    /**
     * Get events from service/server
     */
    this.setEvents();
  }

  // -----------------------------------------------------------------------------------------------------
  // @ Lifecycle hooks
  // -----------------------------------------------------------------------------------------------------

  /**
   * On init
   */
  ngOnInit(): void {

    this.form = this._formBuilder.group({
      company: [
        {
          value: "Google",
          disabled: true,
        },
        Validators.required,
      ],
      firstName: ["", Validators.required],
      lastName: ["", Validators.required],
      address: ["", Validators.required],
      address2: ["", Validators.required],
      city: ["", Validators.required],
      state: ["", Validators.required],
      postalCode: ["", [Validators.required, Validators.maxLength(5)]],
      country: ["", Validators.required],
    });

    // Horizontal Stepper form steps
    this.horizontalStepperStep3 = this._formBuilder.group({
      canal: [""],
      ciudad: [""],
      disciplina: ["", Validators.required],
      observaciones: [""],

    });

    // this.horizontalStepperStep3.get('canal').valueChanges.subscribe((value) => {
    //   if (value !== 46051562) {
    //     this.horizontalStepperStep3.get('ciudad').setValidators([Validators.required, Validators.required]);
    //   } else {
    //     this.horizontalStepperStep3.get('ciudad').clearValidators();
    //   }
    //   this.horizontalStepperStep3.get('ciudad').updateValueAndValidity();
    // });

    this.horizontalStepperStep1 = this._formBuilder.group({
      documentNumber: ["", Validators.pattern(/^[0-9]+$/)],
    });

    // Vertical Stepper form stepper
    this.verticalStepperStep1 = this._formBuilder.group({
      firstName: ["", Validators.required],
      lastName: ["", Validators.required],
    });

    this.verticalStepperStep4 = this._formBuilder.group({
      address: [""],
    });

    this.verticalStepperStep2 = this._formBuilder.group({
      id: [""],
      documentType: ["", Validators.required],
      ciudad: ["", Validators.required],
      document: ["", [Validators.required, Validators.pattern("^[0-9]+$")]],
      name: ["", [Validators.required]],
      lastName: ["", [Validators.required]],
      phone: ["", [Validators.required, Validators.pattern("^[0-9]+$")]],
      email: ["", [Validators.required, Validators.email]],

    });

    /**
     * Watch re-render-refresh for updating db
     */
    this.refresh.subscribe((updateDB) => {
      if (updateDB) {
        this._calendarService.updateEvents(this.events);
      }
    });

    this._calendarService.onEventsUpdated.subscribe((events) => {
      this.setEvents();
      this.refresh.next();
    });

    const ccPaciente = this.router.snapshot.paramMap.get("id");
    console.log("id:", ccPaciente);
    if (ccPaciente != "new") {
      this.horizontalStepperStep1.controls["documentNumber"].setValue(
        ccPaciente
      );
      this.findByCC();
      this.isWeb = false;
    }

    this.router.queryParams.subscribe(params => { //Router [Url Actual] --> Parametros de Payu
      console.log('Respuesta de PayU:', params);
      if (Object.keys(params).length > 0) {
        console.log('Tiene Informacion');
        console.log('Mensaje: ' + params.lapResponseCode);
        this.payProcess = true; // Proceso de Pago
        this.returnState();
        if (params.transactionState == 4) { // Existoso
          console.log('Pago Exitoso');
          this.approvedTransacc = true;

          Swal.fire({
            title: `Su pago fue realizado correctamente. ${params.lapResponseCode}`,
            icon: "info",
          });
        } else {
          console.log('Pago Declinado');

          Swal.fire({
            title: `El pago fue rechazado.. ${params.lapResponseCode}`,
            icon: "info",
          });
        }
        //----------------------------//Notificar Estado de Transaccion a Cita//-------------//

        try {
          const queryParamsObject = {};
          for (const key in params) {
            if (params.hasOwnProperty(key)) {
              queryParamsObject[key] = encodeURIComponent(params[key]);
            }
          }
      
          // Convertir el objeto a JSON
          const jsonParams = JSON.stringify(queryParamsObject);

         // let jsonParams = decodeURIComponent(params.queryParams.toString());

          console.log('Pruebas AAA : '+ jsonParams);

          this.CreateTransaction(queryParamsObject);

        } catch (error) {
          console.log("No se pudo analizar la cadena JSON: "+ error);
        }

      } else {
        console.log('No Tiene informacion queryParams');
      }

      // Aquí puedes realizar acciones adicionales, como procesar los datos recibidos.
    });
  }

  returnState(): void {
    const retrievedData = JSON.parse(sessionStorage.getItem('dataClient')) || {};

    console.log('JSON Data: ' + retrievedData);
    console.log('Numero Doc: ' + retrievedData.numeroDoc);

    //------------------------------//Recuperar Estado Anterior//------------//
    this.horizontalStepperStep1.controls["documentNumber"].setValue(retrievedData.numeroDoc);
    this.verticalStepperStep2.controls["document"].setValue(retrievedData.numeroDoc);
    this.verticalStepperStep2.controls["id"].setValue(retrievedData.idCiudad);
    this.verticalStepperStep2.controls["ciudad"].setValue(retrievedData.ciudadRId);
    this.horizontalStepperStep3.controls["ciudad"].setValue(retrievedData.ciudadCId);
    this.horizontalStepperStep3.controls["disciplina"].setValue(retrievedData.disciplina);
    this.horizontalStepperStep3.controls["canal"].setValue(retrievedData.canalId);
    this.verticalStepperStep2.controls["documentType"].setValue(retrievedData.typeDoc);
    //this.verticalStepperStep2.controls["documentType"].setValue(45980159);
    this.verticalStepperStep2.controls["name"].setValue(retrievedData.nombres);
    this.verticalStepperStep2.controls["lastName"].setValue(retrievedData.apellidos);
    this.verticalStepperStep2.controls["email"].setValue(retrievedData.correo);
    this.verticalStepperStep2.controls["phone"].setValue(retrievedData.phone);
    this.horizontalStepperStep3.controls["observaciones"].setValue(retrievedData.observac);
    this.consultorio = parseInt(retrievedData.idDispo);
    this.citaId = retrievedData.idCita;
    this.id = retrievedData.idCliente;
    //-----------------------------------//Pagina de COnfirmacion//--------------------//

    this.docu = retrievedData.pcTypDoc; //TypeDoc
    this.docNumber = retrievedData.numeroDoc;
    this.nombre = retrievedData.nombres;
    this.apellido = retrievedData.apellidos;
    this.tel = retrievedData.phone;
    this.fechaFacke = retrievedData.pcFechaCita;
    this.observaciones = retrievedData.observac;

    ///Eliminar validacion campo ciudad paso 3.
    this.disabledCiudad = retrievedData.canalId === 46051562 ? true : false;
    this.horizontalStepperStep3.get("ciudad").clearValidators();
    this.horizontalStepperStep3.get("ciudad").updateValueAndValidity();
    this.disastep = false;

    this.findByCC();

    //sessionStorage.removeItem('dataClient');
  }

  CreateTransaction(dataTransac: any) {

    console.log('JSON Data Create: ' + dataTransac);

    let dataJSON: any = {
      jsonInfo: JSON.stringify(dataTransac),
      transactionId: dataTransac.transactionId,
      idCita: this.citaId,
      idClient: this.id
    };

    this._calendarService.CreateTransaccion(dataJSON).subscribe(
      (data) => {
        console.log("Respuesta Rolb Transa" + data);
        if (data) {
          console.log("Transaccion Creada correctamente");
        }
      },
      (err) => {
        console.log("Error en creacion Ts: " + JSON.stringify(err));
      }
    );
    //------------------------------//Recuperar Estado Anterior//------------/

    //sessionStorage.removeItem('dataClient');
  }

  fileChangeEventSave(fileInput: any) {
    Array.from(fileInput.target.files).forEach((file: File) => {
      console.log(file);
      this.horizontalStepperStep3.controls["soporte"].setValue(file.name);
    });

    let reader = new FileReader();
    if (fileInput.target.files && fileInput.target.files.length > 0) {
      let file = fileInput.target.files[0];
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.fileContent = {
          id: this.citaId,
          fieldName: "Adjunto_Cliente",
          fileName: file.name,
          contentType: file.type,
          value: reader.result.toString().split(",")[1],
        };
        this._calendarService.loadSecure(this.fileContent);
        alert("Se cargo el soporte de forma correcta");
      };
    }
  }

  fileChangeEvent(fileInput: any) {
    if (fileInput.target.files && fileInput.target.files[0]) {
      Array.from(fileInput.target.files).forEach((file: File) => {
        console.log(file);
        this.horizontalStepperStep3.controls["soporte"].setValue(file.name);
      });

      let reader = new FileReader();
      if (fileInput.target.files && fileInput.target.files.length > 0) {
        let file = fileInput.target.files[0];
        reader.readAsDataURL(file);
        reader.onload = () => {
          this.fileContent = {
            id: "",
            fieldName: "Adjunto_Cliente",
            fileName: file.name,
            contentType: file.type,
            value: reader.result.toString().split(",")[1],
          };
        };
      }
      // Reset File Input to Selct Same file again
      this.uploadFileInput.nativeElement.value = "";
    } else {
      this.horizontalStepperStep3.controls["soporte"].setValue(
        "Seleccione un archivo"
      );
    }
  }

  loadClientes(): void {
    this._calendarService.getClientes().subscribe(
      (data) => {
        if (data) {
          this.clientesService = data;
          this.clientes = data;
        }
      },
      (err) => {
        console.log("Error rec" + JSON.stringify(err));
      }
    );
  }

  loadSubempresa(id): void {
    //this.loadCiudades(id);
    this._calendarService.getSubempresa(id).subscribe(
      (data) => {
        if (data) {
          this.subempresas = data;
        }
      },
      (err) => {
        console.log("Error rec" + JSON.stringify(err));
      }
    );
  }

  // loadPerfiles(): void {
  //   this._calendarService.getPerfiles().subscribe(
  //     (data) => {
  //       if (data) {
  //         this.perfiles = data;
  //       }
  //     },
  //     (err) => {
  //       console.log("Error rec" + JSON.stringify(err));
  //     }
  //   );
  // }

  loadIps(): void {
    this._calendarService.getIps().subscribe(
      (data) => {
        if (data) {
          let iids = [];
          for (let i = 0; i < data.length; i++) {
            iids.push(data[i].id);
          }
          this.ips = data;
          //this.loadCiudades(iids.toString());
        }
      },
      (err) => {
        console.log("Error rec" + JSON.stringify(err));
      }
    );
  }

  loadCiudades(): void {
    this._calendarService.getCiudades().subscribe(
      (data) => {
        if (data) {
          this.ciudades = data;
        }
      },
      (err) => {
        console.log("Error rec" + JSON.stringify(err));
      }
    );
  }

  loadExmamenes(): void {
    this._calendarService.getTipoExamen().subscribe(
      (data) => {
        if (data) {
          this.examenes = data;
        }
      },
      (err) => {
        console.log("Error rec" + JSON.stringify(err));
      }
    );
  }

  getTypeOfRelationship(): void {
    this._calendarService.getTypeOfRelationship().subscribe(
      (data) => {
        console.log(data);

        if (data) {
          this.typeOfRelationship = data;
        }
      },
      (err) => {
        console.log("Error rec" + JSON.stringify(err));
      }
    );
  }
  getCitysClient(): void {
    this._calendarService.getCitysClient().subscribe(
      (data) => {
        console.log(data);

        if (data) {
          this.citysClient = data;
        }
      },
      (err) => {
        console.log("Error rec" + JSON.stringify(err));
      }
    );
  }

  getAttentionChannel(): void {
    this._calendarService.getAttentionChannel().subscribe(
      (data) => {
        if (data) {
          this.AttentionChannel = data;
        }
      },
      (err) => {
        console.log("Error rec" + JSON.stringify(err));
      }
    );
  }

  getPruebasRealizar(): void {
    this._calendarService.getPruebasRealizar().subscribe(
      (data) => {
        if (data) {
          this.pruebasRealizarTot = data;
        }
      },
      (err) => {
        console.log("Error rec" + JSON.stringify(err));
      }
    );
  }

  getUserByDoc(id): void {
    this._calendarService.getUserByDoc(id).subscribe(
      (data) => {
        if (data) {
          this.user = data;
        }
      },
      (err) => {
        console.log("Error rec" + JSON.stringify(err));
      }
    );
  }

  changeCita(id) {
    switch (id) {
      case 11460826:
        this.pruebasRealizar = [{ id: 11648146, name: "Examen médico" }];
        break;

      case 11486734:
        this.pruebasRealizar = this.pruebasRealizarTot;
        this.pruebasRealizarSelec = [
          11499760, 11499764, 11648146, 11499770, 11499776, 11499782, 11499786,
          11499797,
        ];
        break;

      case 11486850:
        this.pruebasRealizar = this.pruebasRealizarTot;
        this.pruebasRealizarSelec = [
          11499760, 11499762, 11570722, 11648146, 11499766, 11499769, 11499770,
          11499773, 11499776, 11499797,
        ];
        break;

      default:
        this.pruebasRealizar = this.pruebasRealizarTot;
        break;
    }
  }


  async changeCanal(event: any) {
    const valorProcesoActivo = this.cliente?.ProcesoActivo || 0;
    if (valorProcesoActivo == 1 && event.value === 46051562) {
      await Swal.fire({
        title: `El cliente ${this.cliente.nombre} ${this.cliente.apellido} tiene un proceso abierto no debe efectuar el pago de la consulta...`,
        icon: "info",
      });
    }

    if(event.value === 46051562){

      Swal.fire({
        title: `Las consultas en modalidad virtual tienen un costo de 140.000$ si no tienes un proceso activo`,
        icon: "warning", focusConfirm: true, confirmButtonText: 'Continuar'
      }).then((result) => {
        if (result.isConfirmed) {
          this.PayURequest();
        }
      })

    }

    console.log('canal de atencion', event);
    console.log('canal de atencion', event.value);
    if (event.value !== 46051562) {
      this.horizontalStepperStep3.get("ciudad").setValidators([Validators.required]);
      this.horizontalStepperStep3.get("ciudad").updateValueAndValidity();
    } else {
      this.horizontalStepperStep3.get("ciudad").clearValidators();
      this.horizontalStepperStep3.get("ciudad").updateValueAndValidity();
    }
    this.disabledCiudad = event.value === 46051562 ? true : false;

  }

  public onKey(name) {
    this.clientes = this.clientesService.filter((cliente) =>
      cliente.name.toLowerCase().includes(name.toLowerCase())
    );
    this.horizontalStepperStep3.get("empresa").setValue(this.clientes[0].id);
    this.selected = this.clientes[0].id;
    //this.loadPerfiles(this.selected);
  }

  public requestPaciente(fecha) {
    this.fecha = fecha;
    this.fechaFacke = moment(fecha).locale("es").format("DD/MM/YYYY hh:mm:ss");

  }

  public findByCC() {
    this._calendarService.getToken().subscribe((data) => {
      this._calendarService.getDocumentType().subscribe(
        (data) => {
          console.log("Condicion Pago: " + this.payProcess);
          if (data && !this.payProcess) {
            this.docType = data;
            this.searchByCC();
            this.getTypeOfRelationship();
            this.getCitysClient();
            this.getAttentionChannel();
            this.loadCiudades();
          } else { //Solo traer los datos de las listas estaticas 
            this.docType = data;
            this.getTypeOfRelationship();
            this.getCitysClient();
            this.getAttentionChannel();
            this.loadCiudades();
            this.stepper.next();
            this.stepper.next();
            this.stepper.next();
          }
        },
        (err) => {
          console.log("Error rec" + JSON.stringify(err));
        }
      );
    });
  }

  public filtrarOpciones(inputValue: string): string[] {
    const filtro = inputValue.toLowerCase();
    return this.citysClient.filter(opcion => opcion.toLowerCase().includes(filtro));
  }

  public searchByCC() {
    const cc = this.horizontalStepperStep1.controls["documentNumber"].value;
    this._calendarService.getPacienteByCC(cc).subscribe(
      async (data) => {
        console.log('data que llega', data);

        if (data) {
          this.cliente = data[0];
          if (data[0].ProcesoActivo == 0) {
            await Swal.fire({
              title: `El Cliente ${data[0].nombre} ${data[0].apellido} no tiene un proceso abierto...`,
              icon: "info",
            });
          }
          this.stepper.next();
          const docName = this.docType.filter((x) => x.id == data[0].tipoDoc);
          this.verticalStepperStep2.controls["id"].setValue(data[0].id);
          this.verticalStepperStep2.controls["documentType"].setValue(
            docName[0].name
          );
          this.verticalStepperStep2.controls["document"].setValue(Number(cc));
          this.verticalStepperStep2.controls["name"].setValue(data[0].nombre);
          this.verticalStepperStep2.controls["lastName"].setValue(
            data[0].apellido
          );
          this.verticalStepperStep2.controls["phone"].setValue(
            Number(data[0].celular)
          );
          this.verticalStepperStep2.controls["email"].setValue(data[0].email);
          this.verticalStepperStep2.controls["ciudad"].setValue(data[0].ciudad);
        }
      },
      (err) => {
        this.stepper.next();
        this.verticalStepperStep2.controls["id"].setValue("");

        this.verticalStepperStep2.controls["documentType"].setValue("");
        this.verticalStepperStep2.controls["document"].setValue(cc);
        this.verticalStepperStep2.controls["name"].setValue("");
        this.verticalStepperStep2.controls["lastName"].setValue("");
        this.verticalStepperStep2.controls["phone"].setValue("");
        this.verticalStepperStep2.controls["email"].setValue("");
        console.log("Error rec" + JSON.stringify(err));
      }
    );
  }

  /**
   * Finish the horizontal stepper
   */
  finishHorizontalStepper(): void {
    alert("You have finished the horizontal stepper!");
  }

  prepareData() {
    this.getDisponibilidad();
    // const emp = this.horizontalStepperStep3.controls["empresa"].value
    //   .toString()
    //   .trim();
    // this.empresa = emp;
    // console.log("empresa ...", emp);
    // const nameEmp = this.clientes.filter((x) => x.id == emp);
    // this.empresaName = nameEmp[0].name;
    this.ciudad = this.horizontalStepperStep3.controls["ciudad"].value;
    //this.tipoExamen = this.horizontalStepperStep3.controls['tipoExamen'].value;
    this.docu = this.verticalStepperStep2.controls["documentType"].value;
    this.docNumber = this.verticalStepperStep2.controls["document"].value;
    this.id = this.verticalStepperStep2.controls["id"].value;
    this.nombre = this.verticalStepperStep2.controls["name"].value.trim();
    this.apellido = this.verticalStepperStep2.controls["lastName"].value;
    //this.cargo = this.verticalStepperStep2.controls["position"].value;
    this.tel = this.verticalStepperStep2.controls["phone"].value;
    this.email = this.verticalStepperStep2.controls["email"].value;
    //this.emailCc = this.horizontalStepperStep3.controls['emailCc'].value;

    //this.subempresa = this.horizontalStepperStep3.controls["subempresa"].value;
    //this.cita = this.horizontalStepperStep3.controls['tipoExamen'].value;
    this.observaciones =
      this.horizontalStepperStep3.controls["observaciones"].value;
    //this.perfil = this.horizontalStepperStep3.controls["perfil"].value;
    const tmpCiud = this.ciudad;
    // if (this.ciudad != "24276760" || this.espacio) {
    //   this.disastep = false;
    //   this.fecha = new Date();
    //   this.finishVerticalStepper();

    //   if (!this.espacio) {
    //     let msg = this.ciudades.filter((x) => x.id == tmpCiud);
    //     this.msgOthersCities = msg[0].other;
    //   }
    // }
  }

  redirectAsso(): void {
    window.location.href = "https://totaljuridica.com/";
  }

  // particularChange(event){
  //     this.particularDiv = !event;
  //     if(event) {
  //         this.horizontalStepperStep3.controls['empresa'].setValue('24319022');
  //         this.loadPerfiles('24319022');
  //     }
  //     console.log("asasas", event);
  // }
  /**
   * Finish the vertical stepper
   */
  finishVerticalStepper(): void {
    if (this.consultorio !== 0) {
      if (this.id > 0) {
        this._calendarService
          .updatePaciente(
            this.empresa,
            this.verticalStepperStep2.controls["ciudad"].value,
            this.docu,
            this.docNumber,
            this.nombre,
            this.apellido,
            this.tel,
            this.tipoExamen,
            this.id,
            this.email
          )
          .subscribe(
            (data) => {
              if (data) {
                this.stepper.next();
                this.crearCita(this.id);
              }
            },
            (err) => {
              console.log("Error rec" + JSON.stringify(err));
            }
          );
      } else {
        this._calendarService
          .createPaciente(
            this.verticalStepperStep2.controls["ciudad"].value,
            this.docu,
            this.docNumber,
            this.nombre,
            this.apellido,
            this.tel,
            this.cargo,
            this.tipoExamen,
            this.email
          )
          .subscribe(
            (data) => {
              if (data) {
                //console.log(data);
                this.id = data.id;
                this.stepper.next();
                this.crearCita(this.id);
                //alert('Se registró la cita con éxito!');
                //this.router.navigateByUrl('/pages/login');
              }
            },
            (err) => {
              console.log("Error rec", err?.status, err?.message);
            }
          );
      }

    } else {
      Swal.fire({
        title: `Debe seleccionar una disponibilidad para continuar..`,
        icon: "info",
      });
    }
  }

  crearCita(id) {
    const Json: any = {
      canal: this.horizontalStepperStep3.controls["canal"].value,
      //tipoConsulta: this.horizontalStepperStep3.controls["perfil"].value,
      tipoRelacion: this.horizontalStepperStep3.controls["disciplina"].value,
      dispo: this.consultorio

    };
    this._calendarService
      .createCita(id, this.fecha, this.horizontalStepperStep3.controls["ciudad"].value, this.observaciones, Json)
      .subscribe(
        async (data) => {
          if (data) {
            this.citaId = data.id;
            if (this.fileContent) {
              this.fileContent.id = this.citaId;
              this._calendarService.loadSecure(this.fileContent);
            }
            if (this.consultorio != 0) {
              this.updateDisponibilidad(this.consultorio);
            }
          }
          var isVirt: boolean = this.horizontalStepperStep3.controls["canal"].value == 46051562 ? true : false;

          await isVirt ? Swal.fire({
            title: `Se ha creado una solicitud de consulta, debes efectuar el pago de la consulta para poder recibir la atencion
            si el pago no es registrado en las ultimas 2 horas, su solicitud de consulta sera rechazada`,
            icon: "success", focusConfirm: true, confirmButtonText: 'Continuar con Pago'
          }).then((result) => {
            if (result.isConfirmed) {
              this.PayURequest();
            }
          }) : Swal.fire({
            title: `Su cita ha sido agendada correctamente`,
            icon: "success",
          })
          this.payProcess = true; //Esto para que cierre el proceso de agendamiento.
          console.log("data rec" + data);
        },
        async (err) => {
          console.log("Error rec" + JSON.stringify(err));
          await Swal.fire({
            title: `${err?.error?.message}`,
            icon: "error",
          });
        }
      );
  }

  updateDisponibilidad(id) {
    this._calendarService.updateDisponibilidad(id).subscribe(
      (data) => {
        if (data) {
          console.log("se registro con exito");
        }
      },
      (err) => {
        console.log("Error rec" + JSON.stringify(err));
      }
    );
  }

  // -----------------------------------------------------------------------------------------------------
  // @ Public methods
  // -----------------------------------------------------------------------------------------------------

  /**
   * Set events
   */
  setEvents(): void {
    this.events = this._calendarService.events.map((item) => {
      item.actions = this.actions;
      return new CalendarEventModel(item);
    });
  }

  /**
   * On destroy
   */
  ngOnDestroy(): void {
    // Unsubscribe from all subscriptions
    this._unsubscribeAll.next();
    this._unsubscribeAll.complete();
  }

  /**
   * Before View Renderer
   *
   * @param {any} header
   * @param {any} body
   */
  beforeMonthViewRender({ header, body }): void {
    /**
     * Get the selected day
     */
    const _selectedDay = body.find((_day) => {
      return _day.date.getTime() === this.selectedDay.date.getTime();
    });

    if (_selectedDay) {
      /**
       * Set selected day style
       * @type {string}
       */
      _selectedDay.cssClass = "cal-selected";
    }
  }

  /**
   * Day clicked
   *
   * @param {MonthViewDay} day
   */
  dayClicked(day: CalendarMonthViewDay): void {
    const date: Date = day.date;
    const events: CalendarEvent[] = day.events;

    if (isSameMonth(date, this.viewDate)) {
      if (
        (isSameDay(this.viewDate, date) && this.activeDayIsOpen === true) ||
        events.length === 0
      ) {
        this.activeDayIsOpen = false;
      } else {
        this.activeDayIsOpen = true;
        this.viewDate = date;
      }
    }
    this.selectedDay = day;
    this.refresh.next();
  }

  /**
   * Event times changed
   * Event dropped or resized
   *
   * @param {CalendarEvent} event
   * @param {Date} newStart
   * @param {Date} newEnd
   */
  eventTimesChanged({
    event,
    newStart,
    newEnd,
  }: CalendarEventTimesChangedEvent): void {
    event.start = newStart;
    event.end = newEnd;
    this.refresh.next(true);
  }

  /**
   * Delete Event
   *
   * @param event
   */
  deleteEvent(event): void {
    this.confirmDialogRef = this._matDialog.open(FuseConfirmDialogComponent, {
      disableClose: false,
    });

    this.confirmDialogRef.componentInstance.confirmMessage =
      "Are you sure you want to delete?";

    this.confirmDialogRef.afterClosed().subscribe((result) => {
      if (result) {
        const eventIndex = this.events.indexOf(event);
        this.events.splice(eventIndex, 1);
        this.refresh.next(true);
      }
      this.confirmDialogRef = null;
    });
  }

  /**
   * Edit Event
   *
   * @param {string} action
   * @param {CalendarEvent} event
   */
  editEvent(action: string, event: CalendarEvent): void {
    const eventIndex = this.events.indexOf(event);

    this.dialogRef = this._matDialog.open(CalendarEventFormDialogComponent, {
      panelClass: "event-form-dialog",
      data: {
        event: event,
        action: action,
      },
    });

    this.dialogRef.afterClosed().subscribe((response) => {
      if (!response) {
        return;
      }
      const actionType: string = response[0];
      const formData: FormGroup = response[1];
      switch (actionType) {
        /**
         * Save
         */
        case "save":
          this.events[eventIndex] = Object.assign(
            this.events[eventIndex],
            formData.getRawValue()
          );
          let tmp = formData.getRawValue();
          event.color.primary = "00FF00 ";
          event.color.secondary = "00FF00 ";
          const fecha = new Date(this.events[eventIndex].start);
          const tim = tmp.time.toString().split(":");
          this.consultorio = this.events[eventIndex].meta.location.toString();
          let a = new Date(
            fecha.getFullYear(),
            fecha.getMonth(),
            fecha.getDate(),
            tim[0],
            tim[1]
          );
          //this.requestPaciente(this.events[eventIndex].title, a);
          this.requestPaciente(a);
          this.refresh.next(true);

          alert("Se seleccionó la cita de forma exitosa");

          this.btnCalendar = false;

          break;
        /**
         * Delete
         */
        case "delete":
          this.deleteEvent(event);

          break;
      }
    });
  }

  /**
   * Add Event
   */
  addEvent(): void {
    this.events = [];
    this.dialogRef = this._matDialog.open(CalendarEventFormDialogComponent, {
      panelClass: "event-form-dialog",
      data: {
        action: "new",
        date: this.selectedDay.date,
      },
    });
    this.dialogRef.afterClosed().subscribe((response: FormGroup) => {
      if (!response) {
        return;
      }

      const newEvent = response.getRawValue();
      const tim = newEvent.time.toString().split(":");
      const fecha = new Date(newEvent.start);
      let a = new Date(
        fecha.getFullYear(),
        fecha.getMonth(),
        fecha.getDate(),
        tim[0],
        tim[1]
      );
      let event = {
        start: a,
        end: addHours(a, 1),
        title: newEvent.title,
        allDay: false,
        color: {
          primary: "#1E90FF",
          secondary: "#D1E8FF",
        },
        resizable: {
          beforeStart: true,
          afterEnd: true,
        },
        draggable: false,
        meta: {
          location: "Los Angeles",
          notes:
            "Eos eu verear adipiscing, ex ornatus denique iracundia sed, quodsi oportere appellantur an pri.",
        },
      };
      newEvent.actions = this.actions;
      //event.actions = this.actions;
      this.events.push(event);
      this.refresh.next(true);
      //this.requestPaciente(newEvent.title, a);
      this.requestPaciente(a);
      alert("Se seleccionó la cita de forma exitosa");
    });
  }

  // loadSchema(id): void {
  //   let letter = this.perfiles.filter((x) => x.id == id);
  //   if (letter.length > 0) {
  //     letter = letter[0].other;
  //     this._calendarService.getEsquema(letter).subscribe(
  //       (data) => {
  //         if (data) {
  //           this.modalidad =
  //             data[0].name == "G" ? "Telemedicina" : "Presencial";
  //           if (data[0].other2 == 0) {
  //             this.espacio = true;
  //             this.msgOthersCities = data[0].other3;
  //           } else {
  //             const laboratorioId = data[0].name == "L" ? true : false;
  //             this.letters = data[0].other;
  //             console.log("-------------------------------", data);
  //             this.getHoursByLetter(this.letters, laboratorioId);
  //           }
  //         }
  //       },
  //       (err) => {
  //         console.log("Error rec" + JSON.stringify(err));
  //       }
  //     );
  //   }
  // }

  private getHoursByLetter(letter: any, laboratorio: boolean) {
    if (letter) {
      this._calendarService.getFranjas(letter).subscribe(
        (data) => {
          if (data) {
            this.hours = data;
            //this.getDisponibilidad(data, laboratorio);
          }
        },
        (err) => {
          console.log("Error rec" + JSON.stringify(err));
        }
      );
    } else {
      this.events = [];
    }
  }

  formatTimeWithMeridian(time) {
    const hours = time.getHours();
    const minutes = time.getMinutes();
    const meridian = hours >= 12 ? "PM" : "AM";
    const formattedHours = hours % 12 || 12;
    const formattedMinutes = minutes.toString().padStart(2, "0");
    return `${formattedHours}:${formattedMinutes} ${meridian}`;
  }

  saveDatasessionStorage(): void {
    const data = {
      numeroDoc: this.horizontalStepperStep1.controls["documentNumber"].value,
      idCiudad: this.verticalStepperStep2.controls["id"].value,
      ciudadRId: this.verticalStepperStep2.controls["ciudad"].value,
      ciudadCId: this.horizontalStepperStep3.controls["ciudad"].value,
      disciplina: this.horizontalStepperStep3.controls["disciplina"].value,
      canalId: this.horizontalStepperStep3.controls["canal"].value,
      typeDoc: this.verticalStepperStep2.controls["documentType"].value,
      nombres: this.verticalStepperStep2.controls["name"].value,
      apellidos: this.verticalStepperStep2.controls["lastName"].value,
      correo: this.verticalStepperStep2.controls["email"].value,
      phone: this.verticalStepperStep2.controls["phone"].value,
      observac: this.horizontalStepperStep3.controls["observaciones"].value,
      idDisponi: this.consultorio,
      idCita: this.citaId,
      idCliente: this.id,
      //-----------------------//Datos Pagina Confirmacion//-------------------------//
      pcTypDoc: this.docu,
      pcFechaCita: this.fechaFacke

    }; // Objeto con múltiples valores a guardar
    sessionStorage.setItem('dataClient', JSON.stringify(data)); // Guardar el objeto en el sessionStorage
  }

  PayURequest(): void {
    let valorProcesoActivo: boolean = this.cliente?.ProcesoActivo || false;

    if (!this.approvedTransacc) {
      console.log('No existe transaccion aprobada ' + this.approvedTransacc);
    }

    if (parseInt(this.horizontalStepperStep3.controls["canal"].value) == 46051562 && !valorProcesoActivo && !this.approvedTransacc) {
      // URL que deseas abrir en la ventana emergente
      const url = 'https://biz.payulatam.com/B0f386eB2B4C561';

      this.saveDatasessionStorage();

      // const url = this.router.url;
      console.log('URL actual:', url);

      window.location.href = url;

    }
  }

  getDisponibilidad() {
    const Json: any = {
      canal: this.horizontalStepperStep3.controls["canal"].value,
      ciudad: this.horizontalStepperStep3.controls["ciudad"].value,
      tipo: this.horizontalStepperStep3.controls["disciplina"].value,
    };

    /* //Requerimiento Omitido 26/10/20230
    if(parseInt(Json.tipo) == parseInt('46066373')){ // Es Disciplina Penal, Crear Cita sin disponibilida
      this.ciudad = this.horizontalStepperStep3.controls["ciudad"].value;
      this.docu = this.verticalStepperStep2.controls["documentType"].value;
      this.docNumber = this.verticalStepperStep2.controls["document"].value;  //PROPIEDADES
      this.id = this.verticalStepperStep2.controls["id"].value;
      this.nombre = this.verticalStepperStep2.controls["name"].value.trim();
      this.apellido = this.verticalStepperStep2.controls["lastName"].value;
      this.tel = this.verticalStepperStep2.controls["phone"].value;
      this.email = this.verticalStepperStep2.controls["email"].value;
      this.observaciones = this.horizontalStepperStep3.controls["observaciones"].value;

      this.finishVerticalStepper();  //Adelantar Pasos
      this.stepper.selectedIndex = 3;
      this.stepper.next();
      */
    this._calendarService.getDisponibilidad(Json, "").subscribe(
      (data) => {
        console.log('Data: ' + data.length);
        if (data && data.length > 0) {
          this.disponibilidad = data;
          let dates = [];
          this.events = [];
          for (let index = 0; index < data.length; index++) {
            let fecha = new Date(data[index].other);
            let a = new Date(
              fecha.getFullYear(),
              fecha.getMonth(),
              fecha.getDate(),
              fecha.getHours(),
              fecha.getMinutes()
            );
            let fechaFinal = new Date(data[index].other3);
            let b = new Date(
              fechaFinal.getFullYear(),
              fechaFinal.getMonth(),
              fechaFinal.getDate(),
              fechaFinal.getHours(),
              fechaFinal.getMinutes()
            );
            const horaInicial = this.formatTimeWithMeridian(fecha);
            const horaFinal = this.formatTimeWithMeridian(fechaFinal);
            if (!dates.includes(a.getTime())) {
              dates.push(a.getTime());
              let event = {
                start: a,
                end: b,
                title: `${horaInicial} - ${horaFinal}`,
                allDay: false,
                color: {
                  primary: "#1E90FF",
                  secondary: "#D1E8FF",
                },
                resizable: {
                  beforeStart: true,
                  afterEnd: true,
                },
                draggable: false,
                meta: {
                  location: data[index].id,
                  notes:
                    "Eos eu verear adipiscing, ex ornatus denique iracundia sed, quodsi oportere appellantur an pri.",
                },
              };
              this.events.push(new CalendarEventModel(event));
              this.refresh.next(true);
            }
          }
          this.disastep = true;
          this.stepper.next();
        } else {
          Swal.fire({
            title: `No se encontro disponibilidades..`,
            icon: "info",
          });
          this.disastep = false;
        }
      },
      (err) => {
        Swal.fire({
          title: `No se encontro disponibilidades..`,
          icon: "info",
        });
        this.disastep = false;
        console.log("Error rec" + JSON.stringify(err));
      }
    );
  }
}
