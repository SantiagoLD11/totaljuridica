import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ColorPickerModule } from 'ngx-color-picker';
import { CalendarModule as AngularCalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { LoginService } from 'app/main/pages/authentication/login-2/login.service';
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { SweetAlert2Module } from "@sweetalert2/ngx-sweetalert2";


import { MatSelectModule } from '@angular/material/select';
import { MatStepperModule } from '@angular/material/stepper';


import { FuseSharedModule } from '@fuse/shared.module';
import { FuseConfirmDialogModule } from '@fuse/components';

import { CalendarComponent } from 'app/main/apps/calendar/calendar.component';
import { CalendarService } from 'app/main/apps/calendar/calendar.service';
import { CalendarEventFormDialogComponent } from 'app/main/apps/calendar/event-form/event-form.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
    {
        path     : '**',
        component: CalendarComponent,
        children : [],
        resolve  : {
            chat: CalendarService
        }
    }
];

@NgModule({
  declarations: [CalendarComponent, CalendarEventFormDialogComponent],
  imports: [
    RouterModule.forChild(routes),
    MatButtonModule,
    MatDatepickerModule,
    MatDialogModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatSlideToggleModule,
    MatToolbarModule,
    MatTooltipModule,
    MatCheckboxModule,
    MatSelectModule,
    MatStepperModule,
    MatSnackBarModule,
    ReactiveFormsModule,
    SweetAlert2Module,
    AngularCalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory,
    }),
    ColorPickerModule,

    FuseSharedModule,
    FuseConfirmDialogModule,
  ],
  providers: [CalendarService, LoginService],
  entryComponents: [CalendarEventFormDialogComponent],
})
export class CalendarModule {}
