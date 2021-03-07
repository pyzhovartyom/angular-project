import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { PayingComponent } from './paying.component';
import { SharedModule } from '../../shared.module';
import { SuccessComponent } from '../success/success.component';
import { TicketsService } from 'src/app/_services/tickets.service';
import { PayingRoutingModule } from './paying-routing.module';
import { EventsService } from 'src/app/_services/events.service';


@NgModule({
  declarations: [
    PayingComponent,
    SuccessComponent,
  ],
  exports: [
    PayingComponent,
    SuccessComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    SharedModule,
    PayingRoutingModule
  ],
  providers: [
    TicketsService,
    EventsService
  ],
})
export class PayingModule { }
