import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReservationsRoutingModule } from './reservations-routing.module';
import { ReservationPageComponent } from './pages/reservation-page/reservation-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { ReservationSuccessComponent } from './pages/reservation-success/reservation-success.component';


@NgModule({
  declarations: [
    ReservationPageComponent,
    ReservationSuccessComponent
  ],
  imports: [
    CommonModule,
    ReservationsRoutingModule,
    ReactiveFormsModule,
    SharedModule,
    TranslateModule
  ]
})
export class ReservationsModule { }
