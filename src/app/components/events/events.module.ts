import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { EventsComponent } from './events.component';
import { EventMainComponent } from '../event-main/event-main.component';
import { EventsSelectedComponent } from '../events-selected/events-selected.component';
import { SharedModule } from '../../shared.module';
import { HttpClientModule } from '@angular/common/http';
import { EventsService } from 'src/app/_services/events.service';
import { DataService } from 'src/app/_services/data.service';
import { SettingsService } from 'src/app/_services/settings.service';
import { EventsRoutingModule } from './events-routing.module';
import { TicketsComponent } from '../tickets/tickets.component';
import { HallComponent } from '../hall/hall.component';
import { ShoppingCartModule } from '../shopping-cart/shopping-cart.module';
import { TicketsService } from 'src/app/_services/tickets.service';


@NgModule({
  declarations: [
    EventsComponent,
    EventMainComponent,
    EventsSelectedComponent,
    TicketsComponent,
    HallComponent
  ],
  exports: [
    EventsComponent,
    EventMainComponent,
    EventsSelectedComponent,
    TicketsComponent,
    HallComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    SharedModule,
    HttpClientModule,
    EventsRoutingModule,
    ShoppingCartModule
  ],
  providers: [
    DataService,
    EventsService,
    SettingsService,
    TicketsService
  ],
})
export class EventsModule { }
